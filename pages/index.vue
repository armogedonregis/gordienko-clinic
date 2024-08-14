<template>
  <main class="home" v-if="homePagesData">
    <NuxtLink :to="block.href" class="main__content" v-for="(block, index) in homePagesData" :key="index">
      <div class="content__overlay"></div>
      <h1 class="content__title">{{ block.title }}</h1>
      <video class="content__video" loop muted playsinline :ref="el => videoRefs[index] = el" v-lazy-src="block.videoDesktop" v-observe-visibility="handleVisibilityChange(block)">
        <source :src="block.main_video" type="video/mp4">
      </video>
    </NuxtLink>
  </main>
  <p class="page__loading" v-else>Загрузка</p>
</template>

<script setup>
import { ref, onUnmounted } from "vue";
import { useIntersectionObserver } from '@vueuse/core';
import store from "/store/index.js";

const homePagesData = computed(() => store.state.homePagesData)

const videoRefs = ref([])
function handleVisibilityChange(block) {
  return (isVisible, entry) => {
    if (isVisible) {
      const video = entry.target
      if (!video.played.length) {
        video.play()
      }
    } else {
      video.pause()
    }
  }
}
const { stop } = useIntersectionObserver(
  videoRefs,
  handleVisibilityChange,
  { threshold: 0.5 }
)

onMounted(async() => {
  await store.dispatch('fetchHomePagesData')
})
onUnmounted(() => {
  stop()
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .home__title {
    color: #FFF;
    text-align: center;
    font-family: Accademico;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;
  }

  .main__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .content__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%);
    }

    .content__title {
      color: #FFF;
      text-align: center;
      font-family: Accademico;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      text-transform: uppercase;
      z-index: 2;

      @media (max-width: 1100px) {
        font-size: 30px;
      }

      @media (max-width: 750px) {
        font-size: 40px;
        width: 389px;
      }

      @media (max-width: 480px) {
        width: 100%;
        padding: 0 33px;
        font-size: 30px;
      }

      @media (hover: hover) {
        &:hover {color: #3d3d3d; transition: .4s;}
      }
    }

    .content__video {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .pad {display: none;}
    .mobile {display: none;}

    @media (max-width: 900px) {
      .desktop {display: none;}
      .mobile {display: none;}
      .pad {display: flex;}
    }

    @media (max-width: 480px) {
      .desktop {display: none;}
      .pad {display: none;}
      .mobile {display: flex;}
    }
  }
}

.page__loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #393939;
  font-family: Accademico;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  height: 100vh;
  width: 100%;
  background: #fff;
}
</style>