<template>
  <div class="results">
    <nav class="results__nav">
      <NuxtLink class="nav__link mobile-first-link" @click="toggleRead">ИСТОРИИ ПРЕОБРАЖЕНИЯ</NuxtLink>
      <div class="nav__center-links">
        <NuxtLink :to="{ path: '/results', query: { view: 'watch' } }" :class="isReadActive ? 'nav__link' : 'nav__link-active'">ПОСМОТРЕТЬ</NuxtLink>
        <NuxtLink :to="{ path: '/results', query: { view: 'read' } }" :class="isWatchActive ? 'nav__link' : 'nav__link-active'">ПОЧИТАТЬ</NuxtLink>
      </div>
      <NuxtLink to="/profile#deep-plane-faceLift" class="nav__link desktop">Deep plane facelift</NuxtLink>
      <NuxtLink class="nav__link mobile">Истории преображения</NuxtLink>
    </nav>
    <ReadResults v-if="isReadActive"/>
    <WatchResults v-if="isWatchActive"/>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ReadResults from '/components/ReadResults';
import WatchResults from '/components/WatchResults';

const route = useRoute()
const isReadActive = ref(true)
const isWatchActive = ref(false)

watch(() => route.query, (newQuery) => {
  if (newQuery.view === 'watch') {
    isWatchActive.value = true
    isReadActive.value = false
  } else if (newQuery.view === 'read') {
    isReadActive.value = true
    isWatchActive.value = false
  }
}, { immediate: true })
</script>

<style lang="scss" scoped>
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #000;

  .results__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 57px 33px;
    border-top: 1px solid rgba(138, 138, 138, 0.50);
    border-bottom: 1px solid rgba(138, 138, 138, 0.50);
    margin-top: 138px;

    @media (max-width: 900px) {
      padding: 0 33px;
      height: 91px;
    }

    @media (max-width: 700px) {
      height: 51px;
      padding: 0 20px;
    }

    .nav__link {
      cursor: pointer;
      color: #FFF;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 98%;
      letter-spacing: 3px;
      text-transform: uppercase;
      opacity: 0.5;

      @media (max-width: 700px) {
        font-size: 8px;
      }

      &.mobile-first-link {
        display: flex;

        @media (max-width: 800px) {
          display: none;
        }
      }

      &.desktop {
        display: flex;

        @media (max-width: 900px) {
          display: none;
        }

        @media (max-width: 800px) {
          display: flex;
        }
      }

      &.mobile {
        display: none;

        @media (max-width: 900px) {
          display: flex;
        }

        @media (max-width: 800px) {
          display: none;
        }
      }
    }

    .nav__link-active {
      cursor: pointer;
      color: #FFF;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 98%;
      letter-spacing: 3px;
      text-transform: uppercase;
      opacity: 1;

      @media (max-width: 700px) {
        font-size: 8px;
      }
    }

    .nav__center-links {
      display: flex;
      align-items: center;
      gap: 48px;

      @media (max-width: 700px) {
        gap: 23px;
      }
    }
  }
}
</style>