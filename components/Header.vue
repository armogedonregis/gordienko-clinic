<template>
  <div class="header-wrapper">
    <header class="header">
      <nav class="header__nav">
        <NuxtLink 
          :class="[link.class, getItemColor(link.path)]"
          v-for="(link, index) in headerData.links"
          :to="link.path" 
          :key="index"
          :target="link.target"
        >
          {{ link.title }}
          <img src="/assets/images/logo.png" class="nav__logo" v-if="link.image">
        </NuxtLink>
      </nav>
      <BaseDropdown class="header__nav-mobile"/>
    </header>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import BaseDropdown from './BaseDropdown.vue';
import headerData from '/server/header.json';

const route = useRoute()

function getItemColor(path) {
  if (route.path.includes('/article') || route.path.includes('/blog')) {
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

        @media (max-width: 800px) {
          display: none;
        }

        &:first-child {
          text-align: left;
          @media (max-width: 800px) {
            display: none;
          }
        }
        &:last-child {
          text-align: right;
          @media (max-width: 800px) {
            display: none;
          }
        }
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

    .header__nav-mobile {
      display: none;

      @media (max-width: 800px) {
        display: block;
        position: absolute;
        left: 30px;
      }
    }
  }
}
</style>