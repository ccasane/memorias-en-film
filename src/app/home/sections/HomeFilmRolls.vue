<template>
  <section class="film-rolls">
    <div class="film-rolls__container">
      <h2>Tipos de carretes fotográficos</h2>
      <p>{{ description }}</p>
      <div class="film-rolls__card">
        <HomeCard
          v-for="roll in categories"
          :key="roll.title"
          :image="roll.image"
          :title="roll.title"
          :alt="roll.alt"
        >
        </HomeCard>
      </div>
      <HomeButton></HomeButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { filmRolls } from '@/app/home/data/home-data.json';
import HomeCard from '../components/HomeCard.vue';
import HomeButton from '../components/HomeButton.vue';

const { description, categories } = filmRolls;
</script>

<style lang="scss" scoped>
.film-rolls {
  padding: 0 1rem 5rem;
  background-color: $neutral-color;

  &__container {
    max-width: 840px;
    width: 100%;
    margin: auto;

    h2 {
      font-size: 1.2rem;
    }

    p {
      width: 100%;
      margin: 0.8rem 0;
    }
  }

  &__card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    justify-content: space-between;
    gap: 2rem;
  }
}
</style>
