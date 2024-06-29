<template>
  <div class="cookies" v-if="isAgree">
    <h1 class="cookies__title">Я помню каждую свою пациентку. А чтобы сайт лучше запомнил вас, воспользуйтесь cookie.</h1>
    <button class="cookies__agreement" @click="toggleAgreeCookies">Использовать cookies</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isAgree = ref(true)
function toggleAgreeCookies() {
  isAgree.value = false
}
</script>

<style lang="scss" scoped>
.cookies {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 247px;
  background: rgba(160, 160, 160, 0.63);
  z-index: 999;
  bottom: 0;
  padding: 0 47px 0 30px;
  max-width: 1728px;

  @media (max-width: 1700px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 40px;
  }

  .cookies__title {
    color: #FFF;
    font-family: Accademico;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.22px;
    text-transform: uppercase;

    @media (max-width: 1700px) {
      font-size: 20px;
    }
  }

  .cookies__agreement {
    cursor: pointer;
    display: flex;
    width: 340px;
    height: 50px;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #FFF;
    background: none;
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 95%;
    text-transform: uppercase;

    @media (max-width: 1700px) {
      width: 300px;
    }
  }
}
</style>