<template>
  <main class="home">
    <NuxtLink :to="block.href" class="main__content" v-for="block in blocks" :key="block">
      <h1 class="content__title">{{ block.title }}</h1>
      <video class="content__video" loop autoplay muted>
        <source :src="block.video" type="video/mp4">
      </video>
    </NuxtLink>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import homepage1 from '/static/assets/video/homepage1.mp4';
import homepage2 from '/static/assets/video/homepage2.mp4';
import homepage3 from '/static/assets/video/homepage3.mp4';
import homepage4 from '/static/assets/video/homepage4.mp4';
import homepage5 from '/static/assets/video/homepage5.mp4';
import homepage6 from '/static/assets/video/homepage6.mp4';
import homepage7 from '/static/assets/video/homepage7.mp4';
import homepage8 from '/static/assets/video/homepage8.mp4';

const blocks = ref([
  {
    title: 'Полюбите свое отражение вновь',
    video: homepage1,
    href: 'hello'
  },
  {
    title: 'Доктор Гордиенко',
    video: homepage2,
    href: 'profile'
  },
  {
    title: 'Deep plane facelift',
    video: homepage3,
    href: ''
  },
  {
    title: 'Губы',
    video: homepage4,
    href: ''
  },
  {
    title: 'Лоб и брови',
    video: homepage5,
    href: ''
  },
  {
    title: 'Шея',
    video: homepage6,
    href: ''
  },
  {
    title: 'Глаза',
    video: homepage7,
    href: ''
  },
  {
    title: 'Липофилинг',
    video: homepage8,
    href: ''
  }
])
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
      top: -25%;
      left: 0;
      width: 100%;
      height: 150%;
      object-fit: cover;
    }
  }
}
</style>