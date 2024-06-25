<template>
  <div class="header-wrapper">
    <header class="header">
      <nav class="header__nav">
        <div class="nav__links-wrapper left">
          <NuxtLink class="nav__link" :class="route.path === '/blog' || route.path.includes('/article') ? 'link__black' : 'link__white'" to="#">deep plane facelift</NuxtLink>
          <NuxtLink class="nav__link" :class="route.path === '/blog' || route.path.includes('/article') ? 'link__black' : 'link__white'" to="blog">блог</NuxtLink>
          <NuxtLink class="nav__link" :class="route.path === '/blog' || route.path.includes('/article') ? 'link__black' : 'link__white'" to="profile">доктор гордиенко</NuxtLink>
        </div>
        <NuxtLink to="/">
          <img src="/static/assets/images/logo.png" class="nav__logo">
        </NuxtLink>
        <div class="nav__links-wrapper right">
          <NuxtLink class="nav__link" :class="route.path === 'blog' || route.path === 'article' ? 'link__black' : 'link__white'" to="results">результаты</NuxtLink>
          <NuxtLink class="nav__link" :class="route.path === 'blog' || route.path === 'article' ? 'link__black' : 'link__white'" to="#">telegram</NuxtLink>
          <NuxtLink class="nav__link" :class="route.path === 'blog' || route.path === 'article' ? 'link__black' : 'link__white'" to="#">телефон</NuxtLink>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: absolute;
  padding: 33px 33px 0 33px;
  z-index: 999;
  max-width: 1728px;
  width: 100%;

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
          font-size: 10px;
          font-style: normal;
          font-weight: 500;
          line-height: 95%;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .link__white {color: #FFF;}
        .link__black {color: #393939;}
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