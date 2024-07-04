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