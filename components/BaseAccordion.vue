<template>
  <div>
    <v-expansion-panels variant="accordion" style="width: 100%;">
      <v-expansion-panel
        v-for="item in faq.faq"
        :key="item"
        :text="item.answer"
        :title="item.question"
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import faq from '/server/faq.json';
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

::v-deep.v-expansion-panel-title__overlay {
  display: none !important;
}
</style>
