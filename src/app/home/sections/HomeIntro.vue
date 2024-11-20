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
import { home } from '../data/home-data.json';
</script>

<style lang="scss" scoped>
.intro {
  padding: 5rem 1rem 0;
  background-color: $neutral-color;

  .intro__container {
    max-width: 990px;
    width: 100%;
    margin: auto;

    h1 {
      display: inline-block;
      font-size: 3rem;
      margin-bottom: 1.3rem;
      cursor: pointer;
      box-shadow: 0 2px $primary-color;
      transition:
        box-shadow 0.29s ease,
        word-spacing 0.29s ease;

      &:hover {
        word-spacing: 18px;
        box-shadow: 0 4px $primary-color;
        animation: flashEffect 0.39s ease-in-out;
      }
    }

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

@keyframes flashEffect {
  0% {
    color: $primary-color;
    opacity: 1;
  }
  50% {
    color: #fff;
    opacity: 0.5;
  }
  100% {
    color: $primary-color;
    opacity: 1;
  }
}
</style>
