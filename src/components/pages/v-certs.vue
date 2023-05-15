<template>
  <div class="v-certs black-font">
    <h1 class="v-certs__cert">Фото / Сертификаты</h1>
    <div class="v-certs__content">
      <img
        v-for="picture in pictures"
        :key="picture.id"
        class="image"
        :src=" require('@/assets/images/other/certs/' + picture.img)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-certs',
  data(){
    return{
      pictures:[
        {id:1, img: "1.png"},
        {id:2, img: "2.png"},
        {id:3, img: "3.png"},
        {id:4, img: "4.png"},
        {id:5, img: "5.png"},
        {id:6, img: "6.png"},
        {id:7, img: "7.png"},
        {id:8, img: "8.png"},
        {id:9, img: "9.png"},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.v-certs{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  &__cert{
    margin-bottom: 2%;
    font-size: 2vw;
  }
  &__content{
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
  }
}
.image{
  width: 380px;
  height: auto;
  margin: 0.5%;
}
@media screen and (max-width: 400px){
  .v-certs{
    &__cert{
      font-size: 4vw;
    }
    &__content{
      width: 100%;
    }
    .image{
      width: 100%;
    }
  }
}
</style>
