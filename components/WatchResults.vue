<template>
  <div class="watch__results"  v-for="(caseItem, index) in casesData.cases" :key="index">
    <div class="results__item" v-for="(photo, photoIndex) in caseItem.images" :key="photoIndex" @mouseenter="handleMouseEnter(index, photoIndex)" @mouseleave="handleMouseLeave">
      <img :src="photo" class="results__photo" :class="{'grayscale': activeIndex !== null && activeIndex !== `${index}-${photoIndex}`}">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import casesData from "/server/cases.json";

const activeIndex = ref(null)
const handleMouseEnter = (caseIndex, photoIndex) => {
  activeIndex.value = `${caseIndex}-${photoIndex}`
}
function handleMouseLeave() {
  activeIndex.value = null
}
</script>

<style lang="scss" scoped>
.watch__results {
  display: grid;
  grid-template-columns: repeat(4, auto);
  width: 100%;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, auto);

    .results__item:nth-last-child(1) {
      grid-row: 3;
    }

    .results__item:last-child {
      grid-row: 2;
    }
  }

  .results__item {
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: #000;
    width: 432px;
    height: 469px;
    overflow: hidden;

    @media (max-width: 1728px) {
      width: 25vw;
      height: auto;
    }

    @media (max-width: 700px) {
      width: 100%;
      height: auto;
    }

    .results__photo {
      width: auto;
      height: auto;
      object-fit: cover;

      @media (max-width: 1728px) {
        width: 100%;
        height: 100%;
      }

      &.grayscale {
        filter: grayscale(100%);
        transition: .8s;
      }
    }
  }
}
</style>