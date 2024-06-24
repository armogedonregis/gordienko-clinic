<template>
  <div class="blog">
    <div class="blog__titles">
      <div class="titles__text">
        <h1 class="text__title">«В данном разделе вы найдете мои полные статьи и новости об омолаживающей хиругии»</h1>
        <p class="text__sign">— Олег Викторович Гордиенко, пластический хирург</p>
      </div>
      <img src="/static/assets/images/photo-blog-grey.png">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1728px;
  width: 100%;

  .blog__titles {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 117px;

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
        width: 552px;
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
    }
  }
}
</style>