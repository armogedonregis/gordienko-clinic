<template>
  <div class="article">
    <div class="article__titles">
      <div class="titles__text">
        <div class="text-wrapper">
          <h1 class="text__title">{{ displayedTitle }}</h1>
          <p class="text__sign">{{ article.capitalBlock.sign }}</p>
        </div>
      </div>
      <div class="titles__photo-wrapper">
        <img :src="article.capitalBlock.image" class="titles__photo">
      </div>
    </div>
    <div class="article__description">
      <div class="description__table">
        <div class="table__titles">
          <p class="titles__title link__date">ДАТА</p>
          <p class="titles__title link__author">АВТОР</p>
          <p class="titles__title link__article">ТЕМА</p>
        </div>
        <div class="table__link">
          <p class="link link__date">{{ article.date }}</p>
          <p class="link link__author">{{ article.author }}</p>
          <p class="link link__article">{{ article.article }}</p>
        </div>
      </div>
    </div>
    <div class="article__content" v-if="article.articleContent !== null">
      <p class="content__wide" :class="{ 'animate': isVisible }">
        <span class="titular">{{ article.articleContent.articleDescription.fstSpan }}</span>
        <span>{{ article.articleContent.articleDescription.secSpan }}</span>
        {{ article.articleContent.articleDescription.otherText }}
      </p>
      <div class="content__posts" v-for="(posts, index) in article.articleContent.contentBlocks" :key="index">
        <h1 class="posts__title" v-if="posts.title">{{ posts.title }}</h1>
        <div class="posts__tight" :class="{ 'animate': isVisible }" v-for="(point, pointIndex) in posts.points" :key="pointIndex">
          <span v-if="point.subtitle">{{ point.subtitle }}</span>
          <p v-if="point.blockText">{{ point.blockText }}</p>
          <img v-if="point.image" :src="point.image">
        </div>
      </div>
    </div>
    <h1 v-else class="article__warning">Статья ещё не опубликована</h1>
    <NuxtLink to="/blog" class="article__more">полный список статей</NuxtLink>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import articlesData from '/server/articles.json';

const route = useRoute()
const article = computed(() => {
  const articleId = parseInt(route.params.id)
  return articlesData.articles.find(a => a.id === articleId)
})

