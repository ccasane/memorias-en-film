<template>
  <a href="" class="card">
    <img :src="image" :alt="alt" />
    <p>{{ title }}</p>
  </a>
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
  max-width: 290px;
  margin: auto;
  border: 3px solid $neutral-color;
  border-radius: 12px;
  background-color: rgba($accent-color, 0.4);
  transition: all 0.18s ease;

  p {
    padding: 0.6rem 1rem;
    border-radius: 0 0 12px 12px;
    color: $neutral-color;
    background-color: $primary-color;
    text-align: center;
    transition: all 0.18s ease;
  }

  &:hover {
    border: 3px solid $primary-color;
    background-color: $neutral-color;
    box-shadow: 5px 6px $primary-color;

    p {
      font-weight: 700;
      color: $primary-color;
      background-color: $accent-color;
    }
  }
}
</style>
