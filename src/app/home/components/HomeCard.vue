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
  border: 2px solid $neutral-color;
  background-color: rgba($accent-color, 0.6);

  &__description {
    padding: 0.6rem 1rem;
    background-color: $primary-color;
    color: $neutral-color;

    p {
      text-align: center;
      font-weight: 600;
    }
  }

  &:hover {
    background-color: $neutral-color;
    box-shadow: 5px 6px $primary-color;
    border: 2px solid $primary-color;

    .card__description {
      background-color: $accent-color;
      color: $primary-color;
    }
  }
}
</style>
