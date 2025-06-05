<template>
  <div class="p-8">
    <h1 class="mb-12 text-center text-5xl text-retro-light text-shadow-pixel">
      Seu Carrinho
    </h1>

    <div v-if="cartStore.itemCount > 0" class="grid grid-cols-1 gap-12 md:grid-cols-3">
      
      <div class="md:col-span-2">
        <div class="space-y-4 border-4 border-black bg-retro-purple p-6 shadow-pixel">
          
          <div v-for="(item, index) in cartStore.items" :key="item.id" 
               class="flex items-center gap-4 border-b-2 border-black pb-4"
               :class="{ 'border-none pb-0': index === cartStore.items.length - 1 }">
            
            <img :src="item.coverImage" :alt="item.title" class="h-35 w-20 border-2 border-black object-contain" />
            
            <div class="flex-grow">
              <h3 class="text-lg text-retro-light">{{ item.title }}</h3>
              <p class="text-sm text-retro-cyan">{{ item.author }}</p>
              <p class="mt-2 text-lg text-white">R$ {{ item.price.toFixed(2) }}</p>
            </div>

            <button @click="cartStore.removeFromCart(item.id)" class="bg-retro-dark text-retro-pink py-2 px-3 border-2 border-black hover:bg-retro-pink hover:text-retro-dark transition-colors duration-200">
              REMOVER
            </button>
          </div>
        </div>
      </div>

      <div class="md:col-span-1">
        <div class="border-4 border-black bg-retro-purple p-6 text-white shadow-pixel">
          <h2 class="mb-4 border-b-2 border-black pb-2 text-2xl text-retro-light">Resumo</h2>
          <div class="mb-4 flex justify-between text-lg">
            <span>Total de Itens:</span>
            <span>{{ cartStore.itemCount }}</span>
          </div>
          <div class="flex justify-between border-t-2 border-black pt-4 text-2xl font-bold">
            <span class="text-retro-light">Total:</span>
            <span class="text-retro-cyan">R$ {{ cartStore.cartTotal }}</span>
          </div>
          
          <button class="mt-6 w-full border-2 border-black bg-retro-pink py-3 text-lg font-bold text-retro-dark shadow-pixel transition-all duration-200 hover:bg-retro-light">
            FINALIZAR COMPRA
          </button>
        </div>
      </div>

    </div>

    <div v-else class="py-16 text-center">
      <p class="text-2xl text-retro-cyan">Seu carrinho está vazio...</p>
      
      <RouterLink to="/" class="mt-8 inline-block border-2 border-black bg-retro-light px-8 py-4 text-xl font-bold text-retro-dark shadow-pixel transition-all duration-200 hover:shadow-pixel-hover">
        EXPLORAR EBOOKS
      </RouterLink>
    </div>

  </div>
</template>

<script setup>
import { useCartStore } from '../store/cartStore';
import { RouterLink } from 'vue-router';
const cartStore = useCartStore();
</script>