<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './app/shared/AppHeader.vue';
import AppFooter from './app/shared/AppFooter.vue';
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <RouterView />
  </main>
  <AppFooter></AppFooter>
</template>

<style scoped></style>
