<template>
  <main class="home">
    <NuxtLink :to="block.href" class="main__content" v-for="block in home.home" :key="block">
      <h1 class="content__title">{{ block.title }}</h1>
      <video class="content__video" loop autoplay muted>
        <source :src="block.video" type="video/mp4">
      </video>
    </NuxtLink>
  </main>
</template>

<script setup>
import home from "/server/home.json";
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