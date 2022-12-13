---
layout: page
title: Sponsoring
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme';
import { siPatreon, siBuymeacoffee, siGithubsponsors } from 'simple-icons';
import { toInlineImgSvgString } from './.vitepress/utils/url.utils.ts'

const members = [
  {
    avatar: toInlineImgSvgString(siPatreon.svg.replace('<svg ', '<svg style="fill:#FF424D" ')),
    name: 'Patreon',
    title: 'Supporting us with a monthly subscription help us stabilize working schedule',
    sponsor: 'https://www.patreon.com/frsource'
  },
  {
    avatar: toInlineImgSvgString(siGithubsponsors.svg.replace('<svg ', '<svg style="fill:#EA4AAA" ')),
    name: 'Github Sponsors',
    title: 'See what you can gain by supporting us via Github Sponsors',
    sponsor: 'https://github.com/sponsors/FRSOURCE/'
  },
  {
    avatar: toInlineImgSvgString(siBuymeacoffee.svg.replace('<svg ', '<svg style="fill:#FFDD00" ')),
    name: 'But me a coffee',
    title: 'Help us by buying a coffee and/or a beer 🍻',
    sponsor: 'https://www.buymeacoffee.com/FRSOURCE'
  }
]
</script>

<VPTeamPage class="sponsoring-page">
  <VPTeamPageTitle>
    <template #title>
      Sponsor us
    </template>
    <template #lead>
This sponsorship is meant to be an additional booster to help us keep working on OS libraries and to balance expenses spent on open-source work.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>

<style>
.sponsoring-page .avatar-img { padding: 25%; border-radius: 0; }
</style>
