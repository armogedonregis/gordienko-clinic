<template>
  <div class="case">
    <div class="case__swiper">
      <nav class="swiper__nav">
        <button :class="['nav__link', { 'nav__link-active': hasPrevStory }]" @click="switchPrevStory">Предыдущая история</button>
        <button :class="['nav__link', { 'nav__link-active': hasNextStory }]" @click="switchNextStory">Следующая история</button>
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
const router = useRouter()
const caseId = parseInt(route.params.id)
const caseItem = computed(() => {
  return casesData.cases.find(a => a.id === caseId)
})

const hasPrevStory = computed(() => caseId > 1)
const hasNextStory = computed(() => caseId < Math.max(...casesData.cases.map(c => c.id)))
function switchPrevStory() {
  if (hasPrevStory.value) {
    router.push(`/case/${caseId - 1}`)
  }
}
function switchNextStory() {
  if (hasNextStory.value) {
    router.push(`/case/${caseId + 1}`)
  }
}
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

    @media (max-width: 1720px) {
      height: auto;
    }

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
        opacity: 0.5;

        &:last-child {
          margin-right: -35px;
        }

        &.nav__link-active {opacity: 1;}
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

        @media (max-width: 1720px) {
          width: 49.36vw;
        }

        .item__photo {
          width: auto;
          height: auto;
          object-fit: cover;

          @media (max-width: 1720px) {
            max-width: 100%;
          }
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

      @media (max-width: 1720px) {
        height: auto;
      }

      .photos__item {
        width: 216px;
        height: 100%;

        @media (max-width: 1720px) {
          width: 12.5vw;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          
          @media (max-width: 1500px) {
            height: auto;
          }
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

    @media (max-width: 1500px) {
      padding: 76px 0;
    }

    @media (max-width: 1150px) {
      width: 660px;
    }

    .text__title {
      color: #FFF;
      text-align: center;
      font-family: Accademico;
      font-size: 55px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      text-transform: uppercase;

      @media (max-width: 900px) {
        font-size: 40px;
      }
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

      @media (max-width: 1150px) {
        margin-right: 0;
      }
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

      @media (max-width: 900px) {
        margin-left: 80px;
        width: 500px;
      }
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

      @media (max-width: 900px) {
        width: 500px;
      }
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

      @media (max-width: 900px) {
        width: 300px;
        font-size: 10px;
        height: 40px;
      }
    }
  }
}
</style>