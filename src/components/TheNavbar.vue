<template>
  <nav class="bg-retro-purple border-b-4 border-black p-4">
    <div class="container mx-auto flex items-center justify-between">
      <RouterLink to="/" class="text-2xl font-bold text-retro-light hover:text-white transition-colors duration-200">
        EBOOK ARCADE
      </RouterLink>

      <RouterLink to="/carrinho" class="bg-retro-pink text-retro-dark py-2 px-4 border-2 border-black shadow-pixel hover:shadow-pixel-hover transition-all duration-200">
        Carrinho [{{ cartStore.itemCount }}]
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from '../store/cartStore';

const cartStore = useCartStore();
</script>