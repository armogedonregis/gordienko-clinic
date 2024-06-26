<template>
  <div class="watch__results">
    <div class="results__item" v-for="photo in store.state.facePhotos" :key="photo">
      <img :src="photo" class="results__photo">
    </div>
  </div>
</template>

<script setup>
import store from '/store/index.js';
</script>

<style lang="scss" scoped>
.watch__results {
  display: grid;
  grid-template-columns: repeat(4, auto);
  width: 100%;

  .results__item {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: #000;
    width: 432px;
    height: 469px;
    overflow: hidden;

    .results__photo {
      width: auto;
      height: auto;
      object-fit: cover;
    }
  }
}
</style>