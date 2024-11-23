<template>
  <footer class="footer">
    <div class="footer__container">
      <p>
        © {{ dateFooter }} Memorias en Film. Realizado por
        <a href="/">Joel Ccasane</a>
      </p>
      <div class="footer__links">
        <a href="">Inicio</a>
        <a href="">Carretes</a>
        <a href="">Acerca de</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const dateFooter = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
.footer {
  padding: 1.8rem 1rem;
  background-color: $accent-color;

  &__container {
    max-width: 990px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 0.875rem;
    }

    a:hover {
      text-decoration: underline;
      text-underline-offset: 2.5px;
      text-decoration-thickness: 1.5px;
    }
  }

  &__links {
    display: inline-flex;
    align-items: center;
    gap: 1.5rem;
    font-weight: 600;
    font-size: 0.875rem;
  }
}
</style>
