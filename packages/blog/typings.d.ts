import "vitepress";

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
                description: string;
                path: string;
            }[]
        >;
        creationDate: number;
    }
}
