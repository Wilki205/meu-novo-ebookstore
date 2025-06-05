<template>
  <div class="video-background">
    <video autoplay loop muted playsinline class="video-element">
      <source src="/videos/v.mp4" type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
    <div class="video-overlay"></div>
  </div>

  <div class="main-content">
    <header>
      <TheNavbar />
    </header>

    <main class="container mx-auto p-4">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheNavbar from './components/TheNavbar.vue';
</script>

<style scoped>

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100vh; 
  z-index: -2; 
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); 
  z-index: -1;
}

.main-content {
  position: relative; 
  z-index: 1; 
}
</style>