<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <Header />
    <div class="page-container">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Footer />
    <Cookies />
  </div>
</template>

<script setup>
import Header from "./components/Header";
import Footer from "./components/Footer.vue";
import Cookies from "./components/Cookies.vue";
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
}

body {
  --scrollbar-background: #f9fbfc;
  --scrollbar-thumb: #d4d4d4;
}

body::-webkit-scrollbar {
  width: 3px;
  background-color: var(--scrollbar-background);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: 4px;
}

body::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb);
}


.page-container {
  flex: 1;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>