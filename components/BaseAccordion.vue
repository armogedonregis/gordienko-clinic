<template>
  <div>
    <v-expansion-panels style="width: 100%;" v-model="openPanel">
      <v-expansion-panel
        v-for="(item, index) in faq.faq"
        :key="index"
        :value="index"
      >
        <v-expansion-panel-title>
          {{ item.question }}
          <template v-slot:actions>
            <img v-if="openPanel !== index" src="/public/assets/icons/plus.svg" class="plus">
            <img v-if="openPanel === index" src="/public/assets/icons/cross-thin.svg" class="cross">
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          {{ item.answer }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import faq from '/server/faq.json';

const openPanel = ref(null)
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