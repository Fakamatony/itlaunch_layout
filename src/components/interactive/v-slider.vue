<template>
  <div class="v-slider">
    <Carousel  class="v-slider__carousel" :autoplay="3000" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item">
          <img class="image"  :src=" require('@/assets/images/slider-images/' + slide.img)">
        </div>
      </Slide>
      <template #addons>
        <Pagination/>
        <Navigation/>
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation,Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
  name: 'v-slider',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data(){
    return{
      slides:[
        {img:'1.jpg', id: 1},
        {img:'2.jpg', id: 2},
        {img:'3.jpg', id: 3}
      ]
    }
  }
})
</script>

<style lang="scss">
  .v-slider{
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 2% 0;
    margin: 1vw 0 1vw 0;
    &__carousel{
      width: 100%;
      height: 500px;
      margin: 0 10% 0 10%;
      background-color: #464646;
    }
  }
  .image{
    width: 100%;
    height: 500px;
  }
  @media screen and (max-width: 880px){
    .v-slider{
      width: 100%;
      height: 184px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0 2% 0;
      margin: 10vw 0 10vw 0;
      &__carousel{
        width: 100%;
        height: 184px;
        margin: 0 10% 0 10%;
        background-color: #464646;
      }
    }
    .image{
      width: 100%;
      height: 100%;
    }
  }

</style>
