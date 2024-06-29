<template>
  <div class="header-wrapper">
    <header class="header">
      <nav class="header__nav">
        <NuxtLink class="nav__link dpl" :class="route.path === '/blog' || route.path.includes('/article') ? 'link__black' : 'link__white'" to="#">deep plane facelift</NuxtLink>
        <NuxtLink class="nav__link blog" :class="route.path === '/blog' || route.path.includes('/article') ? 'link__black' : 'link__white'" to="/blog">блог</NuxtLink>
        <NuxtLink class="nav__link profile" :class="route.path === '/blog' || route.path.includes('/article') ? 'link__black' : 'link__white'" to="/profile">доктор гордиенко</NuxtLink>
        <NuxtLink class="nav__logo-link" to="/">
          <img src="/static/assets/images/logo.png" class="nav__logo">
        </NuxtLink>
        <NuxtLink class="nav__link results" :class="route.path === 'blog' || route.path === 'article' ? 'link__black' : 'link__white'" to="/results">результаты</NuxtLink>
        <NuxtLink class="nav__link tg" :class="route.path === 'blog' || route.path === 'article' ? 'link__black' : 'link__white'" to="https://t.me/doctor_gordienko" target="_blank">telegram</NuxtLink>
        <NuxtLink class="nav__link phone" :class="route.path === 'blog' || route.path === 'article' ? 'link__black' : 'link__white'" to="tel:79111224888">телефон</NuxtLink>
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

      .nav__link {
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 95%;
        letter-spacing: 2px;
        text-transform: uppercase;
        width: 142px;
        text-align: center;

        &:first-child {text-align: left;}
        &:last-child {text-align: right;}
      }

      @media (max-width: 1100px) {
        .dpl {order: 1;}
        .blog {display: none;}
        .profile {order: 5;}
        .results {display: none;}
        .tg {order: 2;}
        .phone {order: 4; display: flex; justify-content: center;}
      }

      .link__white {color: #FFF;}
      .link__black {color: #393939;}

      .nav__logo-link {
        text-align: center;
        width: 200px;

        @media (max-width: 1350px) {
          width: 100px;
        }

        @media (max-width: 1200px) {
          width: 50px;
        }

        @media (max-width: 1100px) {
          order: 3;
        }

        .nav__logo {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
}
</style>