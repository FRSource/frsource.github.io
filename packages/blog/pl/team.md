---
layout: page
title: Nasz zespół
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import { members as membersBase } from '../.vitepress/composables/members';

const members = membersBase.map(member => ({
  ...member,
  ...(member.pl || {}),
}));
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Nasz zespół
    </template>
    <template #lead>
      Blog FRSPACE blog jest tworzony przez ludzi, którym zależy na przekazywaniu najlepszych jakościowo treści i praktyk!
      Poznaj nas nieco lepiej poniżej 👋
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
