<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__description">
        <h1 class="description__title">Санкт-Петербург, ул. Садовая 35 <span>Клиника GRANDMED</span></h1>
        <div class="description__lists-wrapper">
          <ul class="description__list">
            <li><NuxtLink to="mailto:oleg@gordienko.doctor">oleg@gordienko.doctor</NuxtLink></li>
            <li><NuxtLink to="tel:79111224888">+7 911 122 48 88</NuxtLink></li>
            <li><NuxtLink to="https://wa.me/79111224888" target="_blank">whatsapp</NuxtLink></li>
            <li><NuxtLink to="https://t.me/doctor_gordienko" target="_blank">telegram</NuxtLink></li>
          </ul>
          <ul class="description__list">
            <li><NuxtLink to="#">истории преображений</NuxtLink></li>
            <li><NuxtLink to="#">вопросы и ответы</NuxtLink></li>
            <li><NuxtLink to="profile">доктор гордиенко</NuxtLink></li>
            <li><NuxtLink to="blog">блог</NuxtLink></li>
          </ul>
          <ul class="description__list">
            <li><NuxtLink to="#">Deep Plane Facelift</NuxtLink></li>
            <li><NuxtLink to="#">лоб и брови</NuxtLink></li>
            <li><NuxtLink to="#">глаза</NuxtLink></li>
            <li><NuxtLink to="#">губы</NuxtLink></li>
            <li><NuxtLink to="#">шея</NuxtLink></li>
          </ul>
          <ul class="description__list">
            <li><NuxtLink to="https://m.vk.com/ovgordienko?reactions_opened=wall-211145946_637" target="_blank">вконтакте</NuxtLink></li>
            <li><NuxtLink to="https://www.instagram.com/gordienko.doctor?igsh=MThscGVwMXJ3NXVxaw==" target="_blank">instagram</NuxtLink></li>
            <li><NuxtLink to="https://dzen.ru/oleggordienko" target="_blank">дзен</NuxtLink></li>
          </ul>
        </div>
        <img src="/static/assets/images/logo-grey.png" class="footer__logo">
      </div>
      <div class="footer__description">
        <img src="/static/assets/images/photo-blog.png">
        <h1 class="description__blog-title">Блог</h1>
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

const currentYear = ref(new Date().getFullYear())
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 250px 0 17px 40px;
  max-width: 1728px;
  width: 100%;

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