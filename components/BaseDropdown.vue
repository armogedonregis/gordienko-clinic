<template>
  <div class="text-center">
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props">меню</v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in home.home"
          :key="index"
        >
          <v-list-item-title>
            <NuxtLink :to="item.href" class="dropdown__link">{{ item.title }}</NuxtLink>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import home from '/server/home.json';

const location = ref('end');
</script>

<style scoped>
.bg-primary {
  background: none !important;
}

.v-btn--variant-elevated {
  box-shadow: none;
}

.v-btn {
  margin: 0;
  padding: 0;
}

.dropdown__link {
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 95%;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  color: #FFF;
}

::v-deep .v-overlay__content {
  max-width: 100% !important;
  max-height: 100% !important;
  width: 100%;
  height: 100%;
  top: 0 !important;
  left: 0 !important;
  backdrop-filter: blur(10px);
}

.v-list-item-title {
  display: flex;
  justify-content: center;
}

.v-menu > .v-overlay__content > .v-card, .v-menu > .v-overlay__content > .v-sheet, .v-menu > .v-overlay__content > .v-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: none;
  gap: 80px;
}

@media (max-width: 500px) {
  .dropdown__link {font-size: 14px}
  .v-menu > .v-overlay__content > .v-card, .v-menu > .v-overlay__content > .v-sheet, .v-menu > .v-overlay__content > .v-list {
    gap: 35px;
  }
}
</style>