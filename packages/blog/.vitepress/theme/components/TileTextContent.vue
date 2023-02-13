<script lang="ts" setup>
defineProps({
    titleTag: {
        type: String,
        default: "h2",
    },
    title: String,
    description: String,
    linkText: String,
});
</script>

<template>
    <component :is="titleTag" class="title font-secondary" v-text="title" />
    <p class="desc" v-text="description" />
    <p v-if="linkText" class="link-text c-secondary font-secondary">
        {{ linkText }}&nbsp;&gt;
    </p>
</template>

<style scoped>
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

.link-text {
    margin-top: 22px;
    font-size: 14px;
    line-height: 15px;
    text-transform: uppercase;
}
</style>
