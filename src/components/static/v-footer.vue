<template>
  <div class="v-footer row grey-back">
    <div class="v-footer-content">
      <div class="v-footer-content__name">
        <img class="logo" src="@/assets/images/icons/logo.svg" alt="">
        <div class="name-content white-font">
          <p>
            © 2018–2023 гг. <br>
            Все права защищены <br>
            Интернет-магазин запчастей «Командир»
          </p>
        </div>
      </div>
      <div class="v-footer-content__nav white-font ">
        <span class="pointer">
          <router-link class="no-link-white" to="local-brands">
            Отечественные
          </router-link>
        </span>
        <span class="pointer">
          <router-link class="no-link-white" to="foreign-brands">
            Иномарки / Коммерческие
          </router-link>
        </span>
        <span class="pointer">
          <router-link class="no-link-white" to="delivery">
            Доставка и оплата
          </router-link>
        </span>
        <span class="pointer">
          <router-link class="no-link-white" to="sales">
            Акции
          </router-link>
        </span>
      </div>
      <div class="v-footer-content__nav ">
        <span class="pointer">
          <router-link class="no-link-white" to="about">
            О компании
          </router-link>
        </span>
        <span class="pointer">
          <router-link class="no-link-white" to="contacts">
            Контакты
          </router-link>
        </span>
        <span class="pointer">
          <router-link class="no-link-white" to="certs">
            Сертификаты
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-footer'
}
</script>

<style scoped lang="scss">
  .v-footer{
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .v-footer-content{
    width: 100%;
    height: 65%;
    margin: 0 10% 0 10%;
    display: flex;

    &__name{
      width: 50%;
      height: 50%;
      display: flex;
      align-items: end;
      justify-content: start;
      text-align: start;
      font-size: 0.8vw;
    }
    &__nav{
      height: 100%;
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: start;
      font-size: 1.1vw;
    }
  }
  .logo{
    height: 100%;
  }
  .name-content{
    margin: 0 0 1% 2%;
    line-height: 200%;
  }
  span{
    margin-bottom: 5%;
  }
  @media screen and (max-width: 530px){
    .v-footer-content {
      width: 100%;
      height: 90%;
      margin: 0 10% 0 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &__name{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: end;
        justify-content: start;
        text-align: start;
        font-size: 2vw;
      }
      &__nav{
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        font-size:2.3vw;
      }
    }
    span{
      margin-bottom: 1%;
    }
  }
</style>
