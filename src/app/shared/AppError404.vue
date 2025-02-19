<template>
  <div class="error">
    <h1>¿Te perdiste?</h1>
    <p>Este es el final, ya no tienes nada más que temer.</p>
    <RouterLink to="/">Regresar</RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.error {
  min-height: 100dvh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  h1 {
    font-size: 3rem;
  }

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
