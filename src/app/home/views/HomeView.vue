<template>
  <AppHeader></AppHeader>
  <main>
    <HomeIntro></HomeIntro>
    <HomeFilmRolls></HomeFilmRolls>
  </main>
</template>

<script setup lang="ts">
import '@fontsource/calistoga';
import '@fontsource-variable/lora';
import AppHeader from '@/app/shared/AppHeader.vue';
import HomeIntro from '../sections/HomeIntro.vue';
import HomeFilmRolls from '../sections/HomeFilmRolls.vue';
</script>
