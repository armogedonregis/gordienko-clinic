<template>
  <div>
    <v-expansion-panels style="width: 100%;" v-model="openPanel">
      <v-expansion-panel
        v-for="(item, index) in questionPagesData"
        :key="index"
        :value="index"
      >
        <v-expansion-panel-title>
          {{ item.question || Object.keys(item)[0] }}
          <template v-slot:actions>
            <img v-if="openPanel !== index" src="/public/assets/icons/plus.svg" class="plus">
            <img v-if="openPanel === index" src="/public/assets/icons/cross-thin.svg" class="cross">
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div v-if="item.answer !== 'textarea'">
            {{ item.answer }}
          </div>
          <div v-else>
            <textarea
              v-model="userQuestion"
              placeholder="Введите ваш вопрос здесь..."
              rows="4"
              cols="50"
              class="question__place"
            ></textarea>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '/store/index.js';

const questionPagesData = computed(() => store.state.questionPagesData)

const openPanel = ref(null)
const userQuestion = ref('')

onMounted(async() => {
  await store.dispatch('fetchQuestionPagesData')
})
</script>

<style lang="scss" scoped>
* {
  font-family: Accademico !important;
}

::v-deep .v-expansion-panel-title {
  color: #000;
  font-size: 20px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.24px;
  text-transform: uppercase;
}

::v-deep .v-expansion-panel-text {
  color: #000;
  font-size: 19px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

::v-deep .v-expansion-panel {
  border-radius: 0 !important;
  &::before,
  &::after {
    content: none !important;
  }
}

::v-deep .v-expansion-panel__shadow {
  box-shadow: none !important;
}

::v-deep .v-expansion-panel-text__wrapper {
  font-family: Accademico !important;
}

::v-deep .v-expansion-panel-title__overlay {
  display: none !important;
}

.plus, .cross {margin-left: 20px;}

.question__place {
  width: 100%; 
  padding: 10px;
  border-radius: 5px; 
  border: 1px solid #ccc;
  resize: none;
  outline: none;
}

@media (max-width: 1350px) {
  ::v-deep .v-expansion-panel-title {
    font-size: 15px !important;
    padding: 0;
  }

  ::v-deep .v-expansion-panel-text {
    font-size: 12px !important;
  }

  ::v-deep .v-expansion-panel-text__wrapper {
    padding: 0 !important;
    padding-right: 50px !important;
  }

  .plus, .cross {width: 30px; height: 30px;}
}

@media (max-width: 850px) {
  ::v-deep .v-expansion-panel-title {
    font-size: 10px !important;
  }

  .plus, .cross {width: 24px; height: 24px;}
}
</style>