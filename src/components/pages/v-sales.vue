<template>
  <div class="v-sales black-font">
    <h1 class="v-sales__sale">Акция</h1>
    <div class="v-sales__content">
      <img
        v-for="picture in pictures"
        :key="picture.id"
        class="image"
        :src=" require('@/assets/images/other/sales/' + picture.img)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-sales',
  data(){
    return{
      pictures:[
        {id:1, img: "1.png"},
        {id:2, img: "2.png"},
        {id:3, img: "3.png"},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .v-sales{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    &__sale{
      margin-bottom: 2%;
      font-size: 2vw;
    }
    &__content{
      width: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2%;
    }
  }
  .image{
    width: 100%;
    height: auto;
    margin-bottom: 2%;
  }
  @media screen and (max-width: 400px){
    .v-sales{
      &__sale{
        font-size: 4vw;
      }
      &__content{
        width: 100%;
      }
    }
  }
</style>
