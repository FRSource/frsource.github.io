<script setup>
import { useData } from 'vitepress';
import Layout from 'vitepress/dist/client/theme-default/Layout.vue';
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
import VPHero from 'vitepress/dist/client/theme-default/components/VPHero.vue';
import VPDocFooterLastUpdated from 'vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue'
import CreationDate from '../../components/CreationDate.vue';
import AuthorInfo from '../../components/AuthorInfo.vue';

const { page } = useData();
const features = page.value.articles.map(({ title, description, path }) => ({
  title,
  details: description,
  link: path,
  linkText: 'Read the full article',
}));
</script>

<template>
  <Layout>
    <template #home-features-before v-if="page.frontmatter.showNewestArticles">
        <VPHero
            class="hero"
            tagline="Newest articles"
        />
        <!-- :actions="[{ theme: 'brand', text: 'see all articles', link: '/post' }]" -->
        <!-- TODO: when we have more articles - create a separated post.md page -->
        <VPFeatures :features="features" />
    </template>

    <template #doc-before>
        <div class="header-info">
            <div>
                <CreationDate />
                <VPDocFooterLastUpdated />
            </div>
        <AuthorInfo />
    </div>
    </template>
  </Layout>
</template>

<style scoped>
.hero {
    --vp-layout-top-height: 0px;
    --vp-nav-height: 0px;
    padding-top: 0;
    padding-bottom: 24px;
}

.hero :where(.tagline) {
    display: inline-block;
}

.hero :where(.actions) {
    margin-left: 16px;
    display: inline-flex;
}

.header-info {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
}
</style>
