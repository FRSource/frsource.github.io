/// <reference path="../typings.d.ts" />

import { defineConfigWithTheme, DefaultTheme, LocaleConfig, createMarkdownRenderer } from 'vitepress';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getGitCreationTimestamp } from './scripts/getGitCreationTimestamp';

const locales: LocaleConfig = {
  root: {
    lang: 'en',
    label: 'English',
    title: 'FRSPACE',
    description: 'Web, IT, robotics & much more!',
  },
  pl: {
    lang: 'pl',
    label: 'Polski',
    title: 'FRSPACE',
    description: 'Web, IT, robotyka i znacznie więcej!',
    themeConfig: {
      nav: [
        { text: 'Strona główna', link: '/pl/' },
        { text: 'Nasz zespół', link: '/pl/team' },
        { text: 'Wspomóż nas ❤️', link: '/pl/sponsoring' },
        { text: 'Szukasz ekspertów?', link: 'https://www.frsource.org/' }
      ],
      lastUpdatedText: 'Ostatni aktualizacja',
      creationDateText: 'Opublikowany',
      darkModeSwitchLabel: 'Wygląd',
      sidebarMenuLabel: 'Menu',
      returnToTopLabel: 'Wróc do góry strony',
      outlineTitle: 'W tym artykule',
      editLink: {
        pattern: 'https://github.com/FRSOURCE/FRSource.github.io/edit/main/packages/blog/:path',
        text: 'Zaproponuj zmiany do tego artykułu'
      },
      footer: {
        copyright: 'Wszelkie prawa zastrzeżone © FRSOURCE'
      },
      docFooter: {
        prev: 'Poprzedni artykuł',
        next: 'Następny artykuł'
      }
    },
  },
};

export default defineConfigWithTheme<DefaultTheme.Config & { locales: typeof locales; creationDateText: string }>({
  base: '/blog/',
  titleTemplate: 'FRSPACE blog',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    headers: {
      level: [0, 0]
    }
  },
  locales,
  head: [
    ['meta', { name: 'theme-color', content: '#f35e48' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inconsolata&display=swap' }]
  ],
  themeConfig: {
    locales,
    sidebar: {
    //   '/post/': sidebarPost()
    },
    logo: {
        light: 'https://www.frsource.org/logo.svg',
        dark: 'https://www.frsource.org/logo-dark.svg',
        alt: 'FRSOURCE logo - geometric, orange-blue-gradient-filled letter F and a small "FRS" subtext'
    },
    socialLinks: [
      { icon: 'facebook', link: 'https://facebook.com/FRSOURCE' },
      { icon: 'github', link: 'https://github.com/FRSource' },
      { icon: 'twitter', link: 'https://twitter.com/frsource1' },
      { icon: 'instagram', link: 'https://www.instagram.com/frsource/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/83486451/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@frsource' },
    ],
    // en only

    outlineTitle: 'In this article',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Our team', link: '/team' },
      { text: 'Sponsor us ❤️', link: '/sponsoring' },
      { text: 'Looking for Web wizards?', link: 'https://www.frsource.org/' }
    ],
    lastUpdatedText: 'Last updated',
    creationDateText: 'Published',
    darkModeSwitchLabel: 'Appearance',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    editLink: {
      pattern: 'https://github.com/FRSOURCE/FRSource.github.io/edit/main/packages/blog/:path',
      text: 'Propose changes to this article'
    },
    footer: {
      copyright: 'Copyright © FRSOURCE'
    },
    docFooter: {
      prev: 'Previous article',
      next: 'Next article'
    }
  },
  async transformPageData(pageData) {
    pageData.articles = await getAllLangsArticlesData();
    pageData.creationDate = await getGitCreationTimestamp(pageData.relativePath);
  }
});

function sidebarPost() {
  return [
    {
      items: [{ text: 'Our team', link: '/team' }],
    },
    {
      text: 'Posts',
      collapsible: true,
      items: [
        // TODO: get articles for menu
        // articles,
        { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
  ]
};

async function getAllLangsArticlesData () {
  const articles = {} as Record<keyof typeof locales, Awaited<ReturnType<typeof getArticlesData>>>;
  await Promise.all((Object.keys(locales) as (keyof typeof locales)[])
    .map(async localeLink => {
      articles[localeLink] = await getArticlesData(localeLink === 'root' ? '' : localeLink);
    }));
  return articles;
}

async function getArticlesData (lang?: string) {
  const articles = await fs.readdir(path.join('.', lang || '', 'post'), { withFileTypes: true });

  return Promise.all(
    articles
    .filter(fileOrDir => fileOrDir.isDirectory())
    .map(async ({ name: article }) => {
      const file = matter.read(`./post/${article}/index.md`);

      const { data, path } = file as typeof file & { path: string };
      const title: string = data.title || file.content.match(/# (.+)/)[1];

      if (!title || !data.description)
        console.error(`Every post must contain title and description in frontmatter (title might be written as a main article markdown heading), post "${path}" does not!`);

      return {
        title,
        description: data.description as string,
        path: path.replace(/\.md$/, '').substring(1),
      }
    })
  )
};
