<template>
  <div class="v-header">
      <div class="v-header__logo">
        <router-link to="/">
          <img class="logo-size" src="@/assets/images/icons/logo.svg">
        </router-link>
      </div>
    <div class="v-header__nav black-font">

      <span class="pointer">
        <router-link class="no-link" to="about">
          О компании
        </router-link>
      </span>

      <span class="pointer">
        <router-link class="no-link" to="sales">
          Акции
        </router-link>
      </span>

      <span class="pointer">
        <router-link class="no-link" to="certs">
          Сертификаты
        </router-link>
      </span>

      <span class="pointer">
        <router-link class="no-link" to="delivery">
          Доставка и оплата
        </router-link>
      </span>

      <span class="no-margin pointer">
        <router-link class="no-link" to="contacts">
          Контакты
        </router-link>
      </span>

    </div>
    <div class="v-header__burger">
      <img class="burger-size" src="@/assets/images/icons/menu_FILL0_wght400_GRAD0_opsz48.svg">
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
      margin-right: 5%;

    }
    &__burger{
      display: none;
    }
  }
  .logo-size{
    width: 10vw;
    height: 85px;
  }
  span{
    margin-right: 5%;
  }
  span:hover{
    -webkit-text-stroke: 0.5px black;
  }
  @media screen and (max-width: 530px) {
    .v-header{
      width: 80%;
      margin: 0 10% 0 10%;
      height: 80px;
      &__nav{
        display: none;
      }
      &__logo{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
      }
      &__burger{
        display: flex;
        width: 50%;
        flex-direction: column;
        justify-content: center;
        align-items: end;
      }
    }

    .logo-size{
      width: 10vw;
      height: 85px;
    }
    .burger-size{
      width: 10vw;
      height: 85px;
    }
  }
</style>
