<template>
  <NuxtLink :to="`/case/${caseItem.id}`" class="watch__results" v-for="(caseItem, index) in casesData.cases" :key="index">
    <div class="results__item" v-for="(photo, photoIndex) in caseItem.images" :key="photoIndex" @mouseenter="handleMouseEnter(index, photoIndex)" @mouseleave="handleMouseLeave">
      <img :src="photo" class="results__photo" :class="{'grayscale': activeRow === index}">
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref } from 'vue';
import casesData from "/server/cases.json";

const activeRow = ref(null)
const handleMouseEnter = (caseIndex) => {
  activeRow.value = caseIndex
}
function handleMouseLeave() {
  activeRow.value = null
}
</script>

<style lang="scss" scoped>
.watch__results {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 0;

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
    width: 100%;
    height: 469px;
    overflow: hidden;
    border: 1px solid rgba(138, 138, 138, 0.50);
    border-right: none;

    @media (max-width: 1728px) {
      height: auto;
    }

    @media (max-width: 700px) {
      width: 100%;
      height: auto;
    }

    .results__photo {
      width: auto;
      height: auto;
      overflow: hidden;

      @media (max-width: 1728px) {
        width: 100%;
      }

      &.grayscale {
        filter: grayscale(100%);
        transition: .8s;
      }
    }

    &:nth-last-child(-n+4) {
      border-bottom: none;
    }

    @media (max-width: 700px) {
      &:nth-last-child(-n+2) {
        border-bottom: none;
      }
    }
  }
}
</style>