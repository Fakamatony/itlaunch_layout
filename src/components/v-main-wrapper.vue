<template>
  <div class="v-main-wrapper container-fluid">
    <v-slider/>
    <div class="filters-items">
      <div class="filters-items__item black-font pointer">
        <span>Отечественные машины</span>
        <img class="per90" src="@/assets/images/russianCars.svg" alt="">
      </div>
      <div class="filters-items__item yellow-font pointer">
        <span>Иномарки / Коммерческие</span>
        <img class="per90" src="@/assets/images/noRussianCars.svg" alt="">
      </div>
    </div>
    <div class="card-items">
      <div
        v-for="card in cards"
        :key="card.id"
        class="card-items__item pointer"
      >
        <span class="black-font">{{ card.text }}</span>
        <img class="per80" :src=" require('@/assets/images/goods/' + card.img)">
      </div>
    </div>
    <v-about-item/>
  </div>
</template>

<script>
import VSlider from '@/components/interactive/v-slider.vue';
import VAboutItem from '@/components/pages/v-about/v-about-item.vue';
export default {
  name: 'v-main-wrapper',
  components:{
    VSlider,
    VAboutItem
  },
  data(){
    return{
      cards:[
        {
          text:'Запасные части для ТО',
          img: "1.png",
          id: 1
        },
        {
          text:'Автомасла и жидкости',
          img: "2.png",
          id: 2
        },
        {
          text:'Шины',
          img: "3.png",
          id: 3
        },
        {
          text:'Выхлопная система',
          img: "4.png",
          id: 4
        },
        {
          text:'Поиск запчастей по параметрам',
          img: "5.png",
          id: 5
        },
        {
          text:'Щётки стеклоочистителя',
          img: "6.png",
          id: 6
        },
        {
          text:'Диски',
          img: "7.png",
          id: 7
        },
        {
          text:'Аксессуары',
          img: "8.png",
          id: 8
        },
        {
          text:'Подшипники',
          img: "9.png",
          id: 9
        },
        {
          text:'Автоэлектрика и электроника',
          img: "10.png",
          id: 10
        },
        {
          text:'Приводные ремни',
          img: "11.png",
          id: 11
        },
        {
          text:'Кузовное железо',
          img: "12.png",
          id: 12
        },
        {
          text:'Автостекло',
          img: "13.png",
          id: 13
        },
        {
          text:'Инструменты',
          img: "14.png",
          id: 14
        },
        {
          text:'Автокрепеж',
          img: "15.png",
          id: 15
        },
        {
          text:'Автохимия и автокосметика',
          img: "16.png",
          id: 16
        },
      ]
    }
  }
}

</script>

<style lang="scss">
  .v-main-wrapper{
    height: max-content;
    margin: 0;
  }
  .filters-items{
    width: 80%;
    height: 350px;
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    margin: 0 10% 0 10%;
    &__item{
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
    }
  }
  .card-items{
    width: 80%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5% 10% 0 10%;
    &__item{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 280px;
      margin: 1%;
      height: 250px;
      border: 1px solid lightgrey;
      font-size: 1.2vw;
      &:hover{
        border:1px solid #F7AD00;
      }
    }
  }

  @media screen and (max-width: 600px){
    .filters-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      font-size: 2vw;
      margin: 0;
    }
  }
  @media screen and (max-width: 900px){
      .card-items__item {
        font-size: 3vw;
      }
  }
</style>
