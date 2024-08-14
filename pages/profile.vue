<template>
  <div class="landing" v-if="profilePagesData" :key="profilePagesData.id">
    <section>
      <div class="landing__video-content title-video-block" ref="videoSections">
        <video class="content__video" loop muted playsinline :ref="el => videoRefs[0] = el" :v-lazy-src="profilePagesData.banner_video">
          <source :src="profilePagesData.banner_video" type="video/mp4">
        </video>
      </div>
      <div class="landing__description-content">
        <h1 class="description__title">{{ profilePagesData.banner_author }}</h1>
        <BaseAnimateOnVisible>
          <ul class="description__list list__gap">
            <li v-for="list in profilePagesData.list_text" :key="list">{{ list }}</li>
          </ul>
        </BaseAnimateOnVisible>
        <div class="content-block">
          <div class="content-wrapper">
            <div class="content-wrapper">
              <div class="description__logo">
                <img src="/assets/images/logo1.png">
                <img src="/assets/images/logo2.png">
                <img src="/assets/images/logo3.png">
                <img src="/assets/images/logo4.png">
              </div>
            </div>
            <BaseAnimateText :text="profilePagesData.quote_subtitle"/>
            <BaseAnimateOnVisible>
              <p class="description__text" >{{ profilePagesData.description_subtitle }}</p>          
            </BaseAnimateOnVisible>
          </div>
        </div>
      </div>
      <div class="landing__fullscreen-content">
        <img :src="profilePagesData.subtitle_img" class="fullscreen__image">
      </div>
      <div class="landing__description-content">
        <h1 class="description__title-min">{{ profilePagesData.title }}</h1>
        <BaseAnimateOnVisible>
          <ul class="description__list list-margin">
            <li v-for="list in profilePagesData.list_title" :key="list">{{ list }}</li>
          </ul>
        </BaseAnimateOnVisible>
      </div>
      <div class="landing__video-content" ref="videoSections">
        <video class="content__video" loop muted playsinline :ref="el => videoRefs[1] = el" :v-lazy-src="profilePagesData.post_title_video">
          <source :src="profilePagesData.post_title_video" type="video/mp4">
        </video>
      </div>
      <div class="landing__description-content">
        <div class="content-block">
          <div class="content-wrapper">
            <BaseAnimateOnVisible>
              <p class="description__text">{{ profilePagesData.text_post_title }}</p>
            </BaseAnimateOnVisible>
            <BaseAnimateText :text="profilePagesData.quote_post_title"/>
          </div>
        </div>
      </div>
      <div class="landing__video-content" ref="videoSections">
        <video class="content__video" loop muted playsinline :ref="el => videoRefs[2] = el" :v-lazy-src="profilePagesData.video">
          <source :src="profilePagesData.video" type="video/mp4">
        </video>
      </div>
      <div class="landing__description-content">
        <div class="content-block">
            <div class="content-wrapper">
              <BaseAnimateOnVisible>
                <p class="description__text">{{ profilePagesData.description }}</p>
              </BaseAnimateOnVisible>
              <BaseAnimateText :text="profilePagesData.quote"/>
            </div>
        </div>
      </div>
    </section>
    
    <div v-for="article in articlesBlocksData" :key="article.id">
      <section id="dpf-block" v-if="article.publish">
        <div class="landing__video-content title-video-block" id="deep-plane-faceLift" ref="videoSections">
          <h1 class="content__title" id="first-video-title">{{ article.main_title }}</h1>
          <video class="content__video" loop muted playsinline :ref="el => videoRefs[3] = el" :src="article.main_video">
            <source :src="article.main_video" type="video/mp4">
          </video>
        </div>
        <div class="article__content-wrapper">
          <BaseAnimateOnVisible>
            <div class="content-wrapper content-padding">
              <h2 class="description__title-min">
                {{ article.post_title }}
                <span>{{ article.title }}</span>
              </h2>
              <p class="post__sign">— Олег Викторович Гордиенко, <br> пластический хирург</p>
            </div>
          </BaseAnimateOnVisible>
          <div class="content__dynamic-wrapper" v-for="(block, blockIndex) in article.content" :key="block.id">
            <div class="numbered-wrapper" v-if="block.type === 'ARTICLE'">
              <ul class="description__list-numbered">
                <li class="list__lists">
                  <BaseAnimateOnVisible>
                    <p class="list__num">0{{ blockIndex + 1 }}</p>
                    <h1 class="list__title">{{ block.article_title }}</h1>
                    <h2 class="list__subtitle">{{ block.article_quote }}</h2>
                    <p class="list__info">{{ block.article_description }}</p>
                  </BaseAnimateOnVisible>
                </li>
              </ul>
            </div>
            <div class="landing__fullscreen-content" v-if="block.type === 'TWO_IMG'">
              <div class="fullscreen__photos">
                <img v-for="img in block.media_assets" :key="img.id" :src="img.url" class="fullscreen__image" />
              </div>
            </div>
            <div class="landing__video-content content-margin" ref="videoSections" v-if="block.type === 'VIDEO'">
              <video class="content__video" loop muted playsinline :src="block.media_assets.url">
                <source :src="block.media_assets.url" type="video/mp4">
              </video>
            </div>
            <div class="landing__fullscreen-content" v-if="block.type === 'IMG'">
              <img :src="block.media_assets.url" class="fullscreen__image" />
            </div>
            <div class="fullscreen-wrapper" v-if="block.type === 'MANY_IMG'">
              <div class="grid__photos">
                <div class="photo__item" v-for="photo in block.media_assets" :key="photo.id">
                  <img :src="photo.url" />
                </div>
              </div>
              <div class="padding-for-wrapper">
                <NuxtLink :to="{ path: '/results', query: { view: 'watch' } }" class="show__more-btn black">смотреть все работы</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <p class="page__loading" v-else>Загрузка</p>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import BaseAnimateOnVisible from '/components/BaseAnimateOnVisible';
