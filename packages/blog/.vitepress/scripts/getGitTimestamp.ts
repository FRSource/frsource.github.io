import { SpawnOptionsWithoutStdio } from "child_process";
import { spawn } from "cross-spawn";

export function getGitTimestamp(
    file: string,
    options?: SpawnOptionsWithoutStdio,
) {
    return new Promise<number>((resolve, reject) => {
        const child = spawn(
            "git",
            ["log", "-1", '--pretty="%ci"', file],
            options,
        );
        let output = "";
        child.stdout.on("data", (d) => (output += String(d)));
        child.on("close", () => {
            resolve(+new Date(output));
        });
        child.on("error", reject);
    });
}
