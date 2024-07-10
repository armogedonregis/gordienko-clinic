<template>
  <div class="faq__popup">
    <div class="popup__overlay"></div>
    <div class="popup__modal">
      <button class="close" @click="closeFaqPopup">
        <img src="/public/assets/icons/close-popup.svg">
      </button>
      <img src="/public/assets/images/faqpopup.png" class="modal__photo">
      <h1 class="modal__title">вопросы и ответы</h1>
      <div class="modal__accordion">
        <BaseAccordion/>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseAccordion from './BaseAccordion.vue';
import store from '/store/index.js';

function closeFaqPopup() {
  store.commit('closeFaqPopup')
}
</script>

<style lang="scss" scoped>
.faq__popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  --scrollbar-background: #f9fbfc;
  --scrollbar-thumb: #d4d4d4;

  .popup__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(160, 160, 160, 0.59);
    z-index: 8;
  }

  .popup__modal {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 1605px;
    height: auto;
    max-height: calc(100% - 142px);
    border-radius: 50px;
    z-index: 9;
    margin: 71px 0;

    .close {
      position: absolute;
      top: 53px;
      right: 53px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
      width: 45px;
      height: 45px;
    }

    .modal__photo {
      width: 100%;
      height: 945px;
    }

    .modal__title {
      position: absolute;
      bottom: 0;
      color: #FFF;
      font-family: Accademico;
      font-size: 100px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: center;
      bottom: 20px;
    }
    
    .modal__accordion {
      padding: 87px;
      background: #fff;
    }
  }
}

.faq__popup::-webkit-scrollbar {
  width: 8px;
  background-color: var(--scrollbar-background);
}

.faq__popup::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: 4px;
}

.faq__popup::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb);
}
</style>