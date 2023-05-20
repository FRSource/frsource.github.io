/// <reference path="../typings.d.ts" />

import {
    defineConfigWithTheme,
    DefaultTheme,
    LocaleConfig,
    PageData,
} from "vitepress";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { parsePostMarkdown } from "./scripts/posts.utils";
import { getGitCreationTimestamp } from "./scripts/getGitCreationTimestamp";
import { getGitTimestamp } from "./scripts/getGitTimestamp";

const generateEditLink = (pageData: PageData) => {
    if (pageData.frontmatter?.type === "article") {
        return `https://github.com/FRSOURCE/FRSource.github.io/edit/dev/packages/blog/.vitepress/${pageData.frontmatter.srcPath}/index.md`;
    }

    return "https://github.com/FRSOURCE/FRSource.github.io/";
};

type ArticleData = PageData["articles"]["root"][0];

const locales: LocaleConfig = {
    root: {
        lang: "en",
        label: "English",
        title: "",
        titleTemplate: ":titleFRSPACE - Web, IT & robotics",
        description: "Web, IT, robotics & much more!",
    },
    pl: {
        lang: "pl",
        label: "Polski",
        title: "",
        titleTemplate: ":titleFRSPACE - Web, IT i robotyka",
        description: "Web, IT, robotyka i znacznie więcej!",
        themeConfig: {
            nav: [
                { text: "Strona główna", link: "/pl/" },
                { text: "Nasz zespół", link: "/pl/team" },
                { text: "Wspomóż nas ❤️", link: "/pl/sponsoring" },
                {
                    text: "Szukasz ekspertów?",
                    link: "https://www.frsource.org/",
                },
            ],
            lastUpdatedText: "Ostatnia aktualizacja",
            creationDateText: "Opublikowany",
            darkModeSwitchLabel: "Wygląd",
            sidebarMenuLabel: "Menu",
            returnToTopLabel: "Wróc do góry strony",
            outlineTitle: "W tym artykule",
            editLink: {
                pattern: generateEditLink,
                text: "Zaproponuj zmiany do tego artykułu",
            },
            footer: {
                copyright: "Wszelkie prawa zastrzeżone © FRSOURCE",
            },
            docFooter: {
                prev: "Poprzedni artykuł",
                next: "Następny artykuł",
            },
        },
    },
};

export default defineConfigWithTheme<
    DefaultTheme.Config & { locales: typeof locales; creationDateText: string }
>({
    base: "/blog/",
    cleanUrls: true,
    lastUpdated: true,
    markdown: {
        headers: {
            level: [0, 0],
        },
        lineNumbers: true,
    },
    locales,
    head: [
        ["meta", { name: "theme-color", content: "#f35e48" }],
        [
            "link",
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
                crossorigin: "",
            },
        ],
        [
            "link",
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: "",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap",
            },
        ],
    ],
    themeConfig: {
        locales,
        sidebar: {
            //   '/post/': sidebarPost()
        },
        logo: {
            light: "/navbar-icon.svg",
            dark: "/navbar-icon-dark.svg",
            alt: 'FRSPACE logo - "FRS" text in a circle and stylized FRSPACE text next to it',
        },
        socialLinks: [
            { icon: "facebook", link: "https://facebook.com/FRSOURCE" },
            { icon: "github", link: "https://github.com/FRSOURCE" },
            { icon: "twitter", link: "https://twitter.com/frsource1" },
            { icon: "instagram", link: "https://www.instagram.com/frsource/" },
            {
                icon: "linkedin",
                link: "https://www.linkedin.com/company/83486451/",
            },
            { icon: "youtube", link: "https://www.youtube.com/@frsource" },
        ],
        // en only

        outlineTitle: "In this article",
        nav: [
            { text: "Home", link: "/" },
            { text: "Our team", link: "/team" },
            { text: "Sponsor us ❤️", link: "/sponsoring" },
            {
                text: "Looking for Web wizards?",
                link: "https://www.frsource.org/",
            },
        ],
        lastUpdatedText: "Last updated",
        creationDateText: "Published",
        darkModeSwitchLabel: "Appearance",
        sidebarMenuLabel: "Menu",
        returnToTopLabel: "Return to top",
        editLink: {
            pattern: generateEditLink,
            text: "Propose changes to this article",
        },
        footer: {
            copyright: "Copyright © FRSOURCE",
        },
        docFooter: {
            prev: "Previous article",
            next: "Next article",
        },
    },
    async transformPageData(pageData) {
        if (pageData.frontmatter?.type === "article") {
            // it's an article
            pageData.lastUpdated = await getGitTimestamp(
                pageData.frontmatter.srcPath,
                { cwd: __dirname }
            );
            pageData.creationDate = await getGitCreationTimestamp(
                pageData.frontmatter.srcPath,
                { cwd: __dirname }
            );
        } else {
            pageData.articles = await getAllLangsArticlesData();
        }
    },
    async transformHead(context) {
        if (
            context?.pageData.frontmatter?.type === "article" &&
            context?.pageData.frontmatter.image
        ) {
            return [
                [
                    "meta",
                    { property: "og:title", content: context?.pageData.title },
                ],
                [
                    "meta",
                    {
                        property: "og:title",
                        content: context?.pageData.description,
                    },
                ],
                ["meta", { property: "og:type", content: "article" }],
                [
                    "meta",
                    {
                        property: "og:image",
                        content:
                            "https://www.frsource.org/blog" +
                            context?.pageData.frontmatter.image.src,
                    },
                ],
                [
                    "meta",
                    {
                        property: "og:image:alt",
                        content: context?.pageData.frontmatter.image.alt,
                    },
                ],
            ];
        }
    },
});

function sidebarPost() {
    return [
        {
            items: [{ text: "Our team", link: "/team" }],
        },
        {
            text: "Posts",
            collapsible: true,
            items: [
                // TODO: get articles for menu
                // articles,
                {
                    text: "What is VitePress?",
                    link: "/guide/what-is-vitepress",
                },
                { text: "Getting Started", link: "/guide/getting-started" },
                { text: "Configuration", link: "/guide/configuration" },
                { text: "Deploying", link: "/guide/deploying" },
            ],
        },
    ];
}

async function getAllLangsArticlesData() {
    const articles = {} as Record<
        keyof typeof locales,
        Awaited<ReturnType<typeof getArticlesData>>
    >;
    await Promise.all(
        (Object.keys(locales) as (keyof typeof locales)[]).map(
            async (localeLink) => {
                articles[localeLink] = await getArticlesData(
                    localeLink === "root" ? "" : localeLink
                );
            }
        )
    );
    return articles;
}

async function getArticlesData(lang?: string) {
    const articles = await fs.readdir(path.join(lang || "", "post"), {
        withFileTypes: true,
    });

    return (
        await Promise.all(
            articles
                .filter((fileOrDir) => fileOrDir.isDirectory())
                .map<Promise<ArticleData | void>>(async ({ name: article }) => {
                    const file = matter.read(
                        path.join(lang || "", "post", article, "/index.md")
                    );

                    return await parsePostMarkdown(file);
                })
        )
    ).filter((article): article is ArticleData => !!article);
}