import BaseAnimateText from '/components/BaseAnimateText';
import store from '/store/index.js';

const profilePagesData = computed(() => store.state.profilePagesData)
const articlesBlocksData = computed(() => store.state.articlesBlocksData)

const videoRefs = ref([])
function handleVisibilityChange(entries) {
  entries.forEach(entry => {
    const video = entry.target
    if (entry.isIntersecting) {
      video.play()
    } else {
      video.pause()
    }
  })
}
const { stop } = useIntersectionObserver(
  videoRefs,
  handleVisibilityChange,
  { threshold: 0.5 }
)

const isPopupOpen = ref(false)
function togglePopup() {
  isPopupOpen.value = !isPopupOpen.value
}
function closePopup() {
  isPopupOpen.value = false
}

function openFaqPopup() {
  store.commit('openFaqPopup')
}

const headerHeight = ref(0)
const activeTitle = ref(null)
let lastScrollTop = 0
const h1Elements = [
  {
    id: 'first-video-title',
    linkId: 'first-post-link',
    parentId: 'dpf-block'
  },
  {
    id: 'second-video-title',
    linkId: 'second-post-link',
    parentId: 'lips-block'
  },
  {
    id: 'third-video-title',
    linkId: 'third-post-link',
    parentId: 'fne-block'
  },
  {
    id: 'fourth-video-title',
    linkId: 'fourth-post-link',
    parentId: 'neck-block'
  },
  {
    id: 'fifth-video-title',
    linkId: 'fifth-post-link',
    parentId: 'eyes-block'
  },
  {
    id: 'sixth-video-title',
    linkId: 'sixth-post-link',
    parentId: 'lipofilling-block'
  }
]
function handleScroll() {
  const headerWrapper = document.querySelector('.header-wrapper')
  headerHeight.value = headerWrapper.offsetHeight
  
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const isScrollingDown = scrollTop > lastScrollTop
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop

  h1Elements.forEach(item => {
    const h1Element = document.getElementById(item.id)
    const linkElement = document.getElementById(item.linkId)
    const parentElement = document.getElementById(item.parentId)

    if (h1Element && linkElement && parentElement) {
      const h1Rect = h1Element.getBoundingClientRect()
      const linkRect = linkElement.getBoundingClientRect()
      const parentRect = parentElement.getBoundingClientRect()

      if (isScrollingDown) {
        if (h1Rect.top <= headerHeight.value + 100 && h1Rect.bottom > headerHeight.value + 100) {
          if (activeTitle.value !== h1Element) {
            activeTitle.value = h1Element
            h1Element.style.position = 'fixed'
            h1Element.style.top = `${headerHeight.value + 100}px`
            h1Element.style.zIndex = 1
          }
        }
      } else {
        if (activeTitle.value === h1Element) {
          activeTitle.value = null
          h1Element.style.position = 'relative'
          h1Element.style.top = '0px'
          h1Element.style.zIndex = 0
        }
      }

      if (linkRect.top <= headerHeight.value + h1Element.offsetHeight) {
        activeTitle.value = null
        h1Element.style.position = 'relative'
        h1Element.style.top = '0px'
        h1Element.style.zIndex = 0
      }

      if (h1Rect.top < parentRect.top || h1Rect.bottom > parentRect.bottom) {
        activeTitle.value = null
        h1Element.style.position = 'relative'
        h1Element.style.top = '0px'
        h1Element.style.zIndex = 0
      }
    }
  })
}

