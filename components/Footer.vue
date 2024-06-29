<template>
  <footer class="footer" :class="{ 'footer__black': itemColor }">
    <div class="footer__wrapper">
      <div class="footer__description">
        <h1 class="description__title" :class="{ 'title__white': itemColor }">
          Санкт-Петербург, ул. Садовая 35 <span>Клиника GRANDMED</span>
        </h1>
        <div class="description__lists-wrapper">
          <ul class="description__list">
            <li><NuxtLink to="mailto:oleg@gordienko.doctor" :class="{ 'title__grey': itemColor }">oleg@gordienko.doctor</NuxtLink></li>
            <li><NuxtLink to="tel:79111224888" :class="{ 'title__grey': itemColor }">+7 911 122 48 88</NuxtLink></li>
            <li><NuxtLink to="https://wa.me/79111224888" target="_blank" :class="{ 'title__grey': itemColor }">whatsapp</NuxtLink></li>
            <li><NuxtLink to="https://t.me/doctor_gordienko" target="_blank" :class="{ 'title__grey': itemColor }">telegram</NuxtLink></li>
          </ul>
          <ul class="description__list">
            <li><NuxtLink to="#" :class="{ 'title__grey': itemColor }">истории преображений</NuxtLink></li>
            <li><NuxtLink to="#" :class="{ 'title__grey': itemColor }">вопросы и ответы</NuxtLink></li>
            <li><NuxtLink to="/profile" :class="{ 'title__grey': itemColor }">доктор гордиенко</NuxtLink></li>
            <li><NuxtLink to="/blog" :class="{ 'title__grey': itemColor }">блог</NuxtLink></li>
          </ul>
          <ul class="description__list">
            <li><NuxtLink to="#" :class="{ 'title__grey': itemColor }">Deep Plane Facelift</NuxtLink></li>
            <li><NuxtLink to="#" :class="{ 'title__grey': itemColor }">лоб и брови</NuxtLink></li>
            <li><NuxtLink to="#" :class="{ 'title__grey': itemColor }">глаза</NuxtLink></li>
            <li><NuxtLink to="#" :class="{ 'title__grey': itemColor }">губы</NuxtLink></li>
            <li><NuxtLink to="#" :class="{ 'title__grey': itemColor }">шея</NuxtLink></li>
          </ul>
          <ul class="description__list">
            <li><NuxtLink to="https://m.vk.com/ovgordienko?reactions_opened=wall-211145946_637" target="_blank" :class="{ 'title__grey': itemColor }">вконтакте</NuxtLink></li>
            <li><NuxtLink to="https://www.instagram.com/gordienko.doctor?igsh=MThscGVwMXJ3NXVxaw==" target="_blank" :class="{ 'title__grey': itemColor }">instagram</NuxtLink></li>
            <li><NuxtLink to="https://dzen.ru/oleggordienko" target="_blank" :class="{ 'title__grey': itemColor }">дзен</NuxtLink></li>
          </ul>
        </div>
        <NuxtLink to="/">
          <img src="/static/assets/images/logo-white.png" class="footer__logo" v-if="itemColor">
          <img src="/static/assets/images/logo-grey.png" class="footer__logo" v-else>
        </NuxtLink>
      </div>
      <div class="footer__description">
        <img src="/static/assets/images/photo-blog.png" class="description__photo">
        <h1 class="description__blog-title" :class="{ 'title__white': itemColor }">Блог</h1>
      </div>
    </div>
    <nav class="footer__links">
      <NuxtLink to="/profile" class="link">Гордиенко Олег Викторович</NuxtLink>
      <NuxtLink to="#" target="_blank" class="link">Политика конфиденциальности</NuxtLink>
      <NuxtLink to="https://www.igorstepanov.art/" target="_blank" class="link"> IGORSTEPANOV.ART ©{{ currentYear }}</NuxtLink>
    </nav>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const currentYear = ref(new Date().getFullYear())
const route = useRoute()

const itemColor = computed(() => {
  return route.path === '/results' || route.path.includes('case')
})
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 250px 0 17px 40px;
  max-width: 1728px;
  width: 100%;

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

      .description__photo {

        @media (max-width: 750px) {
          width: 302px;
          height: auto;
        }

        @media (max-width: 480px) {
          width: 250px;
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
        margin-top: 50px;

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

          li a{
            color: #000;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 95%;
            letter-spacing: 3px;
            text-transform: uppercase;

            @media (max-width: 750px) {
              font-size: 10px;
            }

            &.title__grey {color: #A3A3A3;}
          }
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
}
</style>