const displayedTitle = ref('')
let typingInterval = null
let textObserver = null
const startTypingAnimation = () => {
  let index = 0
  const title = article.value.capitalBlock.title
  typingInterval = setInterval(() => {
    if (index < title.length) {
      displayedTitle.value += title[index]
      index++
    } else {
      clearInterval(typingInterval)
      setTimeout(() => {
        displayedTitle.value = ''
        startTypingAnimation()
      }, 5000)
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
    threshold: 0
  }
  textObserver = new IntersectionObserver(handleTextIntersect, textOptions)

  const blockElements = document.querySelectorAll('.posts__tight')
  blockElements.forEach(el => {
    textObserver.observe(el)
  })
  const textElements = document.querySelectorAll('.content__wide')
  textElements.forEach(el => {
    textObserver.observe(el)
  })
})
onUnmounted(() => {
  clearInterval(typingInterval)
  if (textObserver) {
    textObserver.disconnect()
  }
})
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 200px;

  @media (max-width: 1350px) {
    gap: 127px;
  }

  .article__titles {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    &.last-titles {
      align-items: flex-start;
    }

    .titles__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 50px;

      @media (max-width: 1050px) {
        max-width: 100%;
      }

      @media (max-width: 700px) {
        order: 2;
        width: 100%;
        font-size: 25px;
        height: auto;
        max-width: 100%;
        padding: 0 20px;
        order: 1;
        gap: 45px;
      }

      .text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        width: 483px;

        @media (max-width: 1350px) {
          gap: 0;
        }

        @media (max-width: 1050px) {
          width: 300px;
        }

        @media (max-width: 700px) {
          width: 100%;
          gap: 50px;
          margin-top: 46px;
        }
      }

      .text__title {
        color: #5493D1;
        text-align: center;
        font-family: Accademico;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        text-transform: uppercase;
        width: 471px;
        white-space: pre-wrap;
        height: 125px;

        @media (max-width: 1350px) {
          font-size: 20px;
          min-height: 110px;
          white-space: normal;
          width: 100%;
          height: auto;
        }

        @media (max-width: 1050px) {
          font-size: 16px;
          min-height: 100px;
        }

        @media (max-width: 700px) {
          order: 2;
          font-size: 30px;
        }
      }

      .text__sign {
        color: #5493D1;
        text-align: right;
        font-family: Accademico;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        white-space: pre-wrap;
        margin-left: auto;

        @media (max-width: 1050px) {
          font-size: 12px;
        }

        @media (max-width: 700px) {
          margin-left: auto;
          order: 3;
        }
      }

      .text__description {
        color: #393939;
        font-family: Accademico;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }

      .text__more-btn {
        cursor: pointer;
        display: flex;
        width: 340px;
        height: 50px;
        justify-content: center;
        align-items: center;
        border: 1px solid #5493D1;
        background: #FFF;
        color: #5493D1;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 95%;
        text-transform: uppercase;
      }
    }

    .titles__photo-wrapper {
      overflow: hidden;
      width: 100%;
    }

    .titles__photo {
      width: 100%;

      &.last-titles-photo {

        @media (max-width: 1050px) {
          width: 45vw;
        }

        @media (max-width: 700px) {
          width: 100%;
        }
      }
    }
  }

  .article__description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap: 93px;

    .description__title {
      color: #393939;
      font-family: Accademico;
      font-size: 60px;
      font-style: normal;
      font-weight: 400;
      line-height: 98%;
      margin-left: 144px;
    }

    .description__table {
      display: flex;
      flex-direction: column;
      width: 100%;

      .table__titles {
        display: flex;
        align-items: center;

        @media (max-width: 700px) {
          display: none;
        }

        .titles__title {
          color: #5493D1;
          font-size: 10px;
          font-style: normal;
          font-weight: 500;
          line-height: 98%;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      }

      .table__link {
        display: flex;
        align-items: center;
        height: 85px;
        width: 100%;
        border-bottom: 1px solid rgba(57, 57, 57, 0.60);

        @media (max-width: 700px) {
          flex-direction: column;
          align-items: flex-start;
          padding: 25px 20px;
          gap: 30px;
          height: auto;
        }

        &:last-child {
          border-bottom: none;
        }

        .link {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: #393939;
          font-family: Accademico;
          font-size: 19px;
          font-style: normal;
          font-weight: 400;
          line-height: 98%;
          text-align: left;

          @media (max-width: 950px) {
            font-size: 12px;
          }

          @media (max-width: 700px) {
            font-size: 18px;
          }

          @media (max-width: 500px) {
            font-size: 14px;
          }
        }
      }

      .link__date {
        padding-left: 144px; 
        width: 310px;

        @media (max-width: 1350px) {
          padding-left: 63px;
          width: 170px;
        }

        @media (max-width: 700px) {
          padding: 0;
          color: #898585 !important;
        }
      }
      .link__author {
        width: 440px;

        @media (max-width: 1350px) {
          width: 350px;
        }

        @media (max-width: 700px) {
          width: auto;
        }
      }

      .link__article {
        width: auto;

        @media (max-width: 1350px) {
          width: 500px;
        }

        @media (max-width: 700px) {
          color: #898585 !important;
          width: auto;
        }
      }
    }
  }

  .article__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 200px;

    @media (max-width: 1350px) {
      width: 100%;
      padding: 0 63px;
      gap: 127px;
    }

    @media (max-width: 700px) {
      padding: 0 20px;
    }

    .content__wide {
      color: #393939;
      font-family: Accademico;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      float: right;
      width: 1171px;
      text-align: justify;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;

      @media (max-width: 1350px) {
        width: 100%;
        font-size: 24px;
      }

      @media (max-width: 700px) {
        font-size: 18px;
      }

      .titular {
        font-family: Accademico;
        font-size: 90px;
        font-style: normal;
        font-weight: 400;
        line-height: 90%;
        float: left;
        margin-right: 5px;

        @media (max-width: 1350px) {
          font-size: 100px;
        }

        @media (max-width: 700px) {
          font-size: 50px;
        }
      }

      span {color: #5493D1; font-family: Accademico;}

      &.animate {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .content__posts {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 200px;

      @media (max-width: 1350px) {
        gap: 127px;
      }

      .posts__title {
        color: #5493D1;
        text-align: center;
        font-family: Accademico;
        font-size: 60px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        text-transform: uppercase;
        width: 1265px;
        white-space: pre-wrap;

        @media (max-width: 1350px) {
          width: 100%;
          white-space: normal;
          font-size: 40px;
        }

        @media (max-width: 700px) {
          font-size: 30px;
          white-space: normal;
        }
      }

      .posts__tight {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 756px;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;

        @media (max-width: 900px) {
          width: 660px;
        }

        @media (max-width: 800px) {
          width: 100%;
        }

        span {
          color: #5493D1;
          text-align: right;
          font-feature-settings: 'liga' off;
          font-family: Accademico;
          font-size: 26px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
          text-transform: uppercase;

          @media (max-width: 700px) {
            text-align: left;
            font-size: 25px;
          }
        }

        p {
          color: #393939;
          text-align: justify;
          font-family: Accademico;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
          white-space: pre-wrap;

          @media (max-width: 700px) {
            font-size: 20px;
          }
        }

        img {

          @media (max-width: 900px) {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }

        &.animate {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  .article__warning {
    color: #000;
    text-align: center;
    font-family: Accademico;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-transform: uppercase;
  }

  .article__more {
    display: flex;
    width: 340px;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #5493D1;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 95%;
    text-transform: uppercase;
    border: 1px solid #5493D1;

    @media (max-width: 900px) {
      width: 300px;
      height: 40px;
      font-size: 12px;
    }

    @media (hover: hover) {
      &:hover {
        background: #5493D1;
        color: #FFF;
        transition: .8s;
      }
    }
  }
}
</style>