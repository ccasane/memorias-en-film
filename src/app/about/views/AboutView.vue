<template>
  <div class="about">
    <div class="about__container">
      <h1>{{ about.title }}</h1>
      <div v-for="(quest, index) in questions" :key="quest.title">
        <h2>{{ quest.title }}</h2>
        <p>{{ quest.description }}</p>
        <strong v-if="index === questions.length - 1">{{ about.phrase }}</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { about } from '@/app/about/data/about-data.json';
const { questions } = about;
</script>

<style lang="scss" scope>
.about {
  padding: 5rem 1rem;

  &__container {
    max-width: 840px;
    width: 100%;
    margin: auto;

    h1 {
      font-size: 3.8rem;
      margin-bottom: 2.5rem;
      text-decoration: underline;
      text-underline-offset: 5px;
    }

    div {
      background-color: rgba($accent-color, 0.6);
      padding: 1rem;
      margin-bottom: 1.3rem;
      border: 2px solid transparent;

      &:hover {
        box-shadow: 5px 6px $primary-color;
        border: 2px solid $primary-color;
        background-color: $neutral-color;
      }
    }

    h2 {
      font-size: 1.1rem;
    }

    p {
      margin: 0.8rem 0 0;
    }
  }
}
</style>
