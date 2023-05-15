<template>
  <div class="v-about-item">
    <div class="v-about-item__heading black-font">
      <div class="heading-about">
        <p><strong>Командир — </strong>магазин автозапчастей для иномарок, коммерческого автотранспорта
          и грузовых автомобилей в Саранске и Республике Мордовия</p>
      </div>
    </div>
    <div class="group black-font">
      <div class="content-items per70">
        <div class="content-items__item margin3 per90">
          <img class="margin-right" src="@/assets/images/icons/ok.svg" alt="">
          <span>Автозапчасти на все иностранные, российские автомобили и спецтехнику</span>
        </div>
        <div class="content-items__item margin3 per90">
          <img class="margin-right" src="@/assets/images/icons/ok.svg" alt="">
          <span>Расходные материалы, автозапчасти для технического обслуживания для всех видов спецтехники, использующих трансмиссию и ДВС</span>
        </div>
        <div class="content-items__item margin3 per90 ">
          <img class="margin-right" src="@/assets/images/icons/ok.svg" alt="">
          <span>Расходные материалы, автозапчасти для технического обслуживания для легкового, грузового, коммерческого автотранспорта</span>
        </div>
      </div>
      <div class="content-items per30 ">
        <div class="content-items__item margin5">
          <img class="margin-right" src="@/assets/images/icons/unity.svg" alt="">
          <span><strong>Надёжные поставщики</strong></span>
        </div>
        <div class="content-items__item margin5">
          <img class="margin-right" src="@/assets/images/icons/okdouble.svg" alt="">
          <span><strong>Непревзойдённый уровень качества</strong></span>
        </div>
        <div class="content-items__item margin5">
          <img class="margin-right" src="@/assets/images/icons/labels.svg" alt="">
          <span><strong>Стабильно низкие цены</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-about-item'
}
</script>

<style lang="scss">
.v-about-item{
  width: 100%;
  height: 750px;
  &__heading{
    width: 100%;
    height: 50%;
    background-color: #F7AD00;
    font-size: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.heading-about{
  width: 60%;
  text-align: start;
  line-height: 200%;
}
.group{
  height: 50%;
  width: 82%;
  margin: 0 9% 0 9%;
  display: flex;

}
.content-items{
  height: 100%;
  display: flex;
  flex-direction: column;
  &__item{
    display: flex;
    text-align: start;
    font-size: 1.2vw;
    align-items: center;

  }
}
@media screen and (max-width: 600px){
  .v-about-item {
    width: 100%;
    height: max-content;
  }
  .heading-about{
    width: 90%;
    text-align: start;
    line-height: 200%;
    font-size: 3vw;
  }
  .group{
    height: 50%;
    width: 100%;
    margin: 0 9% 0 9%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

  }
  .content-items{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    &__item{
      display: flex;
      text-align: start;
      font-size: 3vw;
      align-items: center;

    }
  }
}
</style>
