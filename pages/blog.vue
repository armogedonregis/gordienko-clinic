<template>
  <div class="blog">
    <div class="blog__titles">
      <div class="titles__text">
        <div class="text-wrapper">
          <h1 class="text__title" id="0" v-html="animatedTitles[0].value"></h1>
          <p class="text__sign hidden">— Олег Викторович Гордиенко, <br> пластический хирург</p>
        </div>
      </div>
      <div class="titles__photo-wrapper">
        <img src="/assets/images/photo-blog-grey.png" class="titles__photo">
      </div>
    </div>
    <div class="blog__description">
      <h1 class="description__title">Блог</h1>
      <div class="description__table">
        <div class="table__titles">
          <p class="titles__title link__date">ДАТА</p>
          <p class="titles__title link__author">АВТОР</p>
          <p class="titles__title link__article">ТЕМА</p>
        </div>
        <NuxtLink :to="`/article/${article.id}`" class="table__link" v-for="article in articles.articles.slice(0, 9)">
          <p class="link link__date">{{ article.date }}</p>
          <p class="link link__author">{{ article.author }}</p>
          <p class="link link__article">{{ article.article }}</p>
        </NuxtLink>
      </div>
    </div>
    <div class="blog__titles last-titles">
      <div class="titles__text last-titles-section">
        <p class="text__description">Омолаживающая операция – это таинственное и даже магическое событие, которое проходит за закрытыми дверями операционной. Я c удовольствием приоткрою для вас эти двери и приглашу в удивительное путешествие.</p>
        <NuxtLink to="/article/9" class="text__more-btn">ЧИТАТЬ ПОЛНУЮ СТАТЬЮ</NuxtLink>
      </div>
      <div class="titles__photo-wrapper">
        <img src="/assets/images/blogpage1.png" class="titles__photo">
      </div>
    </div>
    <div class="blog__description">
      <div class="description__table">
        <NuxtLink :to="`/article/${article.id}`" class="table__link" v-for="article in articles.articles.slice(9)">
          <p class="link link__date">{{ article.date }}</p>
          <p class="link link__author">{{ article.author }}</p>
          <p class="link link__article">{{ article.article }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import articles from '/server/articles.json';

const titles = [
  '«В данном разделе вы найдете мои полные статьи и новости об омолаживающей хиругии»'
]
const animatedTitles = titles.map(() => ref(''))
const currentCharIndices = titles.map(() => ref(0))
const intervals = []
const hasAnimated = ref(false)

function typeTitle(index) {
  if (currentCharIndices[index].value < titles[index].length) {
    const char = titles[index][currentCharIndices[index].value]
    if (char === '<') {
      const closeTagIndex = titles[index].indexOf('>', currentCharIndices[index].value)
      animatedTitles[index].value += titles[index].slice(currentCharIndices[index].value, closeTagIndex + 1)
      currentCharIndices[index].value = closeTagIndex + 1
    } else {
      animatedTitles[index].value += char
      currentCharIndices[index].value++
    }
  } else {
    stopTypingAnimation(index)
    document.querySelector('.text__sign').classList.add('visible')
  }
}
function startTypingAnimation(index) {
  if (!intervals[index] && !hasAnimated.value) {
    intervals[index] = setInterval(() => typeTitle(index), 50)
    hasAnimated.value = true
  }
}
function stopTypingAnimation(index) {
  clearInterval(intervals[index])
  intervals[index] = null
}

onMounted(() => {
  startTypingAnimation(0)
})
onUnmounted(() => {
  intervals.forEach(interval => clearInterval(interval))
})
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 97px;

  .blog__titles {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    &.last-titles {
      align-items: flex-start;
      
      @media (max-width: 1700px) {
        padding-left: 50px;
      }

      @media (max-width: 1050px) {
        justify-content: space-between;
      }

      @media (max-width: 700px) {
        padding-left: 0;
      }
    }

    .titles__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 50px;

      @media (max-width: 700px) {
        align-items: center;
        order: 2;
        width: 100%;
        padding: 0 40px;
      }

      &.last-titles-section {
        padding-left: 97px;

        @media (max-width: 1350px) {
          padding-left: 20px;
        }

        @media (max-width: 1050px) {
          width: 100%;
        }

        @media (max-width: 700px) {
          align-items: center;
          width: 100%;
          padding: 40px;
        }
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
        height: 94px;

        @media (max-width: 1350px) {
          font-size: 20px;
          width: auto;
          height: auto;
          min-height: 130px;
        }

        @media (max-width: 1050px) {
          font-size: 16px;
          min-height: 100px;
        }

        @media (max-width: 700px) {
          order: 2;
          width: 100%;
          font-size: 25px;
          height: auto;
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
        margin-left: auto;

        @media (max-width: 1050px) {
          font-size: 8px;
        }

        @media (max-width: 700px) {
          margin-left: auto;
          order: 3;
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

      .text__description {
        color: #393939;
        font-family: Accademico;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        max-width: 600px;
        margin-right: auto;
        padding-right: 40px;

        @media (max-width: 1350px) {
          font-size: 14px;
          max-width: 400px;
        }

        @media (max-width: 1050px) {
          font-size: 14px;
          max-width: 300px;
          padding-right: 0;
        }

        @media (max-width: 700px) {
          font-size: 30px;
          text-align: center;
          max-width: 100%;
        }
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
        margin-right: auto;

        @media (max-width: 1700px) {
          width: 300px;
        }

        @media (max-width: 700px) {
          width: 260px;
          height: 40px;
          font-size: 12px;
          margin-right: 0;
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

    .titles__photo-wrapper {
      overflow: hidden;
      width: 100%;
    }

    .titles__photo {
      width: 100%;
    }
  }

  .blog__description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap: 93px;

    @media (max-width: 1350px) {
      gap: 70px;
    }

    @media (max-width: 700px) {
      gap: 40px;
    }

    .description__title {
      color: #393939;
      font-family: Accademico;
      font-size: 60px;
      font-style: normal;
      font-weight: 400;
      line-height: 98%;
      margin-left: 144px;
      text-transform: uppercase;

      @media (max-width: 1350px) {
        margin-left: 63px;
        font-size: 45px;
      }

      @media (max-width: 700px) {
        font-size: 26px;
        margin-left: 40px;
      }
    }

    .description__table {
      display: flex;
      flex-direction: column;
      width: 100%;

      .table__titles {
        display: flex;
        align-items: center;

        @media (max-width: 1700px) {
          padding: 10px;
        }

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

          @media (max-width: 1700px) {
            padding-right: 50px;
          }

          @media (max-width: 1050px) {
            padding-right: 30px;
          }
        }
      }

      .table__link {
        display: flex;
        align-items: center;
        height: 85px;
        width: 100%;
        border-bottom: 1px solid rgba(57, 57, 57, 0.60);

        @media (max-width: 1700px) {
          min-height: 85px;
          padding: 10px;
        }

        @media (max-width: 700px) {
          flex-direction: column;
          align-items: flex-start;
          padding: 25px 40px;
          gap: 20px;
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

          @media (max-width: 1700px) {
            padding-right: 50px;
          }
        
          @media (max-width: 1350px) {
            font-size: 12px;
            line-height: 130%;
          }

          @media (max-width: 1050px) {
            padding-right: 30px;
          }

          @media (max-width: 700px) {
            padding: 0;
            width: 100%;
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
      }
      .link__author {
        width: 440px;
      
        @media (max-width: 1700px) {
          width: 300px;
        }

        @media (max-width: 1350px) {
          width: 250px;
        }
      }

      .link__article {
        width: auto;

        @media (max-width: 1700px) {
          width: 1300px;
        }

        @media (max-width: 1350px) {
          width: 500px;
        }
      }
    }
  }
}
</style>