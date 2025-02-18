<template>
  <section class="intro">
    <div class="intro__container">
      <h1>{{ home.title }}</h1>
      <h2>¿Qué son los carretes fotográficos?</h2>
      <p>{{ home.description[0] }}</p>
      <p>{{ home.description[1] }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { home } from '@/app/home/data/home-data.json';
</script>

<style lang="scss" scoped>
.intro {
  padding: 5rem 1rem 0;
  background-color: $neutral-color;

  &__container {
    max-width: 920px;
    width: 100%;
    margin: auto;

    h1 {
      display: inline-block;
      font-size: 4rem;
      margin-bottom: 2.5rem;
    }

    h2 {
      font-size: 1.1rem;
      font-family: $font-text;
      font-weight: 700;
    }

    p {
      margin: 0.6rem 0;
    }
  }
}
</style>
