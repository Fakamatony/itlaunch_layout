<template>
  <div class="v-contacts black-font">
    <h1 class="v-contacts__heading">Контакты</h1>
    <div class="contact">
      <p>
        430034, Мордовия Респ, Саранск,
        <br>
        Лодыгина, дом № 10Г
      </p>
    </div>
    <div class="v-contacts__content">
      <img
        v-for="picture in pictures"
        :key="picture.id"
        class="image"
        :src=" require('@/assets/images/other/contacts/' + picture.img)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-contacts',
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
.v-contacts{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  &__heading{
    margin-bottom: 2%;
    font-size: 2vw;
  }
  &__content{
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
  }
}
.contact{
  width: 69%;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: left;
  margin: 2% 0 2% 0;
  line-height: 200%;
  font-size: 150%;
}
.image{
  width: 30%;
  height: auto;
  margin: 0.5%;
}
@media screen and (max-width: 400px){
  .v-contacts{
    &__heading{
      font-size: 4vw;
    }
    &__content{
      width: 100%;
      flex-direction: column;
    }
  }
  .contact{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: left;
    margin: 3% 0 3% 0;
    font-size: 100%;
  }
  .image{
    width: 100%;
    height: auto;
    margin: 2%;
  }
}
</style>
