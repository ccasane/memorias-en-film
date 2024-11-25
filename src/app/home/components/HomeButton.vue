<template>
  <div class="button">
    <a href="">Ver más</a>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;

  a {
    padding: 0.3rem 1.5rem;
    font-weight: 600;
    color: $neutral-color;
    background-color: $primary-color;
    transition: background 0.29s ease;

    &:hover {
      background-color: $secondary-color;
    }
  }
}
</style>
