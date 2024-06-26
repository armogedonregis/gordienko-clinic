<template>
  <footer class="footer" :class="route.path === '/results' ? 'footer__black' : ''">
    <div class="footer__wrapper">
      <div class="footer__description">
        <h1 class="description__title" :class="route.path === '/results' ? 'title__white' : ''">Санкт-Петербург, ул. Садовая 35 <span>Клиника GRANDMED</span></h1>
        <div class="description__lists-wrapper">
          <ul class="description__list">
            <li><NuxtLink to="mailto:oleg@gordienko.doctor" :class="route.path === '/results' ? 'title__grey' : ''">oleg@gordienko.doctor</NuxtLink></li>
            <li><NuxtLink to="tel:79111224888" :class="route.path === '/results' ? 'title__grey' : ''">+7 911 122 48 88</NuxtLink></li>
            <li><NuxtLink to="https://wa.me/79111224888" target="_blank" :class="route.path === '/results' ? 'title__grey' : ''">whatsapp</NuxtLink></li>
            <li><NuxtLink to="https://t.me/doctor_gordienko" target="_blank" :class="route.path === '/results' ? 'title__grey' : ''">telegram</NuxtLink></li>
          </ul>
          <ul class="description__list">
            <li><NuxtLink to="#" :class="route.path === '/results' ? 'title__grey' : ''">истории преображений</NuxtLink></li>
            <li><NuxtLink to="#" :class="route.path === '/results' ? 'title__grey' : ''">вопросы и ответы</NuxtLink></li>
            <li><NuxtLink to="profile" :class="route.path === '/results' ? 'title__grey' : ''">доктор гордиенко</NuxtLink></li>
            <li><NuxtLink to="blog" :class="route.path === '/results' ? 'title__grey' : ''">блог</NuxtLink></li>
          </ul>
          <ul class="description__list">
            <li><NuxtLink to="#" :class="route.path === '/results' ? 'title__grey' : ''">Deep Plane Facelift</NuxtLink></li>
            <li><NuxtLink to="#" :class="route.path === '/results' ? 'title__grey' : ''">лоб и брови</NuxtLink></li>
            <li><NuxtLink to="#" :class="route.path === '/results' ? 'title__grey' : ''">глаза</NuxtLink></li>
            <li><NuxtLink to="#" :class="route.path === '/results' ? 'title__grey' : ''">губы</NuxtLink></li>
            <li><NuxtLink to="#" :class="route.path === '/results' ? 'title__grey' : ''">шея</NuxtLink></li>
          </ul>
          <ul class="description__list">
            <li><NuxtLink to="https://m.vk.com/ovgordienko?reactions_opened=wall-211145946_637" target="_blank" :class="route.path === '/results' ? 'title__grey' : ''">вконтакте</NuxtLink></li>
            <li><NuxtLink to="https://www.instagram.com/gordienko.doctor?igsh=MThscGVwMXJ3NXVxaw==" target="_blank" :class="route.path === '/results' ? 'title__grey' : ''">instagram</NuxtLink></li>
            <li><NuxtLink to="https://dzen.ru/oleggordienko" target="_blank" :class="route.path === '/results' ? 'title__grey' : ''">дзен</NuxtLink></li>
          </ul>
        </div>
        <img src="/static/assets/images/logo-white.png" class="footer__logo" v-if="route.path === '/results'">
        <img src="/static/assets/images/logo-grey.png" class="footer__logo" v-if="route.path !== '/results'">
      </div>
      <div class="footer__description">
        <img src="/static/assets/images/photo-blog.png">
        <h1 class="description__blog-title" :class="route.path === '/results' ? 'title__white' : ''">Блог</h1>
      </div>
    </div>
    <nav class="footer__links">
      <NuxtLink to="profile" class="link">Гордиенко Олег Викторович</NuxtLink>
      <NuxtLink to="#" target="_blank" class="link">Политика конфиденциальности</NuxtLink>
      <NuxtLink to="https://www.igorstepanov.art/" target="_blank" class="link"> IGORSTEPANOV.ART ©{{ currentYear }}</NuxtLink>
    </nav>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const currentYear = ref(new Date().getFullYear())
const route = useRoute()
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

    .footer__description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

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

        &.title__white {color: #fff;}

        span {
          color: #A3A3A3;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 95%;
          letter-spacing: 3px;
          text-transform: uppercase;
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

            &.title__grey {color: #A3A3A3;}
          }
        }
      }

      .footer__logo {
        width: 80px;
        height: 80px;
        margin-top: 50px;
      }
    }
  }

  .footer__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 71px;
    padding-right: 74px;

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
      }
    }
  }
}
</style>