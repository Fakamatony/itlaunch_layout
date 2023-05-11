<template>
  <div class="v-header">
      <div class="v-header__logo">
        <img class="logo-size" src="@/assets/images/logo.svg">
      </div>
    <div class="v-header__nav black-font">
      <span>О компании</span>
      <span>Акции</span>
      <span>Сертификаты</span>
      <span>Доставка и оплата</span>
      <span class="no-margin">Контакты</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-header'
}
</script>

<style scoped lang="scss">
  .v-header{
    height: 161px;
    display: flex;
    margin: 0 9% 0 9%;
    &__logo{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 20%;
    }
    &__nav{
      display: flex;
      align-items: center;
      justify-content: end;
      font-size: 1.3vw;
      width: 80%;
    }
  }
  .logo-size{
    width: 10vw;
    height: 85px;
  }
  span{
    margin-right: 5%;
  }
</style>
