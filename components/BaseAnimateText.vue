<template>
  <div ref="textContainer">
    <h1 ref="textSpan" class="description__subtitle"></h1>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const textContainer = ref(null)
const textSpan = ref(null)
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const textVisible = ref(false)
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      textVisible.value = true
      observer.disconnect()
    }
  },
  { threshold: 0.1 }
)

onMounted(() => {
  if (textContainer.value) {
    observer.observe(textContainer.value)
  }
})

function typeText(text) {
  let index = 0
  const interval = setInterval(() => {
    if (index < text.length) {
      textSpan.value.innerText += text[index]
      index++
    } else {
      clearInterval(interval)
    }
  }, 50)
}

watch(textVisible, (isVisible) => {
  if (isVisible) {
    typeText(props.text)
  }
})
</script>

<style lang="scss" scoped>
.description__subtitle {
  color: #5493D1;
  text-align: center;
  font-family: Accademico;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-transform: uppercase;
  width: 1000px;
  height: 150px;
  white-space: pre-wrap;

  @media (max-width: 1350px) {
    font-size: 35px;
    width: 100%;
  }

  @media (max-width: 1050px) {
    height: auto;
  }

  @media (max-width: 700px) {
    font-size: 30px;
  }
}
</style>