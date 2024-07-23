<template>
  <div class="faq__popup">
    <div class="popup__modal">
      <div class="modal__title-wrapper">
        <button class="close" @click="closeFaqPopup">
          <img src="/public/assets/icons/cross.svg">
        </button>
        <div class="modal__photo-wrapper">
          <img src="/public/assets/images/faqpopup.png" class="modal__photo">
          <h1 class="modal__title">вопросы и ответы</h1>
        </div>
      </div>
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

  .popup__modal {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 90%;
    height: auto;
    max-height: calc(100% - 142px);
    border-radius: 50px;
    z-index: 9;
    margin: 71px 0;
    max-width: 1605px;

    .modal__title-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      height: 945px;

      @media (max-width: 1100px) {
        height: auto;
      }

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

        @media (max-width: 1350px) {
          top: 15px;
          right: 15px;

          img {
            width: 40px;
            height: 40px
          }
        }
      }

      .modal__photo-wrapper {
        display: flex;
        justify-content: center;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px; 
        overflow: hidden;

        .modal__photo {
          width: 100%;
          height: 100%;

          @media (max-width: 850px) {
            height: 500px;
            overflow: hidden;
            object-fit: cover;
          }

          @media (max-width: 500px) {
            height: 350px;
          }
        }

        .modal__title {
          position: absolute;
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
          z-index: 999;

          @media (max-width: 1350px) {
            font-size: 60px;
          }

          @media (max-width: 850px) {
            font-size: 28px;
          }

          @media (max-width: 500px) {
            font-size: 25px;
          }
        }
      }
    }
    
    .modal__accordion {
      padding: 87px;
      background: #fff;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;

      @media (max-width: 1350px) {
        padding: 36px;
      }

      @media (max-width: 850px) {
        padding: 16px;
      }
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