<script setup lang="ts">
/// <reference path="../../typings.d.ts" />
import { useData } from 'vitepress';
import { watch, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { members } from '../composables/members';

const props = defineProps({
    author: String,
    onlyAvatar: Boolean,
});

const { localeIndex } = useData();

const authorData = computed(() =>
    members.find(({ id }) => id === props.author),
);

watch(
    authorData,
    (authorData) => {
        if (!authorData)
            throw new Error(`Cannot find author with id: ${props.author}`);
    },
    { immediate: true },
);
</script>

<template>
    <VPLink
        v-if="authorData"
        :href="`/team#:~:text=${encodeURIComponent(authorData.name)}`"
        class="author"
        :title="
            localeIndex === 'root'
                ? `Read more about the author: ${authorData.name}`
                : `Dowiedz się więcej nt. autora artykułu: ${authorData.name}`
        "
    >
        <span class="avatar">
            <img
                class="avatar__img"
                :src="authorData.avatar"
                width="40"
                height="40"
                :alt="
                    localeIndex === 'root'
                        ? `Photo of article author: ${authorData.name}`
                        : `Na zdjęciu autor artykułu: ${authorData.name}`
                "
            />
        </span>
        <span class="author__name" v-if="!onlyAvatar">{{
            authorData.name
        }}</span>
    </VPLink>
</template>

<style scoped>
.author {
    display: inline-block;
    line-height: 24px;
    font-size: 10px;
}

.avatar {
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    background: #fff;
    transition: 0.2s background-color ease-in-out;
}

.avatar__img {
    display: inline-block;
    vertical-align: middle;
    mix-blend-mode: multiply;
}

.author__name {
    display: none;
    opacity: 0.7;
}

:where(.author:active, .author:focus, .author:hover) .avatar {
    background: var(--c-primary);
}

@media (min-width: 640px) {
    .author__name {
        display: inline;
        margin-left: 8px;
    }
}
</style>