onMounted(async() => {
  window.addEventListener('scroll', handleScroll)
  await store.dispatch('fetchProfilePagesData')
  await store.dispatch('fetchArticlesBlocksData')
})
onUnmounted(() => {
  intervals.forEach(interval => clearInterval(interval))
  stop()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.landing {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  
  .landing__video-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    @media (max-width: 1350px) {
      height: 470px;
      
      &.title-video-block {height: 978px;}
    }

    @media (max-width: 700px) {
      height: 612px;

      &.title-video-block {height: 868px;}
    }

    .content__title {
      color: #FFF;
      text-align: center;
      font-family: Accademico;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      text-transform: uppercase;
      z-index: 2;
      mix-blend-mode: difference;

      @media (max-width: 1350px) {
        font-size: 30px;
      }

      &.mobile {
        display: none;
      
        @media (max-width: 700px) {
          display: flex;
        }
      }
    }

    .content__video {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .content-video__control {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      bottom: 55px;
      width: 100%;
      padding: 0 46px;

      .control__buttons-wrapper {
        display: flex;
        align-items: center;
        gap: 30px;
      }

      .control__btn {
        cursor: pointer;
        background: none;
        border: none;
        width: 25px;
        height: 25px;
      }
    }
  }

  .landing__description-content {
    display: flex;
    flex-direction: column;
    padding: 0 200px;
    margin: 200px 0;
    gap: 20px;

    @media (max-width: 1350px) {
      padding: 150px 100px;
    }

    @media (max-width: 900px) {
      padding: 150px 45px;
    }

    @media (max-width: 700px) {
      padding: 120px 20px;
    }
  }
  .description__title {
    color: #393939;
    font-family: Accademico;
    font-size: 105px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 1.05px;
    text-transform: uppercase;

    @media (max-width: 1350px) {
      font-size: 70px;
      width: 100%;
    }

    @media (max-width: 700px) {
      font-size: 50px;
    }

    @media (max-width: 450px) {
      font-size: 45px;
    }
  }

  .description__title-min {
    color: #393939;
    font-family: Accademico;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.36px;
    text-transform: uppercase;

    @media (max-width: 1350px) {
      font-size: 22px;

      br {
        display: none;
      }
    }

    @media (max-width: 700px) {
      font-size: 20px;
      min-height: 150px;
    }

    span {
      color: #8A8A8A; 
      font-family: Accademico;
    }
  }

  .post__sign {
    color: #000;
    text-align: right;
    font-family: Accademico;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-left: auto;
    margin-top: 30px;

    @media (max-width: 1350px) {
      font-size: 16px;
    }

    @media (max-width: 700px) {
      font-size: 14px;
    }
  }

  .description__list {
    display: flex;
    flex-direction: column;
    margin-top: 105px;
    padding-left: 25px;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;

    li {
      color: #393939;
      font-family: Accademico;
      font-size: 26px;
      font-style: normal;
      font-weight: 300;
      line-height: 150%;

      @media (max-width: 1350px) {
        font-size: 20px;
      }

      @media (max-width: 700px) {
        font-size: 18px;
      }
    }

    &.list-margin {
      margin-top: 0;
    }
  }

  .content-block {
    display: flex;
    justify-content: center;
    width: 100%;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 1400px;
      gap: 150px;
    }
  }

  .description__logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 207px;
    width: 100%;

    @media (max-width: 900px) {
      margin-top: 100px;
    }

    img {
      cursor: pointer;
      width: 130px;
      height: 130px;

      @media (max-width: 1350px) {
        width: 82px;
        height: 82px;
      }

      @media (max-width: 500px) {
        width: 42px;
        height: 42px;
      }

      @media (hover: hover) {
        &:hover {
          transform: scale(1.25);
          transition: .4s;
        }
      }
    }
  }

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

  .description__text {
    color: #393939;
    text-align: justify;
    font-family: Accademico;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;

    @media (max-width: 1350px) {
    font-size: 24px;
    }

    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  .numbered-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 200px;
    margin: 100px 0;
  }

  .description__list-numbered {
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    gap: 100px;

    .list__lists {
      position: relative;
      display: flex;
      flex-direction: column;

      .list__num {
        color: #393939;
        font-family: Accademico;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 0.18px;
        text-transform: uppercase;
        margin-bottom: 10px;
        opacity: 0.6;

        @media (max-width: 700px) {
          font-size: 14px;
        }
      }

      .list__date {
        color: #393939;
        font-family: Accademico;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 98%;
        margin-bottom: 20px;
      }

      .list__title {
        color: #393939;
        font-family: Accademico;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0.36px;
        text-transform: uppercase;
        margin-bottom: 20px;

        @media (max-width: 1350px) {
          font-size: 30px;
        }

        @media (max-width: 700px) {
          font-size: 18px;
          line-height: 130%;
        }
      }

      .list__subtitle {
        color: #5493D1;
        font-family: Accademico;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: 0.26px;
        margin-bottom: 20px;
        display: inline-block;

        @media (max-width: 1350px) {
          font-size: 20px;
        }

        @media (max-width: 700px) {
          font-size: 18px;
        }
      }

      .list__popup {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        background: radial-gradient(436.66% 138.04% at 42.87% 56.06%, rgba(84, 147, 209, 0.80) 2%, #A9C8E8 34%, #FFF 79.5%);
        opacity: 0.85;
        width: 500px;
        border-radius: 30px;
        top: -160px;
        right: 70px;
        gap: 20px;

        @media (max-width: 1350px) {
          top: -170px;
          right: 0;
        }

        @media (max-width: 550px) {
          width: 90%;
          left: 50%;
          top: 0;
          transform: translate(-50%, -80%);
        }

        .popup__info {
          font-size: 16px;
          color: #fff;
        }
      }

      .subtitle__popup-btn {
        cursor: pointer;
        border: none;
        background: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-size: 15px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px 0 0;
        transform: translateY(8px);
      }

      .list__info {
        color: #393939;
        text-align: justify;
        font-family: Accademico;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        opacity: 0.85;

        span, a {
          color: #393939;
          text-align: justify;
          font-family: Accademico;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
          opacity: 0.85;
        }

        @media (max-width: 1350px) {
          font-size: 14px;
        }

        &.lh200 {line-height: 200%;}
      }
    }
  }

  .list__gap {
    gap: 30px;
  }

  .content-padding {
    padding: 200px;
  }

  .content-margin {
    margin: 200px 0;
  }

  .landing__fullscreen-content {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 200px 0;
  }

  .fullscreen-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 150px;
    margin: 200px 0;

    @media (max-width: 1350px) {
      gap: 70px;
    }
  }

  .fullscreen__photos {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    gap: 50px;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    img {
      width: 50%;
      height: auto;

      @media (max-width: 700px) {
        width: 100%;

        &:first-child {padding: 70px; height: auto; object-fit: cover; width: 100%;}
      }
    }
  }

  .grid__photos {
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: 100%;
    overflow: hidden;
    
    @media (max-width: 700px) {
      grid-template-columns: repeat(2, auto);
    }

    .photo__item {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background: #000;
      height: 520px;
      width: 100%;
      border: 1px solid rgba(138, 138, 138, 0.50);
      border-right: none;
      border-top: none;
      overflow: hidden;

      @media (max-width: 1720px) {
        width: 100%;
        height: auto;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  .fullscreen__image {
    width: 100%;
    height: 100%;

    @media (max-width: 700px) {
      width: auto;
      height: 500px;
    }

    @media (max-width: 500px) {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }

  .padding-for-wrapper {
    padding-left: 146px;

    @media (max-width: 1350px) {
      padding-left: 100px;
    }

    @media (max-width: 900px) {
      padding-left: 45px;
    }

    @media (max-width: 700px) {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-left: 0;
    }
  }

  .show__more-btn {
    cursor: pointer;
    display: flex;
    width: 340px;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-family: Grafitello;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 95%;
    text-transform: uppercase;
    background: none;

    @media (max-width: 1350px) {
      width: 300px;
      font-size: 10px;
    }

    @media (max-width: 700px) {
      height: 40px;
      width: 260px;
      font-size: 12px;
    }

    &.black {
      color: #393939;
      border: 0.7px solid #393939;

      @media (hover: hover) {
        &:hover {
          background: #393939;
          color: #fff;
          transition: .8s;
        }
      }
    }

    &.blue {
      color: #5493D1;
      border: 1px solid #5493D1;
      margin-top: 20px;

      @media (hover: hover) {
        &:hover {
          background: #5493D1;
          color: #fff;
          transition: .8s;
        }
      }
    }
  }

  .question__popup-btn {
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
  }
}

.page__loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #393939;
  font-family: Accademico;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  height: 100vh;
  width: 100%;
  background: #fff;
}
</style>