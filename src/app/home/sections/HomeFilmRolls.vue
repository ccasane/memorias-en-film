<template>
  <section class="film-rolls">
    <div class="film-rolls__container">
      <h2>Tipos de carretes fotográficos</h2>
      <p>{{ filmRolls.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { filmRolls } from '../data/home-data.json';
</script>

<style lang="scss" scoped>
.film-rolls {
  background-color: $neutral-color;

  &__container {
    max-width: 990px;
    width: 100%;
    margin: auto;
    h2 {
      font-size: 1.1rem;
    }

    p {
      max-width: 860px;
      width: 100%;
      margin: 0.8rem 0;
    }
  }
}
</style>
