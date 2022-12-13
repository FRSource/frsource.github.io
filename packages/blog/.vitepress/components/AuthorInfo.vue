<script setup lang="ts">
/// <reference path="../../typings.d.ts" />
import { useData } from 'vitepress'
import { watch, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { members } from '../composables/members';

const { page } = useData()
const author = computed(() => members.find(({ id }) => id === page.value.frontmatter.author));

watch(author, () => {
  if (!author) throw new Error(`Cannot find author with id: ${page.value.frontmatter.author}`)
}, { immediate: true })
</script>

<template>
  <p class="author" v-if="author">
    <VPLink href="/team">
        <img class="avatar" :src="author.avatar" :alt="`Photo of ${author.name}`" />
        {{ author.name }}
    </VPLink>
  </p>
</template>

<style scoped>
.author {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  transition: color 0.25s;
}

.author:hover {
  color: var(--vp-c-brand-dark);
}

.avatar {
    display: inline-block;
    margin-right: 8px;
    height: 32px;
    vertical-align: middle;
}

@media (min-width: 640px) {
  .author {
    line-height: 32px;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
