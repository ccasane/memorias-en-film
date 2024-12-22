<template>
  <article class="card">
    <img :src="image" :alt="alt" />
    <p>{{ title }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  alt: string;
}>();
</script>

<style lang="scss" scoped>
.card {
  max-width: 260px;
  margin: auto;
  border: 2px solid $neutral-color;
  background-color: rgba($accent-color, 0.5);
  opacity: 0.85;

  p {
    padding: 0.6rem 1rem;
    background-color: $primary-color;
    color: $neutral-color;
    text-align: center;
    font-weight: 600;
  }

  &:hover {
    background-color: $neutral-color;
    box-shadow: 5px 6px $primary-color;
    border: 2px solid $primary-color;
    opacity: 1;

    p {
      background-color: $accent-color;
      color: $primary-color;
    }
  }
}
</style>
