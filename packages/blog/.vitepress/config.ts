import { promises as fs } from 'fs';
import matter from 'gray-matter';

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
        title: data.title,
        description: data.description,
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

export default {
  base: '/blog/',
  title: 'Web, IT, robotics & much more!',
  titleTemplate: 'FRSOURCE blog',
  description: 'Web, IT, robotics & much more!',
  lang: 'en-US',
  cleanUrls: 'with-subfolders',
  locales,
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inconsolata&display=swap' }]
  ],
  themeConfig: {
    locales,
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
  }
}
