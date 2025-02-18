<template>
  <div class="about">
    <h1>{{ about.title }}</h1>
    <div class="about__container">
      <section v-for="(quest, index) in questions" :key="quest.title">
        <h2>{{ quest.title }}</h2>
        <p>{{ quest.description }}</p>
        <strong v-if="index === questions.length - 3">{{ about.phrase }}</strong>
      </section>
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

  h1 {
    max-width: 920px;
    width: 100%;
    margin: auto;
    font-size: 4rem;
    margin-bottom: 2.5rem;
  }

  &__container {
    max-width: 920px;
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 2em;

    section {
      background-color: rgba($accent-color, 0.4);
      padding: 1rem;
      border: 3px solid transparent;
      border-radius: 12px;
      transition: all 0.18s ease;

      &:hover {
        box-shadow: 5px 6px $primary-color;
        border: 3px solid $primary-color;
        background-color: $neutral-color;
      }

      h2 {
        font-size: 1.1rem;
        font-family: $font-text;
        font-weight: 700;
      }

      p {
        margin: 0.6rem 0 0;
      }

      strong {
        font-size: 0.875rem;
      }

      &:nth-child(4):hover {
        strong {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
