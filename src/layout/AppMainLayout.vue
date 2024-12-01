<template>
  <AppHeader></AppHeader>
  <main>
    <RouterView></RouterView>
  </main>
  <AppFooter></AppFooter>
</template>

<script setup lang="ts">
import AppFooter from '@/app/shared/AppFooter.vue';
import AppHeader from '@/app/shared/AppHeader.vue';
</script>
