<template>
  <div class="case">
    <div class="case__swiper">
      <nav class="swiper__nav">
        <NuxtLink class="nav__link">Предыдущая история</NuxtLink>
        <NuxtLink class="nav__link">Следующая история</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.case {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1728px;
  width: 100%;
  background: #000;

  .case__swiper {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    .swiper__nav {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .nav__link {
        color: #FFF;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 95%;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
  }
}
</style>