<template>
  <div class="watch__results"  v-for="(caseItem, index) in casesData.cases" :key="index">
    <div class="results__item" v-for="(photo, photoIndex) in caseItem.images" :key="photoIndex">
      <img :src="photo" class="results__photo">
    </div>
  </div>
</template>

<script setup>
import casesData from "/server/cases.json";
</script>

<style lang="scss" scoped>
.watch__results {
  display: grid;
  grid-template-columns: repeat(4, auto);
  width: 100%;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, auto);
  }

  .results__item {
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
    }
  }
}
</style>