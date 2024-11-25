<template>
  <article class="card">
    <div class="card__image">
      <img :src="image" :alt="alt" />
    </div>
    <div class="card__description">
      <p>{{ title }}</p>
    </div>
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
  border: 2px solid $primary-color;
  background-color: $accent-color;
  transition:
    background-color 0.29s ease,
    box-shadow 0.29s ease;

  &__description {
    padding: 0.6rem 1rem;
    background-color: $neutral-color;
    transition:
      background-color 0.29s ease,
      color 0.29s ease;

    p {
      text-align: center;
      font-weight: 600;
      transition: transform 0.29s ease;
    }
  }

  &:hover {
    background-color: $neutral-color;
    box-shadow: 0px 0px 10px rgba($primary-color, 0.8);
    border: 3px solid $primary-color;

    .card__description {
      background-color: $primary-color;
      color: $neutral-color;
    }
  }
}
</style>
