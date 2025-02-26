<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <RouterLink to="/">MEF.</RouterLink>
      </div>

      <div class="header__hamburger">
        <button id="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="header__menu">
          <div class="menu">
            <RouterLink to="/">Incio</RouterLink>
            <RouterLink to="film-rolls">Carretes</RouterLink>
            <RouterLink to="about">Acerca de</RouterLink>
          </div>
        </div>
      </div>

      <nav class="header__nav">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="film-rolls">Carretes</RouterLink>
        <RouterLink to="about">Acerca de</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

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
    position: relative;
    display: none;

    #menu-toggle {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 40px;
      height: 30px;
      cursor: pointer;
      border: none;
      background-color: transparent;

      span {
        display: block;
        width: 100%;
        height: 6px;
        background-color: $primary-color;
      }

      @media (max-width: 768px) {
        &:focus ~ .header__menu {
          width: 250px;
          z-index: 99;
        }
      }
    }

    @media (max-width: 768px) {
      display: initial;
    }
  }

  &__menu {
    position: fixed;
    max-width: 300px;
    top: 0;
    right: -2px;
    bottom: 0;
    height: 100%;
    width: 0;
    overflow: hidden;
    z-index: 1;
    border-left: 4px solid;
    background: $accent-color;
    transition: all 0.29s ease-in-out;

    .menu {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.8rem;

      a {
        font-size: 1.3rem;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 767px) {
      width: 0;

      &:target {
        width: 250px;
        z-index: 99;
      }
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
      display: none;
    }
  }
}
</style>
