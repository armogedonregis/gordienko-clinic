<template>
  <div class="header-wrapper">
    <header class="header">
      <nav class="header__nav">
        <NuxtLink to="/profile#deep-plane-faceLift" :class="getItemColor('/deep-plane-facelift')" class="nav__link dp">Deep plane facelift</NuxtLink>
        <NuxtLink to="/blog" :class="getItemColor('/blog')" class="nav__link blog">Блог</NuxtLink>
        <NuxtLink to="/profile" :class="getItemColor('/profile')" class="nav__link profile">Доктор Гордиенко</NuxtLink>
        <NuxtLink to="/" class="nav__logo-link"><img src="/assets/images/logo.png" class="nav__logo"></NuxtLink>
        <NuxtLink to="/results" :class="getItemColor('/results')" class="nav__link results">Результаты</NuxtLink>
        <NuxtLink to="https://t.me/+79111224888" target="_blank" :class="getItemColor('https://t.me/79111224888')" class="nav__link tg">
          <span class="phone__title">Telegram</span>
          <span class="phone__number">@Oleg Gordienko</span>
        </NuxtLink>
        <NuxtLink to="tel:79111224888" :class="getItemColor('tel:79111224888')" class="nav__link phone">
          <span class="phone__title">Телефон</span>
          <span class="phone__number">+7 (911) 122-48-88</span>
        </NuxtLink>
      </nav>
      <BaseDropdown class="header__nav-mobile"/>
    </header>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import BaseDropdown from './BaseDropdown.vue';

const route = useRoute()

function getItemColor(path) {
  if (route.path === '/') {
    return 'link__white'
  } else if (route.path.includes('/article') || route.path.includes('/blog')) {
    return path === '/deep-plane-facelift' || path === '/blog' || path === '/profile' ? 'link__black' : 'link__white'
  } else {
    return 'link__white'
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: absolute;
  padding: 33px 33px 0 33px;
  z-index: 999;
  max-width: 1728px;
  width: 100%;

  @media (max-width: 480px) {
    padding: 17px 17px 0 17px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    background: none;

    @media (max-width: 800px) {
      flex-direction: row-reverse;
    }

    .header__nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      @media (max-width: 800px) {
        justify-content: center;
      }

      .nav__link {
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 95%;
        letter-spacing: 2px;
        text-transform: uppercase;
        width: 142px;
        text-align: center;
        position: relative;

        @media (max-width: 800px) {
          opacity: 0;
        }

        &.dp {display: flex; justify-content: flex-start;}
        &.blog {display: flex; justify-content: center;}
        &.profile {display: flex; justify-content: flex-start;}
        &.results {display: flex; justify-content: flex-end;}
        &.tg {display: flex; justify-content: flex-end;}
        &.phone {display: flex; justify-content: flex-end;}

        .phone__title, .phone__number {
          transition: transform 0.8s ease, opacity 0.8s ease;
          position: absolute;
          right: 0;
          opacity: 1;
        }

        .phone__title {
          transform: translateY(0);
        }

        .phone__number {
          transform: translateY(-100%);
          opacity: 0;
        }

        @media (max-width: 1100px) {
          &.dp {order: 1;}
          &.blog {display: none;}
          &.profile {order: 5;}
          &.results {display: none;}
          &.tg {order: 2; justify-content: center;}
          &.phone {order: 4; display: flex; justify-content: center;}
        }

        @media (hover: hover) {
          &:hover .phone__title {
            transform: translateY(100%);
            opacity: 0;
          }

          &:hover .phone__number {
            transform: translateY(0);
            opacity: 1;
          }
        }
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

    .header__nav-mobile {
      display: none;

      @media (max-width: 800px) {
        display: block;
        position: absolute;
        left: 30px;
      }

      @media (max-width: 480px) {
        left: 17px;
      }
    }
  }
}
</style>