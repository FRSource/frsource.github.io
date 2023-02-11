import path from "path";
import { promises as fs } from "fs";
import fsExtra from "fs-extra";
import chokidar from "chokidar";
import commandLineArgs from "command-line-args";
import { memoize } from "lodash";
import {
    diff,
    addedDiff,
    deletedDiff,
    updatedDiff,
    detailedDiff,
} from "deep-object-diff";

const SYNCED_FILES_PATH = path.join(__dirname, ".synced-posts");
const LOCALES = ["en", "pl"];
const DEFAULT_LOCALE = LOCALES[0];
const DEFAULT_LOCALE_DIR = "";

const memoizedPostDestinationPath = memoize(postDestinationPath);

const args = commandLineArgs([
    { name: "watch", alias: "w", type: Boolean },
    { name: "sync-with-medium", type: Boolean },
]);
const cwd = path.join(__dirname, "..");

const watcher = chokidar
    .watch("./post/**/*", {
        cwd,
        ignoreInitial: true,
    })
    .on("ready", async () => {
        await clearPosts();
        const filesToSync = await filterOutDirs(watcher.getWatched());
        console.log("ready", filesToSync);
        await copyPosts(filesToSync);
        if (!args.watch) await watcher.close();
    })
    .on("all", (event, filepath, stats) => {
        switch (event) {
            case "add":
            case "change":
                copyPostFile(filepath);
                break;
            case "unlink":
            case "unlinkDir":
                fsExtra
                    .remove(memoizedPostDestinationPath(filepath))
                    .catch(
                        (e) =>
                            `Error :: unsuccessful unlink for path: ${memoizedPostDestinationPath(
                                filepath
                            )}`
                    );
                break;
        }
    });

///

function withCwd(...paths: string[]) {
    return path.join(cwd, ...paths);
}

function parsePostPath(srcPostPath: string) {
    const separator = `\\${path.sep}`;
    const regex = new RegExp(
        `post${separator}([^${separator}]+)${separator}([^${separator}]+)${separator}?(.*)?$`,
        "i"
    );
    const [, postname, locale, rest = ""] = srcPostPath.match(regex);

    return { postname, locale, rest };
}

async function copyPosts(postsToCopy: Record<string, string[]>) {
    await Promise.all(
        Object.keys(postsToCopy).map((dirPath) =>
            Promise.all(
                postsToCopy[dirPath].map((filename) =>
                    filename === "index.md"
                        ? copyPostFile(path.join(dirPath, filename))
                        : copyPostAsset(path.join(dirPath, filename))
                )
            )
        )
    );
}

async function copyPostFile(srcFilepath: string) {
    const srcContent = await fsExtra.readFile(
        withCwd(path.dirname(srcFilepath), path.basename(srcFilepath))
    );
    return fsExtra.outputFile(
        memoizedPostDestinationPath(srcFilepath),
        srcContent
            .toString()
            .replace("---", `---\ntype: article\nsrcPath: "${srcFilepath}"`)
    );
}

async function copyPostAsset(srcFilepath: string) {
    return fsExtra.copy(
        withCwd(path.dirname(srcFilepath), path.basename(srcFilepath)),
        memoizedPostDestinationPath(srcFilepath, true),
        { overwrite: true, recursive: true }
    );
}

function postDestinationPath(srcFilepath: string, isAsset?: boolean) {
    const { locale, postname, rest } = parsePostPath(srcFilepath);
    return withCwd(
        "..",
        isAsset ? "public" : "",
        locale === DEFAULT_LOCALE ? DEFAULT_LOCALE_DIR : locale,
        "post",
        postname,
        rest
    );
}

async function clearPosts() {
    await Promise.all(
        LOCALES.map((locale) =>
            fsExtra.remove(
                withCwd(
                    "..",
                    locale === DEFAULT_LOCALE ? DEFAULT_LOCALE_DIR : locale,
                    "post"
                )
            )
        )
    );
}

async function readSyncedFiles() {
    return JSON.parse((await fs.readFile(SYNCED_FILES_PATH)).toString());
}

async function filterOutDirs(fileTree: Record<string, string[]>) {
    const fileTreeCopy = {};
    await Promise.all(
        Object.keys(fileTree).map(async (dirPath) => {
            fileTreeCopy[dirPath] = [];
            await Promise.all(
                fileTree[dirPath].map(async (pathname) => {
                    if (await isFile(withCwd(dirPath, pathname)))
                        fileTreeCopy[dirPath].push(pathname);
                })
            );
            if (!fileTreeCopy[dirPath].length) delete fileTreeCopy[dirPath];
        })
    );
    return fileTreeCopy;
}

function isFile(filepath: string) {
    return fs
        .stat(filepath)
        .then((stat) => stat.isFile())
        .catch(() => false);
}
