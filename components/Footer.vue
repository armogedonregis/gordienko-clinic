<template>
  <footer class="footer" :class="{ 'footer__black': itemColor }">
    <div class="footer__wrapper">
      <div class="footer__description">
        <h1 class="description__title" :class="{ 'title__white': itemColor }">
          Санкт-Петербург, ул. Садовая 35 <span>Клиника GRANDMED</span>
        </h1>
        <div class="description__lists-wrapper">
          <ul class="description__list">
            <li v-for="(list, index) in lists" :key="index">
              <button
                v-if="list.click"
                @click="list.click"
                @mouseenter="handleMouseEnter(index)"
                @mouseleave="handleMouseLeave"
                :class="{ 'title__grey': itemColor }"
                :style="{ opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1 }"
              >
                {{ list.title }}
              </button>
              <NuxtLink
                v-else
                :to="list.link"
                :target="list.target"
                @mouseenter="handleMouseEnter(index)"
                @mouseleave="handleMouseLeave"
                :class="{ 'title__grey': itemColor }"
                :style="{ opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1 }"
              >
                {{ list.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink to="/">
          <img src="/assets/images/logo-white.png" class="footer__logo" v-if="itemColor">
          <img src="/assets/images/logo-grey.png" class="footer__logo" v-else>
        </NuxtLink>
      </div>
      <div class="footer__description">
        <NuxtLink to="/blog" class="blog__link">
          <img src="/assets/images/photo-blog.png" class="description__photo">
        </NuxtLink>
        <NuxtLink to="/blog" class="blog__link">
          <h1 class="description__blog-title" :class="{ 'title__white': itemColor }">Блог</h1>
        </NuxtLink>
      </div>
    </div>
    <nav class="footer__links">
      <NuxtLink to="/profile" class="link">Гордиенко Олег Викторович</NuxtLink>
      <NuxtLink to="#" target="_blank" class="link">Политика конфиденциальности</NuxtLink>
      <NuxtLink to="https://www.igorstepanov.art/" target="_blank" class="link"> IGORSTEPANOV.ART ©{{ currentYear }}</NuxtLink>
    </nav>
    <div class="footer__popup-wrapper">
      <div class="popup__overlay" v-if="store.state.isOverlayOpen"></div>
      <Transition name="slide-fade">
        <FaqPopup v-if="store.state.isFaqPopupOpen"/>
      </Transition>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import FaqPopup from "./FaqPopup.vue";
import store from "/store/index.js";

const currentYear = ref(new Date().getFullYear())
const route = useRoute()

const itemColor = computed(() => {
  return route.path === '/results' || route.path.includes('case')
})

function openFaqPopup() {
  store.commit('openFaqPopup')
}

const lists = ref([
  {
    title: 'oleg@gordienko.doctor',
    link: 'mailto:oleg@gordienko.doctor'
  },
  {
    title: '+7 911 122 48 88',
    link: 'tel:79111224888'
  },
  {
    title: 'whatsapp',
    link: 'https://wa.me/79111224888',
    target: '_blank'
  },
  {
    title: 'telegram',
    link: 'https://t.me/doctor_gordienko',
    target: '_blank'
  },
  {
    title: 'истории преображений',
    link: '/results'
  },
  {
    title: 'вопросы и ответы',
    click: openFaqPopup
  },
  {
    title: 'доктор гордиенко',
    link: 'profile'
  },
  {
    title: 'блог',
    link: '/blog'
  },
  {
    title: 'Deep Plane Facelift',
    link: '/profile#deep-plane-faceLift'
  },
  {
    title: 'лоб и брови',
    link: '/profile#forehead-n-eyebrows'
  },
  {
    title: 'глаза',
    link: '/profile#eyes'
  },
  {
    title: 'губы',
    link: '/profile#lips'
  },
  {
    title: 'шея',
    link: '/profile#neck'
  },
  {
    title: 'вконтакте',
    link: 'https://m.vk.com/ovgordienko?reactions_opened=wall-211145946_637',
    target: '_blank'
  },
  {
    title: 'instagram',
    link: 'https://www.instagram.com/gordienko.doctor?igsh=MThscGVwMXJ3NXVxaw==',
    target: '_blank'
  },
  {
    title: 'дзен',
    link: 'https://dzen.ru/oleggordienko',
    target: '_blank'
  }
])
const hoveredIndex = ref(null)
function handleMouseEnter(index) {
  hoveredIndex.value = index
}
function handleMouseLeave() {
  hoveredIndex.value = null
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 250px 0 17px 40px;
  width: 100%;

  @media (max-width: 700px) {
    padding: 150px 0 17px 40px;
  }

  &.footer__black {background: #000;}

  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1100px) {
      flex-direction: column;
      gap: 160px;
    }

    .footer__description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;


      .blog__link {

        @media (max-width: 1100px) {
          width: 100%;
        }

        .description__photo {
          width: 100%;
          height: auto;
          margin-top: 0;

          @media (hover: hover) {
            &:hover {
              filter: grayscale(100%);
              transition: .8s;
            }
          }
        }

        &:last-child {

          @media (max-width: 700px) {
            width: 50%;
          }
        }
      }

      @media (max-width: 1100px) {
        &:first-child {order: 2;}
        &:last-child {
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: flex-end;
          order: 1; 
        }
      }

      .description__title {
        display: flex;
        flex-direction: column;
        gap: 15px;
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 95%;
        letter-spacing: 3px;
        text-transform: uppercase;

        @media (max-width: 750px) {
          font-size: 14px;
        }

        @media (max-width: 480px) {
          padding-right: 10px;
        }

        &.title__white {color: #fff;}

        span {
          color: #A3A3A3;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 95%;
          letter-spacing: 3px;
          text-transform: uppercase;

          @media (max-width: 750px) {
            font-size: 14px;
          }
        }
      }

      .description__blog-title {
        color: #000;
        font-family: Accademico;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 98%;
        text-transform: uppercase;
        margin-top: 90px;

        @media (max-width: 1100px) {
          order: 1;
        }

        @media (max-width: 750px) {
          font-size: 26px;
        }

        &.title__white {color: #fff;}
      }

      .description__lists-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;
        margin-top: 50px;

        .description__list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          list-style-type: none;

          li a, li button {
            cursor: pointer;
            color: #000;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 95%;
            letter-spacing: 3px;
            text-transform: uppercase;
            transition: .8s;

            @media (max-width: 750px) {
              font-size: 10px;
            }

            &.title__grey {color: #fff;}
          }

          li:nth-child(4) {margin-bottom: 35px;}
          li:nth-child(8) {margin-bottom: 35px;}
          li:nth-child(13) {margin-bottom: 35px;}
          li:nth-child(16) {margin-bottom: 0;}
        }
      }

      .footer__logo {
        width: 80px;
        height: 80px;
        margin-top: 50px;

        @media (max-width: 1100px) {
          order: 2;
        }

        @media (max-width: 750px) {
          display: none;
        }
      }
    }
  }

  .footer__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 71px;
    padding-right: 74px;

    @media (max-width: 1100px) {
      padding-right: 16px;
    }

    @media (max-width: 750px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .link {
      color: #A3A3A3;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      letter-spacing: 1px;

      &:last-child {
        color: #5493D1;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 3px;

        @media (max-width: 750px) {
          margin-top: 50px;
        }
      }
    }
  }

  .footer__popup-wrapper {

    .popup__overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(160, 160, 160, 0.59);
      z-index: 8;
      left: 0;
      top: 0;
    }
    
    .slide-fade-enter-active, .slide-fade-leave-active {
      transition: transform 0.5s ease, opacity 0.5s ease;
    }

    .slide-fade-enter-from, .slide-fade-leave-to {
      transform: translateY(100%);
      opacity: 0;
    }

    .slide-fade-enter-to, .slide-fade-leave-from {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>