<template>
  <div class="blog">
    <div class="blog__titles">
      <div class="titles__text">
        <h1 class="text__title">«В данном разделе вы найдете <br> мои полные статьи и новости об <br> омолаживающей хиругии»</h1>
        <p class="text__sign">— Олег Викторович Гордиенко, <br> пластический хирург</p>
      </div>
      <img src="/assets/images/photo-blog-grey.png" class="titles__photo">
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
      <div class="titles__text">
        <p class="text__description">Омолаживающая операция – это таинственное и даже магическое событие, которое проходит за закрытыми дверями операционной. Я c удовольствием приоткрою для вас эти двери и приглашу в удивительное путешествие.</p>
        <button class="text__more-btn">ЧИТАТЬ ПОЛНУЮ СТАТЬЮ</button>
      </div>
      <img src="/assets/images/blogpage1.png" class="titles__photo">
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
import articles from '/server/articles.json';
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

    @media (max-width: 1750px) {
      gap: 72px;
    }

    &.last-titles {
      align-items: flex-start;

      @media (max-width: 1750px) {
        padding-left: 144px;
      }
    }

    .titles__text {
      display: flex;
      flex-direction: column;
      gap: 50px;

      @media (max-width: 1350px) {
        gap: 40px;
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
        width: 562px;

        @media (max-width: 1350px) {
          font-size: 20px;
          width: auto;
        }

        @media (max-width: 1050px) {
          font-size: 16px;
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

        @media (max-width: 1050px) {
          font-size: 8px;
        }
      }

      .text__description {
        color: #393939;
        font-family: Accademico;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;

        @media (max-width: 1350px) {
          font-size: 14px;
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

        @media (max-width: 1750px) {
          width: 300px;
        }
      }
    }

    .titles__photo {

      @media (max-width: 1750px) {
        width: 52.82vw;
        height: auto;
      }
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

    .description__title {
      color: #393939;
      font-family: Accademico;
      font-size: 60px;
      font-style: normal;
      font-weight: 400;
      line-height: 98%;
      margin-left: 144px;

      @media (max-width: 1350px) {
        margin-left: 63px;
        font-size: 45px;
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

        @media (max-width: 1700px) {
          min-height: 85px;
          padding: 10px;
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
        
          @media (max-width: 1350px) {
            font-size: 12px;
          }
        }
      }

      .link__date {
        padding-left: 144px; 
        width: 310px;
      
        @media (max-width: 1700px) {
          padding-right: 50px;
        }

        @media (max-width: 1350px) {
          padding-left: 63px;
        }
      }
      .link__author {
        width: 440px;
      
        @media (max-width: 1700px) {
          padding-right: 50px;
          width: 300px;
        }
      }
      .link__article {
        width: auto;

        @media (max-width: 1700px) {
          width: 1300px;
          padding-right: 50px;
        }

        @media (max-width: 1350px) {
          width: 800px;
          padding-right: 50px;
        }
      }
    }
  }
}
</style>