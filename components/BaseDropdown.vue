<template>
  <div class="text-center">
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props">меню</v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in filteredHeaderLinks"
          :key="index"
        >
          <v-list-item-title>
            <NuxtLink :to="item.path" class="dropdown__link">{{ item.title }}</NuxtLink>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import headerData from '/server/header.json';

const location = ref('end');

const filteredHeaderLinks = computed(() => {
  return headerData.links.filter(item => item.title !== null)
})
</script>

<style scoped>
.bg-primary {
  background: none !important;
}

.v-btn--variant-elevated {
  box-shadow: none;
}

.dropdown__link {
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 95%;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  color: #393939;
}
</style>