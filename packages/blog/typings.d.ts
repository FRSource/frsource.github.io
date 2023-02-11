import { DefaultTheme } from "vitepress";

declare module "vitepress" {
    type Locales = {
        root: {
            lang: "en-US";
            label: string;
        };
        pl: {
            lang: "pl-PL";
            label: string;
        };
    };
    interface PageData {
        locales: Locales;
        articles: Record<
            keyof Locales,
            {
                title: string;
                author: string;
                description: string;
                image?: DefaultTheme.ThemeableImage;
                srcPath: string;
                path: string;
                lastUpdated: number;
                creationDate: number;
            }[]
        >;
        creationDate: number;
    }
}
