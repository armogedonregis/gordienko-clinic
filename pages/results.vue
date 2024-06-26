<template>
  <div class="results">
    <nav class="results__nav">
      <NuxtLink class="nav__link">ИСТОРИИ ПРЕОБРАЖЕНИЯ</NuxtLink>
      <div class="nav__center-links">
        <NuxtLink class="nav__link" @click="toggleWatch">ПОСМОТРЕТЬ</NuxtLink>
        <NuxtLink class="nav__link" @click="toggleRead">ПОЧИТАТЬ</NuxtLink>
      </div>
      <NuxtLink class="nav__link">Deep plane facelift</NuxtLink>
    </nav>
    <ReadResults v-if="isReadActive"/>
    <WatchResults v-if="isWatchActive"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ReadResults from '/components/ReadResults';
import WatchResults from '/components/WatchResults';

const isReadActive = ref(true)
const isWatchActive = ref(false)
function toggleRead() {
  isReadActive.value = true
  isWatchActive.value = false
}
function toggleWatch() {
  isReadActive.value = false
  isWatchActive.value = true
}
</script>

<style lang="scss" scoped>
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1728px;
  width: 100%;
  background: #000;

  .results__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 57px;
    border-top: 1px solid rgba(138, 138, 138, 0.50);
    border-bottom: 1px solid rgba(138, 138, 138, 0.50);
    margin-top: 138px;

    .nav__link {
      cursor: pointer;
      color: #FFF;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 98%;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    .nav__center-links {
      display: flex;
      align-items: center;
      gap: 48px;
    }
  }
}
</style>