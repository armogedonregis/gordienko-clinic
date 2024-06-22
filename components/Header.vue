<template>
  <div class="header-wrapper">
    <header class="header">
      <nav class="header__nav">
        <div class="nav__links-wrapper">
          <NuxtLink class="nav__link" to="#">deep plane facelift</NuxtLink>
          <NuxtLink class="nav__link" to="#">блог</NuxtLink>
          <NuxtLink class="nav__link" to="#">доктор гордиенко</NuxtLink>
        </div>
        <img src="/static/assets/images/logo.png" class="nav__logo">
        <div class="nav__links-wrapper">
          <NuxtLink class="nav__link" to="#">результаты</NuxtLink>
          <NuxtLink class="nav__link" to="#">telegram</NuxtLink>
          <NuxtLink class="nav__link" to="#">телефон</NuxtLink>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header-wrapper {
  position: absolute;
  padding: 33px 33px 0 33px;
  width: 100%;
  z-index: 999;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    background: none;

    .header__nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .nav__links-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        .nav__link {
          color: #FFF;
          font-size: 10px;
          font-style: normal;
          font-weight: 500;
          line-height: 95%;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
        }
      }

      .nav__logo {
        width: 48px;
        height: 48px;
        margin: 0 200px;
      }
    }
  }
}
</style>