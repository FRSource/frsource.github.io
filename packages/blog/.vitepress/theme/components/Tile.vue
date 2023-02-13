<script setup lang="ts">
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue";

defineProps({
    title: String,
    description: String,
    tag: {
        type: String,
        default: "div",
    },
    link: String,
    linkText: String,
});
</script>

<template>
    <component :is="tag" class="tile">
        <VPLink
            v-if="link"
            class="tile__link"
            :href="link"
            no-icon
            :title="`${linkText}: ${title}`"
        />
        <div class="tile__inner">
            <slot />
        </div>
    </component>
</template>

<style scoped>
.tile {
    position: relative;
}

.tile__inner {
    display: flex;
    flex-flow: column-reverse;
    height: 100%;
    background: var(--vp-c-black-soft);
    box-shadow: 0 0 0 2px transparent;
    transition: 0.2s box-shadow ease-in-out;
    transition-property: box-shadow, background;
}

.tile__content {
    padding: 20px;
}

.title {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
}

.desc {
    margin-top: 16px;
    font-size: 14px;
    line-height: 18px;
    opacity: 0.6;
}

.tile__link {
    z-index: 1;
    position: absolute;
    inset: 0;
}

:where(.tile__link:active, .tile__link:hover, .tile__link:focus)
    + .tile__inner {
    background: none;
    box-shadow: 0 0 0 2px #1464eb;
}

@media (min-width: 542px) {
    .tile__inner {
        flex-flow: row;
    }
}
</style>
