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
    <div class="blog__description" v-if="blogPagesData">
      <h1 class="description__title">Блог</h1>
      <table class="description__table">
        <thead>
          <tr>
            <th class="table__titles table__data">ДАТА</th>
            <th class="table__titles table__author">АВТОР</th>
            <th class="table__titles table__theme">ТЕМА</th>
          </tr>
        </thead>
        <tbody v-for="post in blogPagesData" :key="post.id" @click="togglePost(post.id)">
          <tr>
            <td class="table__items table__data">{{ formatDate(post.date) }}</td>
            <td class="table__items table__author">Олег Викторович Гордиенко</td>
            <td class="table__items table__theme">{{ post.title }}</td>
          </tr>
          <td colspan="3">
            <div class="accordion-content" :class="{'open': isPostOpen[post.id]}">
              <div v-if="post.section_title" class="blog__titles last-titles">
                <div class="titles__text last-titles-section">
                  <p class="text__description">{{ post.section_title }}</p>
                  <NuxtLink :to="`/article/${post.short_link}`" class="text__more-btn">ЧИТАТЬ ПОЛНУЮ СТАТЬЮ</NuxtLink>
                </div>
                <div class="titles__photo-wrapper">
                  <img :src="post.section_img" class="titles__photo">
                </div>
              </div>
              <p class="text__description margin-block" v-else>Статья еще не опубликована</p>
            </div>
          </td>
        </tbody>
      </table>
    </div>
    <p class="page__loading" v-else>Загрузка</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import store from '/store/index.js';

const blogPagesData = computed(() => store.state.blogPagesData)
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

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

const isPostOpen = ref({})
function togglePost(articleId) {
  isPostOpen.value = {
    ...isPostOpen.value,
    [articleId]: !isPostOpen.value[articleId]
  }
}

onMounted(async() => {
  startTypingAnimation(0)
  await store.dispatch('fetchBlogPagesData')
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
  background: #FFF;

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
      margin: 0 0 30px;
      
      @media (max-width: 1600px) {
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

        @media (max-width: 1600px) {
          padding-left: 0;
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

        @media (max-width: 1600px) {
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

    &.margin-block {
      margin: 100px;
    
      @media (max-width: 1700px) {
        margin: 50px 150px;
      }

      @media (max-width: 1350px) {
        margin: 50px 70px;
      }
    }

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

      @media (max-width: 1600px) {
        margin-left: 50px;
        font-size: 45px;
      }

      @media (max-width: 700px) {
        font-size: 26px;
        margin-left: 40px;
      }
    }

    .description__table {
      width: 100%;
      border-collapse: collapse;

      thead {
        @media (max-width: 700px) {
          display: none;
        }

        tr {

          th {
            text-align: left; 
            color: #5493D1;
            font-family: Grafitello;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: 98%;
            text-transform: uppercase;
            padding: 25px 0;

            @media (max-width: 1350px) {
              font-size: 10px;
            }
          }
        }
      }

      tbody {
        cursor: pointer;
        border-bottom: 1px solid rgba(57, 57, 57, 0.60);

        @media (max-width: 700px) {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 25px 0;
        }

        &:last-child {border-bottom: none;}

        tr {

          @media (max-width: 700px) {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 25px 0;
          }

          td {
            color: #393939;
            font-family: Accademico;
            font-size: 19px;
            font-style: normal;
            font-weight: 400;
            line-height: 98%;
            padding: 30px 0;

            @media (max-width: 1350px) {
              font-size: 12px;
            }

            @media (max-width: 700px) {
              padding: 0;
              font-size: 14px;
            }
          }
        }
      }

      .table__data {
        padding-left: 144px; width: 17%;
        
        @media (max-width: 1600px) {
          width: 20%;
          padding-left: 50px;
        }

        @media (max-width: 700px) {
          padding-left: 40px;
          width: 100%;
        }
      }
      .table__author {
        width: 25%;

        @media (max-width: 1600px) {
          width: 30%;
        }

        @media (max-width: 700px) {
          padding-left: 40px;
          width: 100%;
        }
      }
      .table__theme {
        padding-right: 57px; width: 58%;
      
        @media (max-width: 1600px) {
          width: 55%;
        }

        @media (max-width: 700px) {
          padding-left: 40px;
          width: 100%;
        }
      }
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
}

.accordion-content {
  width: 100%;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.5s ease, opacity 0.5s ease;

  &.open {
    width: 100%;
    max-height: 2000px;
    opacity: 1;
  }
}
</style>