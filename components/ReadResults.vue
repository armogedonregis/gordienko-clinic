<template>
  <div class="read__results">
    <div class="results__item">
      <h1 class="item__title">«Представьте себе молодой коллектив, в котором вы – самый возрастной сотрудник»</h1>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.read__results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .results__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 854px;
    height: 100vh;
    border-bottom: 1px solid rgba(57, 57, 57, 0.80);

    .item__title {
      color: #FFF;
      text-align: center;
      font-family: Accademico;
      font-size: 42px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      text-transform: uppercase;
      margin-bottom: 40px;
    }
  }
}
</style>