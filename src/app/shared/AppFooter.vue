<template>
  <footer class="footer">
    <div class="footer__container">
      <p>
        © {{ dateFooter }} Memorias en Film. Realizado por
        <a href="https://github.com/ccasane">Joel Ccasane</a>.
      </p>
      <div class="footer__links">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="film-rolls">Carretes</RouterLink>
        <RouterLink to="about">Acerca de</RouterLink>
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
  padding: 2rem 1rem;
  background-color: $primary-color;

  &__container {
    max-width: 840px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    p,
    a {
      color: $neutral-color;
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
    margin-top: 0.6rem;
  }
}

@media (max-width: 767px) {
  .footer {
    &__container,
    &__links {
      align-items: start;
    }
  }
}

@media (max-width: 425px) {
  .footer {
    &__links {
      flex-direction: column;
      gap: 0.8rem;
    }
  }
}
</style>
