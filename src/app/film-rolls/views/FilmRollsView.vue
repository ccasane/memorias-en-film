<template>
  <section class="film-rolls">
    <div class="film-rolls__container">
      <h1>{{ filmRolls.title }}</h1>
      <p>{{ filmRolls.description[0] }}</p>
      <p>{{ filmRolls.description[1] }}</p>
      <div class="film-rolls__card">
        <HomeCard
          v-for="roll in categories"
          :key="roll.title"
          :image="roll.image"
          :title="roll.title"
          :alt="roll.alt"
        ></HomeCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { filmRolls } from '@/app/film-rolls/data/rolls-data.json';
import HomeCard from '@/app/shared/AppCard.vue';

const { categories } = filmRolls;
</script>

<style lang="scss" scoped>
.film-rolls {
  padding: 5rem 1rem;

  &__container {
    max-width: 920px;
    width: 100%;
    margin: auto;

    h1 {
      font-size: 4rem;
      margin-bottom: 2.5rem;
      text-underline-offset: 12px;
    }

    p {
      margin: 0.6rem 0;
    }
  }

  &__card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    justify-content: space-between;
    gap: 2rem;
    margin-top: 1.5rem;
  }
}
</style>
