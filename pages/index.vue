<template>
  <main class="home">
    <NuxtLink :to="block.href" class="main__content" v-for="block in home.home" :key="block">
      <div class="content__overlay"></div>
      <h1 class="content__title">{{ block.title }}</h1>
      <video class="content__video" loop autoplay muted playsinline ref="mobileAutoplay">
        <source :src="block.video" type="video/mp4">
      </video>
    </NuxtLink>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import home from "/server/home.json";

const mobileAutoplay = ref([])
onMounted(() => {
  mobileAutoplay.value.forEach(video => {
    if(video) {
      video.addEventListener('canplaythrough', video.play())
    }
  })
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1728px;
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
      font-feature-settings: 'liga' off;
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
    }

    .content__video {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>