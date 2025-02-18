<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <RouterLink to="/">MEF.</RouterLink>
      </div>

      <div class="header__hamburger" @click="toggleMenu">
        <span class="header__hamburger-bar"></span>
        <span class="header__hamburger-bar"></span>
        <span class="header__hamburger-bar"></span>
      </div>

      <nav ref="menu" :class="['header__nav', { 'header__nav--active': menuOpen }]">
        <RouterLink to="/" @click="closeMenu">Inicio</RouterLink>
        <RouterLink to="film-rolls" @click="closeMenu">Carretes</RouterLink>
        <RouterLink to="about" @click="closeMenu">Acerca de</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  const menu = document.querySelector('.header__nav');
  const hamburger = document.querySelector('.header__hamburger');

  if (!menu?.contains(event.target as Node) && !hamburger?.contains(event.target as Node)) {
    menuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 0.8rem 1rem;
  background-color: $accent-color;
  border-bottom: 4px solid $primary-color;

  &__container {
    max-width: 920px;
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

  &__hamburger {
    width: 30px;
    height: 22px;
    display: none;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    justify-content: space-between;

    .header__hamburger-bar {
      width: 100%;
      height: 4px;
      background-color: $primary-color;
    }

    @media (max-width: 768px) {
      display: flex;
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

    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      width: 300px;
      height: 100%;
      right: -2px;
      background-color: $accent-color;
      display: flex;
      flex-direction: column;
      align-items: start;
      border-left: 3px solid $primary-color;
      gap: 1.5rem;
      padding: 1.5rem;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      z-index: 999;

      &--active {
        transform: translateX(0);
      }

      a {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
