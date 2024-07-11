<template>
  <div class="read__results">
    <div class="results__item" v-for="story in casesData.cases" :key="story">
      <div class="item__container">
        <h1 class="item__title">{{ story.title }}</h1>
        <h2 class="item__subtitle">{{ story.subtitle }}</h2>
        <p class="item__text">{{ story.shortStory }}</p>
        <NuxtLink :to="`/case/${story.id}`" class="item__more-btn">читать  далее</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import casesData from '/server/cases.json';

let textObserver = null
const handleTextIntersect = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
    } else {
      entry.target.classList.remove('animate')
    }
  })
}

onMounted(() => {
  const textOptions = {
    root: null,
    rootMargin: '150px',
    threshold: 0.3
  }
  textObserver = new IntersectionObserver(handleTextIntersect, textOptions)

  const textElements = document.querySelectorAll('.item__container')
  textElements.forEach(el => {
    textObserver.observe(el)
  })
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
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

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
      }

      &.animate {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>