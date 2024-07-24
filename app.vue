<template>
  <div ref="scrollbarContainer" class="app scrollbar-container">
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <Footer />
  <Cookies />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from "./components/Header";
import Footer from "./components/Footer.vue";
import Cookies from "./components/Cookies.vue";
import Scrollbar from 'smooth-scrollbar';

const scrollbarContainer = ref(null)
let scrollbarInstance = null
function checkScrollable() {
  if (scrollbarInstance) {
    const isScrollable = scrollbarContainer.value.scrollHeight > window.innerHeight
    scrollbarInstance.options.showScrollbar = isScrollable
    scrollbarInstance.update()
  }
}
onMounted(() => {
  scrollbarInstance = Scrollbar.init(scrollbarContainer.value, {
    damping: 0.1,
    alwaysShowTracks: false,
    showScrollbar: false,
  })
  window.addEventListener('resize', checkScrollable)
  checkScrollable()
})
onUnmounted(() => {
  if (scrollbarInstance) {
    scrollbarInstance.destroy()
  }
  window.removeEventListener('resize', checkScrollable)
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

.scrollbar-container {
  width: 100%;
  height: 100vh;
  overflow: auto;
}

.scrollbar-container .scrollbar-track-x,
.scrollbar-container .scrollbar-track-y {
  background-color: #f9fbfc;
  width: 4px;
}

.scrollbar-container .scrollbar-thumb-x,
.scrollbar-container .scrollbar-thumb-y {
  background-color: #d4d4d4;
  border-radius: 4px;
  width: 4px;
}

.scrollbar-container .scrollbar-thumb-y:hover {
  background-color: #d4d4d4;
}

body::-webkit-scrollbar {
  width: 0;
}
</style>