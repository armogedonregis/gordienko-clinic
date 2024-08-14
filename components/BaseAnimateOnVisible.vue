<template>
  <div ref="element" :class="{ 'animate': isVisible }">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const element = ref(null)
const isVisible = ref(false)
const inTransitionZone = ref(false)
let observer = null
function handleIntersect(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.5) {
      isVisible.value = true
      inTransitionZone.value = false
    } else if (entry.intersectionRatio > 0.1) {
      inTransitionZone.value = true
    } else {
      isVisible.value = false
      inTransitionZone.value = false
    }
  })
}

onMounted(() => {
  observer = new IntersectionObserver(handleIntersect, {
    root: null,
    threshold: [0, 0.1, 0.5],
    rootMargin: '-100px 0px'
  })
  if (element.value) {
    observer.observe(element.value)
  }
})
onUnmounted(() => {
  if (observer && element.value) {
    observer.unobserve(element.value)
  }
})
</script>

<style scoped>
div {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>