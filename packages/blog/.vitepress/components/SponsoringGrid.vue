<script setup lang="ts">
import { computed, defineProps } from "vue";
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from "vitepress/theme";
import simpleIcons from "simple-icons";
import { toInlineImgSvgString } from "../utils/url.utils";

const props = defineProps({
    patreonDesc: {
        type: String,
        requred: true,
    },
    githubDesc: {
        type: String,
        requred: true,
    },
    buyMeACoffeeDesc: {
        type: String,
        requred: true,
    },
});

const { siPatreon, siBuymeacoffee, siGithubsponsors } = simpleIcons;

const members = computed(() => [
    {
        avatar: toInlineImgSvgString(
            siPatreon.svg.replace("<svg ", '<svg style="fill:#FF424D" ')
        ),
        name: "Patreon",
        desc: props.patreonDesc,
        sponsor: "https://www.patreon.com/frsource",
    },
    {
        avatar: toInlineImgSvgString(
            siGithubsponsors.svg.replace("<svg ", '<svg style="fill:#EA4AAA" ')
        ),
        name: "Github Sponsors",
        desc: props.githubDesc,
        sponsor: "https://github.com/sponsors/FRSOURCE/",
    },
    {
        avatar: toInlineImgSvgString(
            siBuymeacoffee.svg.replace("<svg ", '<svg style="fill:#FFDD00" ')
        ),
        name: "Buy me a coffee",
        desc: props.buyMeACoffeeDesc,
        sponsor: "https://www.buymeacoffee.com/FRSOURCE",
    },
]);
</script>

<template>
    <VPTeamPage class="sponsoring-page">
        <VPTeamPageTitle>
            <template #title><slot name="title" /></template>
            <template #lead><slot name="desc" /></template>
        </VPTeamPageTitle>
        <VPTeamMembers :members="members" />
    </VPTeamPage>
</template>

<style>
.sponsoring-page .avatar-img {
    padding: 25%;
    border-radius: 0;
}
</style>
