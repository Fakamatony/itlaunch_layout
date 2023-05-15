<template>
  <div class="v-foreign-brands black-font">
    <div class="v-foreign-brands__heading">
      <h1 >Магазин «Командир» является авторизованным магазином по продажам запчастей</h1>
    </div>
    <div class="v-foreign-brands__content">
      <div
        v-for="brand in brands"
        :key="brand.id"
        class="item"
      >
        <img class="image"  :src=" require('@/assets/images/brands/foreign/' + brand.img)">
        <span>{{ brand.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-foreign-brands',
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
          name: 'Alfa Romeo',
          img: '5.png'
        },
        {
          id:6,
          name: 'Audi',
          img: '6.png'
        },
        {
          id:7,
          name: 'Bentley',
          img: '7.png'
        },
        {
          id:8,
          name: 'BMW',
          img: '8.png'
        },
        {
          id:9,
          name: 'Chevrolet',
          img: '9.png'
        },
        {
          id:10,
          name: 'Chrysler',
          img: '10.png'
        },
        {
          id:11,
          name: 'Citroen',
          img: '11.png'
        },
        {
          id:12,
          name: 'Daewoo',
          img: '12.png'
        },
        {
          id:13,
          name: 'Fiat',
          img: '13.png'
        },
        {
          id:14,
          name: 'Ford',
          img: '14.png'
        },
        {
          id:15,
          name: 'Honda',
          img: '15.png'
        },
        {
          id:16,
          name: 'Hyundai',
          img: '16.png'
        },
        {
          id:17,
          name: 'Infiniti',
          img: '15.png'
        },
        {
          id:18,
          name: 'Jaguar',
          img: '18.png'
        },
        {
          id:19,
          name: 'Jeep',
          img: '19.png'
        },
        {
          id:20,
          name: 'Kia',
          img: '20.png'
        },
        {
          id:21,
          name: 'lada',
          img: '21.png'
        },
        {
          id:22,
          name: 'Land Rover',
          img: '22.png'
        },
        {
          id:23,
          name: 'Lexus',
          img: '23.png'
        },
        {
          id:24,
          name: 'Mazda',
          img: '24.png'
        },
        {
          id:25,
          name: 'Mercedes Benz',
          img: '25.png'
        },
        {
          id:26,
          name: 'Mitsubishi',
          img: '26.png'
        },
        {
          id:27,
          name: 'Nissan',
          img: '27.png'
        },
        {
          id:28,
          name: 'Opel',
          img: '28.png'
        },
        {
          id:29,
          name: 'Peugeot',
          img: '29.png'
        },
        {
          id:30,
          name: 'Porsche',
          img: '30.png'
        },
        {
          id:31,
          name: 'Renault',
          img: '31.png'
        },
        {
          id:32,
          name: 'Saab',
          img: '32.png'
        },
        {
          id:33,
          name: 'Seat',
          img: '33.png'
        },
        {
          id:34,
          name: 'Skoda',
          img: '34.png'
        },
        {
          id:35,
          name: 'SsangYong',
          img: '35.png'
        },
        {
          id:36,
          name: 'Subaru',
          img: '36.png'
        },
        {
          id:37,
          name: 'Suzuki',
          img: '37.png'
        },
        {
          id:38,
          name: 'Toyota',
          img: '38.png'
        },
        {
          id:39,
          name: 'Volkswagen',
          img: '39.png'
        },
        {
          id:40,
          name: 'Volvo',
          img: '40.png'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.v-foreign-brands{
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
    grid-template-columns: repeat(6,  150px);
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
  width: 100%;
  height: 150px;
}
@media screen and (max-width: 1290px ) {
  .v-foreign-brands__content{
    grid-template-columns: repeat(5,  150px);
  }
  h1{
    width: 70%;
  }
}
@media screen and (max-width: 1075px ) {
  .v-foreign-brands__content{
    grid-template-columns: repeat(4,  150px);
  }
  h1{
    width: 70%;
  }
}
@media screen and (max-width: 870px ) {
  .v-foreign-brands__content{
    grid-template-columns: repeat(3,  150px);
  }
  h1{
    width: 90%;
    font-size: 3.5vw;
  }
}
@media screen and (max-width: 650px ) {
  .v-foreign-brands__content{
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
  .v-foreign-brands__content{
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
