<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <a href="/">MEF.</a>
      </div>
      <nav class="header__nav">
        <a href="/">Inicio</a>
        <a href="/">Carretes</a>
        <a href="/">Acerca de</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  padding: 1rem;
  background-color: $primary-color;
  border-bottom: 4px solid $secondary-color;

  &__container {
    max-width: 990px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    padding: 0 0.6rem;
    background-color: $neutral-color;
    transition: background-color 0.29s ease;

    a {
      font-size: 1.5rem;
      font-family: $font-title;
    }

    &:hover {
      background-color: $accent-color;
      text-decoration: underline;
      text-underline-offset: 2.5px;
      text-decoration-thickness: 1.5px;
    }
  }

  &__nav {
    display: inline-flex;
    align-items: center;
    gap: 2rem;

    a {
      color: $neutral-color;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 2.5px;
        text-decoration-thickness: 1.5px;
      }
    }
  }
}
</style>
