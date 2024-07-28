<template>
  <div class="case">
    <div class="case__swiper">
      <nav class="swiper__nav" v-if="caseItem.images.length > 0">
        <button class="nav__link" @mouseenter="hoverPrev = true" @mouseleave="hoverPrev = false" @click="switchPrevStory" :style="{ opacity: hoverNext ? 0.5 : 1 }">Предыдущая история</button>
        <button class="nav__link" @mouseenter="hoverNext = true" @mouseleave="hoverNext = false" @click="switchNextStory" :style="{ opacity: hoverPrev ? 0.5 : 1 }">Следующая история</button>
      </nav>
      <transition name="fade" mode="out-in">
        <div class="swiper__item-wrapper" v-if="caseItem.images.length > 0" :key="activeImages.join('-')">
          <div class="swiper__item" v-for="(photo, index) in activeImages" :key="index">
            <img :src="photo" class="item__photo">
          </div>
        </div>
      </transition>
    </div>
    <div class="case__photos-wrapper" v-if="caseItem.images.length > 0">
      <div class="case__photos">
        <div class="photos__item" v-for="(photo, index) in photos" :key="index" @click="handlePhotoClick(index + 2)">
          <img :src="photo">
        </div>
      </div>
    </div>
    <div class="case__text">
      <h1 class="text__title">{{ displayedTitle }}</h1>
      <p class="text__sign hidden">— Олег Викторович Гордиенко, <br> пластический хирург</p>
      <div class="text__story-wrapper" :class="{ 'animate': isVisible }">
        <p class="text__name">{{ caseItem.name }}</p>
        <p class="text__story">{{ caseItem.story }}</p>
      </div>
      <NuxtLink to="/results" class="text__stories">Все истории</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import casesData from '/server/cases.json'

const hoverPrev = ref(false)
const hoverNext = ref(false)

const route = useRoute()
const router = useRouter()
const caseId = parseInt(route.params.id)
const caseItem = computed(() => {
  return casesData.cases.find(a => a.id === caseId)
})

function switchPrevStory() {
  const casesLength = casesData.cases.length
  const newId = caseId - 1 < 1 ? casesLength : caseId - 1
  router.push(`/case/${newId}`)
}
function switchNextStory() {
  const casesLength = casesData.cases.length
  const newId = caseId + 1 > casesLength ? 1 : caseId + 1
  router.push(`/case/${newId}`)
}

const activeImages = ref(caseItem.value?.imagesHead?.slice(0, 2) || [])
const photos = ref(caseItem.value?.imagesHead?.slice(2, 12) || [])
function handlePhotoClick(index) {
  let startIndex = index - (index % 2)
  let endIndex = startIndex + 2
  if (startIndex < 2) {
    startIndex = 2
    endIndex = startIndex + 2
  } else if (endIndex > caseItem.value.imagesHead.length) {
    endIndex = caseItem.value.imagesHead.length
    startIndex = endIndex - 2
  }
  const newImages = caseItem.value.imagesHead.slice(startIndex, endIndex)
  activeImages.value = newImages
}

const displayedTitle = ref('')
let typingInterval = null
let textObserver = null
const startTypingAnimation = () => {
  let index = 0
  const title = caseItem.value.title
  typingInterval = setInterval(() => {
    if (index < title.length) {
      displayedTitle.value += title[index]
      index++
    } else {
      clearInterval(typingInterval)
      setTimeout(() => {
        document.querySelector(".text__sign").classList.remove("hidden")
        document.querySelector(".text__sign").classList.add("visible")
      }, 300)
    }
  }, 50)
}
const handleTextIntersect = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
    } else {
      entry.target.classList.remove('animate')
    }
  })
}

onMounted(() => {
  startTypingAnimation()
  const textOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }
  textObserver = new IntersectionObserver(handleTextIntersect, textOptions)

  const textElements = document.querySelectorAll('.text__story-wrapper')
  textElements.forEach(el => {
    textObserver.observe(el)
  })
})
onUnmounted(() => {
  clearInterval(typingInterval)
})
</script>

