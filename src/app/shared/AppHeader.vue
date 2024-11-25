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
  padding: 0.8rem 1rem;
  background-color: $accent-color;
  border-bottom: 4px solid $primary-color;

  &__container {
    max-width: 840px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    padding: 0 0.6rem;
    background-color: $primary-color;
    transition: background-color 0.29s ease;

    a {
      font-size: 1.8rem;
      color: $neutral-color;
      font-family: $font-title;
    }

    &:hover {
      color: $neutral-color;
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
      font-weight: 600;
      font-size: 1.1rem;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 2.5px;
        text-decoration-thickness: 1.5px;
      }
    }
  }
}
</style>
