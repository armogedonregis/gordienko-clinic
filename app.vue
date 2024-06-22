<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header/>
    <NuxtPage>
      <Index />
    </NuxtPage>
    <Footer/>
    <Cookies/>
  </div>
</template>

<script setup>
import Header from "./components/Header"
import Index from "./pages/index";
import Footer from "./components/Footer.vue";
import Cookies from "./components/Cookies.vue";

</script>

<style>
@font-face {
  font-family: Grafitello;
  src: url('/static/assets/fonts/Grafitello.ttf');
}

@font-face {
  font-family: Accademico;
  src: url('/static/assets/fonts/Accademico.otf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Grafitello;
}

body {
  --scrollbar-background: #f9fbfc;
  --scrollbar-thumb: #d4d4d4;
}

body::-webkit-scrollbar {
  width: 8px;
  background-color: var(--scrollbar-background);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: 4px;
}

body::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb);
}
</style>