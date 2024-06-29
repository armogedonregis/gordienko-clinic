<template>
  <div class="case">
    <div class="case__swiper">
      <nav class="swiper__nav">
        <NuxtLink to="#" class="nav__link">Предыдущая история</NuxtLink>
        <NuxtLink to="#" class="nav__link">Следующая история</NuxtLink>
      </nav>
      <div class="swiper__item-wrapper">
        <div class="swiper__item" v-for="(photo, index) in caseItem.imagesBig" :key="index">
          <img :src="photo" class="item__photo">
        </div>
      </div>
    </div>
    <div class="case__photos-wrapper">
      <div class="case__photos" v-for="item in 2" :key="item">
        <div class="photos__item" v-for="(photo, index) in caseItem.imagesLit" :key="index">
          <img :src="photo">
        </div>
      </div>
    </div>
    <div class="case__text">
      <h1 class="text__title">{{ caseItem.title }}</h1>
      <p class="text__sign">— Олег Викторович Гордиенко, <br> пластический хирург</p>
      <p class="text__name">{{ caseItem.name }}</p>
      <p class="text__story">{{ caseItem.story }}</p>
      <NuxtLink to="/results" class="text__stories">Все истории</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import casesData from '/server/cases.json'

const route = useRoute()
const caseItem = computed(() => {
  const caseId = parseInt(route.params.id)
  return casesData.cases.find(a => a.id === caseId)
})
</script>

<style lang="scss" scoped>
.case {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1728px;
  width: 100%;
  background: #000;

  .case__swiper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 853px;

    .swiper__nav {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 50%;

      .nav__link {
        color: #FFF;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 95%;
        letter-spacing: 2px;
        text-transform: uppercase;
        transform: rotate(-90deg);
        margin-left: -40px;

        &:last-child {
          margin-right: -35px;
        }
      }
    }

    .swiper__item-wrapper {
      display: flex;
      width: 100%;

      .swiper__item {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 853px;
        height: 100%;
        overflow: hidden;

        .item__photo {
          width: auto;
          height: auto;
          object-fit: cover;
        }
      }
    }
  }

  .case__photos-wrapper {
    display: flex;
    width: 100%;

    .case__photos {
      display: flex;
      width: 100%;
      height: 191px;
      background: #000;

      .photos__item {
        width: 216px;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover
        }
      }
    }
  }
  
  .case__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1146px;
    padding: 150px 0 245px;

    .text__title {
      color: #FFF;
      text-align: center;
      font-family: Accademico;
      font-size: 55px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      text-transform: uppercase;
    }

    .text__sign {
      color: #FFF;
      text-align: right;
      font-family: Accademico;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      margin-top: 80px;
      margin-left: auto;
      margin-right: 180px;
    }

    .text__name {
      color: #FFF;
      font-family: Accademico;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 95%;
      text-transform: uppercase;
      margin-top: 74px;
      margin-right: auto;
      margin-left: 180px;
    }

    .text__story {
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      width: 785px;
      margin-top: 28px;
      text-align: justify;
    }

    .text__stories {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 340px;
      height: 50px;
      border: 1px solid #FFF;
      color: #FFF;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 95%;
      text-transform: uppercase;
      margin-top: 80px;
    }
  }
}
</style>