<style lang="scss" scoped>
.case {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #000;

  .case__swiper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 850px;
    overflow: hidden;

    @media (max-width: 1720px) {
      height: auto;
    }

    .swiper__nav {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 50%;

      .nav__link {
        color: #FFF;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 95%;
        letter-spacing: 2px;
        text-transform: uppercase;
        transform: rotate(-90deg);
        margin-left: -40px;

        @media (max-width: 1050px) {
          font-size: 6px;
        }

        @media (max-width: 700px) {
          font-size: 16px;
          margin-left: -80px;
        }

        &:last-child {
          margin-right: -35px;

          @media (max-width: 1050px) {
            font-size: 6px;
          }

          @media (max-width: 700px) {
            font-size: 16px;
            margin-right: -75px;
          }
        }
      }
    }

    .swiper__item-wrapper {
      display: flex;
      width: 100%;
      height: 100%;

      @media (max-width: 700px) {
        flex-direction: column;
      }

      .swiper__item {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 100%;
        height: 100%;
        max-height: 850px;
        overflow: hidden;
        border: 1px solid rgba(138, 138, 138, 0.50);
        border-right: none;
        border-top: none;

        @media (max-width: 700px) {
          width: 100%;
          height: 100%;
        }

        .item__photo {
          width: 90%;
          height: auto;
          object-fit: cover;

          @media (max-width: 1720px) {
            max-width: 100%;
          }
        }
      }
    }
  }

  .case__photos-wrapper {
    display: flex;
    width: 100%;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    .case__photos {
      display: flex;
      width: 100%;
      height: 100%;
      max-height: 250px;
      background: #000;

      @media (max-width: 1720px) {
        height: auto;
      }

      @media (max-width: 700px) {
        display: grid;
        grid-template-columns: repeat(2, auto);
        max-height: 100%;
      }

      .photos__item {
        cursor: pointer;
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(138, 138, 138, 0.50);
        border-right: none;
        border-top: none;
        overflow: hidden;

        @media (max-width: 700px) {
          height: auto;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          
          @media (max-width: 1500px) {
            height: auto;
          }
        }
      }
    }
  }
  
  .case__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1146px;
    padding: 150px 0 245px;

    @media (max-width: 1500px) {
      padding: 76px 0;
    }

    @media (max-width: 1150px) {
      width: 660px;
    }

    @media (max-width: 700px) {
      width: 100%;
      padding: 70px 25px 0;
    }

    .text__title {
      color: #FFF;
      text-align: center;
      font-family: Accademico;
      font-size: 55px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      text-transform: uppercase;
      min-height: 215px;

      @media (max-width: 900px) {
        font-size: 40px;
      }

      @media (max-width: 700px) {
        font-size: 27px;
        min-height: 110px;
      }
    }

    .text__sign {
      color: #FFF;
      text-align: right;
      font-family: Accademico;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      margin-top: 80px;
      margin-left: auto;
      margin-right: 180px;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;

      @media (max-width: 1150px) {
        margin-right: 0;
      }

      @media (max-width: 700px) {
        font-size: 12px;
        margin-top: 40px;
      }

      &.text__sign.hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }

      &.text__sign.visible {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .text__story-wrapper {
      display: flex; 
      flex-direction: column;
      align-items: center; 
      width: 785px;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

      @media (max-width: 900px) {
        width: 500px;
      }

      @media (max-width: 700px) {
        width: 100%;
      }

      .text__name {
        color: #FFF;
        font-family: Accademico;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 95%;
        text-transform: uppercase;
        margin-top: 74px;
        margin-right: auto;

        @media (max-width: 700px) {
          font-size: 25px;
        }
      }

      .text__story {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        margin-top: 28px;
        text-align: justify;
        width: 100%;
        white-space: pre-line;
      }

      &.animate {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .text__stories {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 340px;
      height: 50px;
      border: 1px solid #FFF;
      color: #FFF;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 95%;
      text-transform: uppercase;
      margin-top: 80px;

      @media (max-width: 900px) {
        width: 300px;
        font-size: 10px;
        height: 40px;
      }

      @media (hover: hover) {
        &:hover {
          background: #fff;
          color: #000;
          transition: .8s;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>