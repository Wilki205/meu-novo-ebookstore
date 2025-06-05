<template>
  <div class="home-view">
    <h1 class="mb-12 text-center text-5xl text-retro-light">
      Nossos Ebooks
    </h1>
    
    <div class="ebook-list">
      <EbookCard
        v-for="book in allEbooks"
        :key="book.id"
        :ebook="book"
      />
    </div>
  </div>
</template>

<script setup>

import EbookCard from '../components/EbookCard.vue';

import { ebooks as allEbooks } from '../data/ebooks.js';
</script>

<style scoped>

.home-view {
  padding: 2rem;
}

.ebook-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem; 
  justify-content: center;
}

h1 {
  text-shadow: 3px 3px 0px #000;
}
</style>