import 'vitepress';

declare module 'vitepress' {
  interface PageData {
    articles: {
        title: string;
        description: string;
        path: string;
    }[];
    creationDate: number;
  }
}
