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
  margin-top: 2.2rem;

  a {
    padding: 0.3rem 1.5rem;
    font-weight: 600;
    border-radius: 8px;
    border: 3px solid transparent;
    color: $neutral-color;
    background-color: $primary-color;
    transition: all 0.18s ease;

    &:hover {
      border: 3px solid $primary-color;
      color: $primary-color;
      background-color: $neutral-color;
      box-shadow: 2px 3px $primary-color;
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-thickness: 1.5px;
    }
  }
}
</style>
