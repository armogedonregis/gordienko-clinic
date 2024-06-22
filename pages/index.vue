<template>
  <main class="home">
    <div class="context__video-wrapper">
      <video class="context__video" loop autoplay muted>
        <source src="/static/assets/video/1.mp4" type="video/mp4">
      </video>
    </div>
    <h1 class="home__title">Полюбите свое отражение вновь</h1>
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

  .context__video-wrapper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .context__video {
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