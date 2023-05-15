<template>
  <div class="v-local-brands black-font">
    <div class="v-local-brands__heading">
      <h1 >Магазин «Командир» является авторизованным магазином по продажам запчастей</h1>
    </div>
    <div class="v-local-brands__content">
      <div
        v-for="brand in brands"
        :key="brand.id"
        class="item"
      >
        <img class="image"  :src=" require('@/assets/images/brands/local/' + brand.img)">
        <span>{{ brand.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-local-brands',
  data(){
    return{
      brands:[
        {
          id:1,
          name: 'ГАЗ',
          img: '1.png'
        },
        {
          id:2,
          name: 'ВАЗ',
          img: '2.png'
        },
        {
          id:3,
          name: 'УАЗ',
          img: '3.png'
        },
        {
          id:4,
          name: 'ПАЗ',
          img: '4.png'
        },
        {
          id:5,
          name: 'КАМАЗ',
          img: '5.png'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .v-local-brands{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__heading{
      width: 69%;
      height: 200px;
      border: 10px solid #4B3329;
      margin: 40px 0 40px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__content{
      width: 70%;
      display: grid;
      grid-template-columns: repeat(5,  150px);
      grid-template-rows: 192px;
      grid-row-gap: 40px ;
      justify-content: space-between;
      margin-bottom: 40px;
    }
  }
  .item{
    width: 150px;
    height: 192px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transition: 500ms ease;
  }
  .item:hover{
    height: 172px;
  }
  h1{
    width: 60%;
  }
  .image{
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 1075px ) {
    .v-local-brands__content{
      grid-template-columns: repeat(4,  150px);
    }
    h1{
      width: 70%;
    }
  }
  @media screen and (max-width: 870px ) {
    .v-local-brands__content{
      grid-template-columns: repeat(3,  150px);
    }
    h1{
      width: 90%;
      font-size: 3.5vw;
    }
  }
  @media screen and (max-width: 650px ) {
    .v-local-brands__content{
      grid-template-columns: repeat(2,  145px);
    }
    .image{
      width: 145px;
      height: 150px;
    }
    .item{
      width: 145px;
      height: 192px;
    }
  }
  @media screen and (max-width: 420px ) {
    .v-local-brands__content{
      width: 100%;
      grid-template-columns: repeat(2,  145px);
    }
    .v-local-brands__heading{
      width: 96%;
    }
    h1{
      font-size: 6vw;
    }
  }


</style>
