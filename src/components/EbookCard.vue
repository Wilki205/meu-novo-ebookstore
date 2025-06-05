<template>
  <div class="group flex w-full max-w-xs flex-col overflow-hidden border-4 border-black bg-retro-dark shadow-pixel transition-all duration-200 hover:shadow-pixel-hover">
    <div class="border-b-4 border-black bg-black">
      <img class="w-full object-contain transition-all duration-300 group-hover:filter group-hover:saturate-150 group-hover:contrast-125" :src="ebook.coverImage" :alt="ebook.title" />
    </div>

    <div class="flex flex-grow flex-col p-4">
      <h3 class="text-lg text-retro-light truncate">{{ ebook.title }}</h3>
      <p class="mt-1 flex-grow text-sm text-retro-cyan truncate">{{ ebook.author }}</p>

      <div class="mt-4 flex items-center justify-between">
        <p class="text-2xl text-white">R${{ ebook.price.toFixed(2) }}</p>
        <button @click="handleAddToCart" class="border-2 border-black bg-retro-pink py-2 px-3 text-retro-dark transition-colors duration-200 hover:bg-retro-light">
          COMPRAR
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cartStore';

const props = defineProps({
  ebook: { type: Object, required: true }
});

const cartStore = useCartStore();

function handleAddToCart() {
  cartStore.addToCart(props.ebook);
}
</script>