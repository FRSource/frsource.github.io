<script lang="ts">
export type ArticleProps = {
    author: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
    image: DefaultTheme.ThemeableImage;
    creationDate: number;
};
</script>

<script setup lang="ts">
import type { DefaultTheme } from "vitepress/theme";
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue";
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";
import AuthorInfo from "../../components/AuthorInfo.vue";
import { computed, onMounted, ref, watchEffect } from "vue";

const props = defineProps<ArticleProps>();

const date = computed(() => new Date(props.creationDate));
const isoDatetime = computed(() => date.value.toISOString());
const datetime = ref("");

// set time on mounted hook because the locale string might be different
// based on end user and will lead to potential hydration mismatch if
// calculated at build time
onMounted(() => {
    watchEffect(() => {
        datetime.value = date.value.toLocaleDateString(
            window.navigator.language
        );
    });
});
</script>

<template>
    <article class="article" :class="{ 'article--with-img': image }">
        <VPLink
            class="article__link"
            :href="link"
            no-icon
            :title="`${linkText}: ${title}`"
        />
        <div class="article__inner">
            <div class="article__content">
                <div class="info-box">
                    <AuthorInfo
                        class="autor"
                        :author="author"
                        :only-avatar="!!image"
                    />
                    <time class="creation-date" :datetime="isoDatetime">{{
                        datetime
                    }}</time>
                </div>
                <h4 class="title font-secondary" v-text="title" />
                <p class="desc" v-text="description" />
                <p v-if="linkText" class="link-text c-secondary font-secondary">
                    {{ linkText }}&nbsp;&gt;
                </p>
            </div>
            <div class="img" v-if="image"><VPImage :image="image" /></div>
        </div>
    </article>
</template>

<style scoped>
.article {
    position: relative;
}

.article__inner {
    display: flex;
    flex-flow: column-reverse;
    height: 100%;
    background: var(--vp-c-black-soft);
    box-shadow: 0 0 0 2px transparent;
    transition: 0.2s box-shadow ease-in-out;
}

.article--with-img .article__content {
    padding-right: 32px;
    flex-basis: 50%;
}

.article__content {
    padding: 20px;
}

.author {
    position: relative;
    z-index: 1;
}

.info-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.creation-date {
    font-size: 10px;
    opacity: 0.6;
}

.img {
    position: relative;
    overflow: hidden;
    height: 200px;
}

.article :deep(.VPImage) {
    height: 100%;
    width: 100%;
    max-width: none;
    object-fit: cover;
}

.title {
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
}

.desc {
    margin-top: 16px;
    font-size: 14px;
    line-height: 18px;
    opacity: 0.6;
}

.link-text {
    margin-top: 22px;
    font-size: 14px;
    line-height: 15px;
    text-transform: uppercase;
}

.article__link {
    z-index: 1;
    position: absolute;
    inset: 0;
}

:where(.article__link:active, .article__link:hover, .article__link:focus)
    + .article__inner {
    box-shadow: 0 0 0 2px #1464eb;
}

@media (min-width: 542px) {
    .article--with-img {
        grid-column-end: span 2;
    }

    .article__inner {
        flex-flow: row;
    }

    .img {
        height: auto;
        flex-basis: 50%;
        margin-left: 10px;
        min-width: 0;
    }
}
</style>
