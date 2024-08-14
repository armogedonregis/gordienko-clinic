<template>
  <div class="header-wrapper" ref="headerWrapper">
    <header class="header">
      <nav class="header__nav">
        <button class="nav__link menu" @click="toggleDropdown">меню</button>
        <NuxtLink to="/profile#deep-plane-faceLift" class="nav__link dp">Deep plane facelift</NuxtLink>
        <NuxtLink to="/blog" class="nav__link blog">Блог</NuxtLink>
        <NuxtLink to="/profile" class="nav__link profile">Доктор Гордиенко</NuxtLink>
        <NuxtLink :to="{ path: '/results', query: { view: 'read' } }" class="nav__link results">Результаты</NuxtLink>
        <NuxtLink to="https://t.me/+79111224888" target="_blank" class="nav__link tg" data-title="Telegram" data-number="@doctor_gordienko"></NuxtLink>
        <NuxtLink to="tel:79111224888" class="nav__link phone" data-title="Телефон" data-number="+7 (911) 122-48-88"></NuxtLink>
      </nav>
    </header>
  </div>
  <div class="header__dropdown-wrapper">
    <div v-if="isDropdownOpen" class="dropdown__overlay"></div>
    <Transition name="menu-fade">
      <div v-if="isDropdownOpen" class="dropdown__menu-wrapper" @click="closeDropdown">
        <div class="dropdown__menu">
          <Transition name="text-blur" appear>
            <div v-if="!isClosing" class="menu__items-wrapper">
              <NuxtLink :to="link.href" class="menu__item" v-for="link in home.home" :key="link">{{ link.title }}</NuxtLink>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import home from '/server/home.json';

const headerWrapper = ref(null)
const isDropdownOpen = ref(false)
const isClosing = ref(false)
function toggleDropdown() {
  isDropdownOpen.value = true
  isClosing.value = false
  headerWrapper.value.style.mixBlendMode = 'normal'
}
function closeDropdown() {
  isClosing.value = true
  setTimeout(() => {
    isDropdownOpen.value = false
    headerWrapper.value.style.mixBlendMode = 'difference'
  }, 500)
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: fixed;
  padding: 33px 33px 0 40px;
  z-index: 999;
  width: 100%;
  mix-blend-mode: difference;

  @media (max-width: 480px) {
    padding: 17px 17px 0 50px;
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
        justify-content: flex-start;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        color: #fff;

        @media (max-width: 1450px) {
          font-size: 8px;
        }

        @media (max-width: 800px) {
          display: none;
          font-size: 17px;
        }

        &::before,
        &::after {
          display: flex;
          justify-content: flex-end;
          content: '';
          position: absolute;
          width: 100%;
          text-align: center;
          transition: transform 1.5s ease, opacity 1.5s ease;
        }

        &::before {
          content: attr(data-title);
          transform: translateY(0);
          opacity: 1;
        }

        &::after {
          content: attr(data-number);
          transform: translateY(-200%);
          opacity: 0;
        }

        &.menu {
          display: flex;
          align-items: flex-start;
        }

        @media (max-width: 1100px) {
          &.dp {
            order: 1;
          }

          &.blog {
            display: none;
          }

          &.profile {
            order: 5;
          }

          &.results {
            display: none;
          }

          &.tg {
            order: 2;
          }

          &.phone {
            order: 4;
          }

          &.tg::before,
          &.tg::after,
          &.phone::before,
          &.phone::after {
            justify-content: center;
          }
        }

        @media (hover: hover) {
          &:hover::before {
            transform: translateY(100%);
            opacity: 0;
          }

          &:hover::after {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
  }
}

.header__dropdown-wrapper {
  
  .dropdown__overlay {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(15px);
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
  }

  .dropdown__menu-wrapper {
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
    padding: 100px 0;

    .menu-fade-enter-active {
        transition: opacity 0.5s ease;
      }

      .menu-fade-leave-active {
        transition: opacity 0.5s ease 0.5s;
      }

      .menu-fade-enter-from,
      .menu-fade-leave-to {
        opacity: 0;
      }

    .dropdown__menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;

      @media (max-width: 600px) {
        font-size: 55px;
      }

      .menu__item {
        color: #FFF;
        text-align: center;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 98%;
        text-transform: uppercase;

        transition: filter 0.5s ease;

        @media (max-width: 600px) {
          font-size: 20px;
        }

        @media (max-width: 400px) {
          font-size: 17px;
        }
      }
    }

    .menu__items-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

    .text-blur-enter-active,
    .text-blur-leave-active {
      transition: filter 0.5s ease;
    }

    .text-blur-enter-from,
    .text-blur-leave-to {
      filter: blur(10px);
    }

    .text-blur-enter-to,
    .text-blur-leave-from {
      filter: blur(0);
    }
    }
}
</style>