<template>
  <div class="button">
    <RouterLink to="film-rolls">Ver más</RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  a {
    padding: 0.2rem 1.5rem;
    font-weight: 600;
    color: $neutral-color;
    border: 2px solid transparent;
    background-color: $primary-color;

    &:hover {
      color: $primary-color;
      background-color: $neutral-color;
      border: 2px solid $primary-color;
      box-shadow: 3px 4px $primary-color;
    }
  }
}
</style>
