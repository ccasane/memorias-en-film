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

  .intro__container {
    max-width: 840px;
    width: 100%;
    margin: auto;

    h1 {
      display: inline-block;
      font-size: 3.8rem;
      margin-bottom: 2rem;
      text-decoration: underline;
      text-underline-offset: 5px;
      transition: word-spacing 0.29s ease;

      &:hover {
        word-spacing: 18px;
        animation: flashEffect 0.39s ease-in-out;
      }
    }

    h2 {
      font-size: 1.1rem;
    }

    p {
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
