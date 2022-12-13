/// <reference path="../typings.d.ts" />

import { defineConfigWithTheme, DefaultTheme } from 'vitepress';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { getGitCreationTimestamp } from './scripts/getGitCreationTimestamp';

const getArticlesData = async () => {
  const articles = await fs.readdir('./post/', { withFileTypes: true });

  return Promise.all(
    articles
    .filter(fileOrDir => fileOrDir.isDirectory())
    .map(async ({ name: article }) => {
      const file = matter.read(`./post/${article}/index.md`);

      const { data, path } = file as typeof file & { path: string }

      if (!data.title || !data.description)
        console.error(`Every post must contain title and description in frontmatter, post "${path}" does not!`);

      return {
        title: data.title as string,
        description: data.description as string,
        path: path.replace(/\.md$/, '').substring(1),
      }
    })
  )
};

const locales = {
  en: {
    lang: 'en-US',
    label: 'English',
  },
  pl: {
    lang: 'pl-PL',
    label: 'Polski',
  },
};

export default defineConfigWithTheme<DefaultTheme.Config & { locales: typeof locales; creationDateText: string }>({
  base: '/blog/',
  title: 'Web, IT, robotics & much more!',
  titleTemplate: 'FRSPACE blog',
  description: 'Web, IT, robotics & much more!',
  lang: 'en-US',
  cleanUrls: 'with-subfolders',
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
    nav: nav(),
    sidebar: {
    //   '/post/': sidebarPost()
    },
    locales,
    lastUpdatedText: 'Last updated',
    creationDateText: 'Published',
    logo: {
        light: {
          src: 'https://www.frsource.org/logo.svg',
          alt: 'FRSOURCE logo - geometric, orange-blue-gradient-filled letter F and a small "FRS" subtext'
        },
        dark: {
          src: 'https://www.frsource.org/logo-dark.svg',
          alt: 'FRSOURCE logo - geometric, orange-blue-gradient-filled letter F and a small "FRS" subtext'
        },
    },
    editLink: {
      pattern: 'https://github.com/FRSOURCE/FRSource.github.io/edit/main/packages/blog/:path',
      text: 'Propose changes to this article'
    },
    socialLinks: [
      { icon: 'facebook', link: 'https://facebook.com/FRSOURCE' },
      { icon: 'github', link: 'https://github.com/FRSource' },
      { icon: 'twitter', link: 'https://twitter.com/frsource1' },
      { icon: 'instagram', link: 'https://www.instagram.com/frsource/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/83486451/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@frsource' },
    ],
    footer: {
      copyright: 'Copyright © FRSOURCE'
    },
    docFooter: {
      prev: 'Previous article',
      next: 'Next article'
    }
  },
  async transformPageData(pageData) {
    pageData.articles = await getArticlesData();
    pageData.creationDate = await getGitCreationTimestamp(pageData.relativePath);
  }
});

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Our team', link: '/team' },
    { text: 'Sponsor us ❤️', link: '/sponsoring' },
    { text: 'Looking for Web wizards?', link: 'https://www.frsource.org/' }
  ]
}

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
}
