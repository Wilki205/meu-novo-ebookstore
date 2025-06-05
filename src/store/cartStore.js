import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]); 
  const itemCount = computed(() => items.value.length);
  
  const cartTotal = computed(() => {
    return items.value.reduce((total, item) => total + item.price, 0).toFixed(2);
  });

  function addToCart(ebook) {
    if (!items.value.find(item => item.id === ebook.id)) {
      items.value.push(ebook);
    }
  }

  function removeFromCart(ebookId) {
    items.value = items.value.filter(item => item.id !== ebookId);
  }

  return { items, itemCount, cartTotal, addToCart, removeFromCart };
});