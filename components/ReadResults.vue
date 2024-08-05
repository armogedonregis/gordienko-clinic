<template>
  <div class="read__results">
    <div class="results__item" v-for="(story, index) in resultsPagesData" :key="index">
      <div class="item__container" :class="{ animate: isVisible[index] }" ref="items">
        <h1 class="item__title">{{ story.title }}</h1>
        <h2 class="item__subtitle">{{ story.subtitle }}</h2>
        <p class="item__text">{{ story.shortStory }}</p>
        <NuxtLink :to="`/case/${story.id}`" class="item__more-btn">читать далее</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import casesData from '/server/cases.json';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const resultsPagesData = computed(() => store.state.resultsPagesData)

const items = ref([])
const isVisible = ref([])
const observeItems = () => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = items.value.indexOf(entry.target)
        if (index !== -1) {
          if (entry.isIntersecting) {
            isVisible.value[index] = true
          } else if (entry.boundingClientRect.top > 0) {
            isVisible.value[index] = false
          }
        }
      })
    }, { threshold: [0, 0.1, 0.9, 1] })

    items.value.forEach((item, index) => {
      isVisible.value[index] = false
      observer.observe(item)
    })

    onBeforeUnmount(() => {
      items.value.forEach((item) => {
        observer.unobserve(item)
      })
    })
  }
}

onMounted(async() => {
  observeItems()
  await store.dispatch('fetchResultsPagesData')
  console.log(resultsPagesData.value)
})
</script>

<style lang="scss" scoped>
.read__results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .results__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    border-bottom: 1px solid rgba(57, 57, 57, 0.80);

    @media (max-width: 700px) {
      padding: 130px 20px;
      height: auto;
    }

    .item__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      transform: translateY(70px);
      opacity: 0;
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

      &.animate {
        opacity: 1;
        transform: translateY(0);
      }

      .item__title {
        color: #FFF;
        text-align: center;
        font-family: Accademico;
        font-size: 42px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        text-transform: uppercase;
        margin-bottom: 40px;
        width: 854px;

        @media (max-width: 900px) {
          font-size: 38px;
          width: 660px;
          margin-bottom: 20px;
        }

        @media (max-width: 700px) {
          width: 100%;
          font-size: 26px;
        }
      }

      .item__title-center {
        color: #FFF;
        font-size: 70px;
        font-style: normal;
        font-weight: 400;
        line-height: 95%;
        text-transform: uppercase;
      }

      .item__subtitle {
        color: #8A8A8A;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 98%;
        letter-spacing: 4px;
        text-transform: uppercase;
        margin-bottom: 80px;

        @media (max-width: 900px) {
          font-size: 18px;
          width: 660px;
        }

        @media (max-width: 700px) {
          font-size: 18px;
          width: 100%;
        }
      }

      .item__text {
        color: #FFF;
        text-align: justify;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        margin-bottom: 60px;
        width: 562px;

        @media (max-width: 900px) {
          font-size: 18px;
          width: 450px;
        }

        @media (max-width: 700px) {
          width: 100%;
        }
      }

      .item__more-btn {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #FFF;
        width: 340px;
        height: 50px;
        color: #FFF;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 95%;
        text-transform: uppercase;
        background: none;

        @media (max-width: 900px) {
          width: 300px;
          height: 40px;
        }

        @media (hover: hover) {
          &:hover {
            background: #fff;
            color: #000;
            transition: .8s;
          }
        }
      }
    }
  }
}
</style>