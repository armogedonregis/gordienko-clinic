<template>
  <div class="blog">
    <div class="blog__titles">
      <div class="titles__text">
        <h1 class="text__title">«В данном разделе вы найдете <br> мои полные статьи и новости об <br> омолаживающей хиругии»</h1>
        <p class="text__sign">— Олег Викторович Гордиенко, <br> пластический хирург</p>
      </div>
      <img src="/static/assets/images/photo-blog-grey.png">
    </div>
    <div class="blog__description">
      <h1 class="description__title">Блог</h1>
      <div class="description__table">
        <div class="table__titles">
          <p class="titles__title link__date">ДАТА</p>
          <p class="titles__title link__author">АВТОР</p>
          <p class="titles__title link__article">ТЕМА</p>
        </div>
        <NuxtLink :to="`/article/${article.id}`" class="table__link" v-for="article in articles.slice(0, 9)">
          <p class="link link__date">{{ article.date }}</p>
          <p class="link link__author">{{ article.author }}</p>
          <p class="link link__article">{{ article.article }}</p>
        </NuxtLink>
      </div>
    </div>
    <div class="blog__titles last-titles">
      <div class="titles__text">
        <p class="text__description">Омолаживающая операция – это таинственное и даже магическое событие, которое проходит за закрытыми дверями операционной. Я c удовольствием приоткрою для вас эти двери и приглашу в удивительное путешествие.</p>
        <button class="text__more-btn">ЧИТАТЬ ПОЛНУЮ СТАТЬЮ</button>
      </div>
      <img src="/static/assets/images/blogpage1.png">
    </div>
    <div class="blog__description">
      <div class="description__table">
        <NuxtLink :to="`/article/${article.id}`" class="table__link" v-for="article in articles.slice(9)">
          <p class="link link__date">{{ article.date }}</p>
          <p class="link link__author">{{ article.author }}</p>
          <p class="link link__article">{{ article.article }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const articles = ref([
  {
    id: 1,
    date: '12.04.24',
    author: 'Олег Викторович Гордиенко',
    article: 'Deep Plane Facelift – новый метод подтяжки лица и шеи. Почему это лучше обычной SMAS-подтяжки?',
  },
  {
    id: 2,
    date: '09.03.24',
    author: 'Олег Викторович Гордиенко',
    article: 'Лифтинг лба и бровей',
  },
  {
    id: 3,
    date: '14.02.24',
    author: 'Олег Викторович Гордиенко',
    article: 'Преимущества методики Deep Plane FaceLift',
  },
  {
    id: 4,
    date: '23.12.23',
    author: 'Олег Викторович Гордиенко',
    article: 'Липофилинг лица',
  },
  {
    id: 5,
    date: '12.04.23',
    author: 'Олег Викторович Гордиенко',
    article: 'Если вы приезжаете на операцию в Санкт-Петербург из другого города',
  },
  {
    id: 6,
    date: '03.02.23',
    author: 'Олег Викторович Гордиенко',
    article: 'Блефаропластика',
  },
  {
    id: 7,
    date: '28.01.23',
    author: 'Олег Викторович Гордиенко',
    article: 'Омоложение и подтяжка шеи',
  },
  {
    id: 8,
    date: '28.01.23',
    author: 'Олег Викторович Гордиенко',
    article: 'Подтяжка верхней губы LipLift',
  },
  {
    id: 9,
    date: '28.01.23',
    author: 'Олег Викторович Гордиенко',
    article: 'Как проходит операция по подтяжке лица',
  },
  {
    id: 10,
    date: '03.02.23',
    author: 'Олег Викторович Гордиенко',
    article: 'Что такое комплексное омоложение?',
  },
  {
    id: 11,
    date: '28.01.23',
    author: 'Олег Викторович Гордиенко',
    article: 'Подготовка к операции',
  },
  {
    id: 12,
    date: '28.01.23',
    author: 'Олег Викторович Гордиенко',
    article: 'В каком возрасте делать подтяжку лица?',
  },
  {
    id: 13,
    date: '28.01.23',
    author: 'Олег Викторович Гордиенко',
    article: 'Консультация пластического хирурга',
  },
])
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1728px;
  width: 100%;
  gap: 97px;

  .blog__titles {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 117px;

    &.last-titles {
      align-items: flex-start;
    }

    .titles__text {
      display: flex;
      flex-direction: column;
      gap: 50px;

      .text__title {
        color: #5493D1;
        text-align: center;
        font-family: Accademico;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        text-transform: uppercase;
        width: 562px;
      }

      .text__sign {
        color: #5493D1;
        text-align: right;
        font-family: Accademico;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
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
  }

  .blog__description {
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
        }
      }

      .link__date {padding-left: 144px; width: 310px;}
      .link__author {width: 440px;}
      .link__article {width: auto;}
    }
  }
}
</style>