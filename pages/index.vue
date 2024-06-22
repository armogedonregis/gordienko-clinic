<template>
  <main class="home">
    <div class="main__content">
      <h1 class="content__title">Полюбите свое отражение вновь</h1>
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/homepage1.mp4" type="video/mp4">
      </video>
    </div>
    <div class="main__content">
      <h1 class="content__title">Доктор Гордиенко</h1>
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/homepage2.mp4" type="video/mp4">
      </video>
    </div>
    <div class="main__content">
      <h1 class="content__title">Deep plane facelift</h1>
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/homepage3.mp4" type="video/mp4">
      </video>
    </div>
    <div class="main__content">
      <h1 class="content__title">Губы</h1>
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/homepage4.mp4" type="video/mp4">
      </video>
    </div>
    <div class="main__content">
      <h1 class="content__title">Лоб и брови</h1>
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/homepage5.mp4" type="video/mp4">
      </video>
    </div>
    <div class="main__content">
      <h1 class="content__title">Шея</h1>
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/homepage6.mp4" type="video/mp4">
      </video>
    </div>
    <div class="main__content">
      <h1 class="content__title">Глаза</h1>
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/homepage7.mp4" type="video/mp4">
      </video>
    </div>
    <div class="main__content">
      <h1 class="content__title">Липофилинг</h1>
      <video class="content__video" loop autoplay muted>
        <source src="/static/assets/video/homepage8.mp4" type="video/mp4">
      </video>
    </div>
  </main>
</template>

<script setup>

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