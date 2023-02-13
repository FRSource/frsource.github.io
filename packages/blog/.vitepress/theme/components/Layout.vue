<script lang="ts" setup>
import { computed } from "vue";
import { useData, Locales } from "vitepress";
import Layout from "vitepress/dist/client/theme-default/Layout.vue";
import Articles from "./Articles.vue";
import VPDocFooterLastUpdated from "vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue";
import AuthorInfo from "../../components/AuthorInfo.vue";
// import CreationDate from "../../components/CreationDate.vue";

const { localeIndex, page, frontmatter, isDark } = useData();
const formattedArticles = computed(() =>
    page.value.articles[localeIndex.value as keyof Locales]?.map(
        ({ title, author, description, path, image, creationDate }) => ({
            title,
            author,
            description,
            image,
            creationDate,
            link: path,
            linkText:
                localeIndex.value === "root"
                    ? "Read the full article"
                    : "Przeczytaj cały artykuł",
        })
    )
);

const headerArray = computed(
    () => frontmatter.value.frs_hero.text.split(" ") as string[]
);
</script>

<template>
    <Layout>
        <template
            #home-features-before
            v-if="page.frontmatter.showNewestArticles"
        >
            <div class="layout-container">
                <div class="hero">
                    <hgroup
                        class="hero__text-wrapper"
                        v-if="frontmatter.frs_hero"
                    >
                        <h1 class="hero__text">
                            {{ frontmatter.frs_hero.name }}
                        </h1>
                        <h2 class="hero__text">
                            <span class="c-secondary">{{
                                headerArray[0] + " "
                            }}</span>
                            <span class="c-tertiary">{{
                                headerArray[1] + " "
                            }}</span>
                            <span class="c-primary"
                                >{{ headerArray[2] }} {{ headerArray[3] }}</span
                            >
                        </h2>
                    </hgroup>

                    <img
                        class="hero_image"
                        :src="
                            isDark
                                ? 'https://www.frsource.org/logo-dark.svg'
                                : 'https://www.frsource.org/logo.svg'
                        "
                        :alt="frontmatter.frs_hero.image.alt"
                    />
                </div>
            </div>
            <!-- :actions="[{ theme: 'brand', text: 'see all articles', link: '/post' }]" -->
            <!-- TODO: when we have more articles - create a separated post.md page -->
            <Articles :articles="formattedArticles">
                <template #prefix>
                    <h3
                        class="section-title font-secondary"
                        v-text="
                            localeIndex === 'root'
                                ? 'Newest articles'
                                : 'Najnowsze artykuły'
                        "
                    />
                </template>
            </Articles>
        </template>

        <template #doc-before>
            <div class="header-info">
                <AuthorInfo :author="page.frontmatter.author" />
                <!-- <CreationDate /> -->
                <VPDocFooterLastUpdated />
            </div>
        </template>
    </Layout>
</template>

<style scoped>
.hero {
    display: flex;
    flex-flow: column-reverse;
    padding-bottom: 48px;
    align-items: center;
    gap: 15%;
    text-align: center;
}

.hero__text-wrapper {
    flex-shrink: 0;
}

.hero__text {
    max-width: 392px;
    line-height: 32px;
    font-size: 32px;
    font-family: var(--font-family-secondary);
    letter-spacing: 2.7px;
    white-space: pre-wrap;
}

.hero_image {
    min-width: 0;
    height: 160px;
}

.section-title {
    padding: 0 0 20px 20px;
    text-transform: uppercase;
}

.header-info {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (min-width: 640px) {
    .hero__text {
        max-width: 576px;
        line-height: 48px;
        font-size: 48px;
    }

    .hero_image {
        height: 200px;
    }
}

@media (min-width: 960px) {
    .hero {
        gap: 0;
        flex-flow: row;
        text-align: left;
    }

    .hero__text {
        line-height: 54px;
        font-size: 56px;
    }

    .hero_image {
        margin: -5% auto;
        height: auto;
        width: 30%;
    }
}
</style>
