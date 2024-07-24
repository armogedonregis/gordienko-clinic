<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <Header/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <Footer/>
    <Cookies/>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import Header from "./components/Header";
import Footer from "./components/Footer.vue";
import Cookies from "./components/Cookies.vue";

let scrollTimeout
function handleScroll() {
  clearTimeout(scrollTimeout)
  document.body.classList.add('scrolling')
  scrollTimeout = setTimeout(() => {
    document.body.classList.remove('scrolling')
  }, 1000)
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
@font-face {
  font-family: Grafitello;
  src: url('/assets/fonts/Grafitello.otf') format("truetype");
}

@font-face {
  font-family: Accademico;
  src: url('/assets/fonts/Accademico.otf') format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Grafitello;
  text-decoration: none;
  font-variant-ligatures: none;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  --scrollbar-background: #f9fbfc;
  --scrollbar-thumb: #d4d4d4;
  overflow-y: scroll;
}

body::-webkit-scrollbar {
  width: 4px;
  background-color: var(--scrollbar-background);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: 4px;
}

body::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb);
}

body:not(.scrolling)::-webkit-scrollbar {
  width: 0;
}

body:not(.scrolling)::-webkit-scrollbar-thumb {
  background-color: transparent;
}
</style>