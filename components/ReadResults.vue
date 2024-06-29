<template>
  <div class="read__results">
    <div class="results__item" v-for="story in casesData.cases" :key="story">
      <h1 class="item__title">{{ story.title }}</h1>
      <h2 class="item__subtitle">{{ story.subtitle }}</h2>
      <p class="item__text">{{ story.shortStory }}</p>
      <NuxtLink :to="`/case/${story.id}`" class="item__more-btn">читать  далее</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import casesData from '/server/cases.json'
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
    }
  }
}
</style>