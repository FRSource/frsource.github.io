<script setup lang="ts">
/// <reference path="../../typings.d.ts" />
import { useData } from 'vitepress';
import { ref, computed, watchEffect, onMounted } from 'vue';

const { theme, page } = useData();
const date = computed(() => new Date(page.value.creationDate!));
const isoDatetime = computed(() => date.value.toISOString());
const datetime = ref('');

// set time on mounted hook because the locale string might be different
// based on end user and will lead to potential hydration mismatch if
// calculated at build time
onMounted(() => {
    watchEffect(() => {
        datetime.value = date.value.toLocaleString(window.navigator.language);
    });
});
</script>

<template>
    <p class="creation-date">
        {{ theme.creationDateText ?? 'Created on' }}:
        <time :datetime="isoDatetime">{{ datetime }}</time>
    </p>
</template>

<style scoped>
.creation-date {
    line-height: 24px;
    font-size: 10px;
    color: var(--vp-c-text-2);
    opacity: 0.7;
}
</style>
