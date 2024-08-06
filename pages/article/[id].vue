<template>
  <div class="article" v-if="blogItemData">
    <div class="article__titles">
      <div class="titles__text">
        <div class="text-wrapper">
          <h1 class="text__title">{{ blogItemData.quote_text }}</h1>
          <p class="text__sign hidden">— Олег Викторович Гордиенко, <br> пластический хирург</p>
        </div>
      </div>
      <div class="titles__photo-wrapper">
        <img :src="blogItemData.section_img" class="titles__photo">
      </div>
    </div>
    <table class="description__table">
      <thead>
        <tr>
          <th class="table__titles table__data">ДАТА</th>
          <th class="table__titles table__author">АВТОР</th>
          <th class="table__titles table__theme">ТЕМА</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="table__items table__data">{{ formatDate(blogItemData.date) }}</td>
          <td class="table__items table__author">Олег Викторович Гордиенко</td>
          <td class="table__items table__theme">{{ blogItemData.title }}</td>
        </tr>
      </tbody>
    </table>
    <div class="article__content">
      <div v-for="(posts, index) in blogItemData.content" :key="index">
        <p class="content__wide" v-if="posts.type === 'TITLE'">
          <span class="titular" v-if="posts.titular">{{ posts.titular }}</span>
          <span>{{ posts.pre_text_title }}</span>
          {{ posts.description }}
        </p>
        <h1 class="posts__title" v-else-if="posts.type === 'QUOTE'">{{ posts.quote }}</h1>
        <img v-else-if="posts.type === 'IMAGE'" v-if="posts.img" :src="posts.img">
        <div class="content__posts" v-else-if="posts.type === 'TEXT'">
          <div class="posts__tight">
            <span v-if="posts.title">{{ posts.title }}</span>
            <p v-if="posts.text">{{ posts.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink to="/blog" class="article__more">полный список статей</NuxtLink>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '/store/index.js';

const route = useRoute()
const blogItemData = computed(() => store.state.blogItemData)
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

onMounted(async() => {
  await store.dispatch('fetchBlogItemData', route.params.id)
  console.log(blogItemData.value.content)
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
  background: #FFF;

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

      .posts__tight {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 756px;

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
</style>