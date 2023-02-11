<script setup lang="ts">
import { PropType } from "vue";
import Article, { ArticleProps } from "./Article.vue";

defineProps({
    articles: Array as PropType<ArticleProps[]>,
});
</script>

<template>
    <section class="layout-container">
        <slot name="prefix" />
        <div class="articles">
            <Article
                v-for="(article, i) in articles"
                :key="article.title"
                v-bind="article"
                :image="i % 4 === 0 ? article.image : undefined"
            />
        </div>
    </section>
</template>

<style scoped>
.articles {
    display: grid;
    grid-column-gap: 14px;
    grid-row-gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
</style>
