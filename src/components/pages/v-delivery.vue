<template>
  <div class="v-delivery black-font">
    <h1 class="center">Доставка и оплата</h1>
    <div class="v-delivery__items">
      <div class="item">
        <h2>Доставка по России <span class="yellow-font">БЕСПЛАТНО</span></h2>
        <br>
        <p>Доставляем заказы по всей территории России через транспортные компании. В момент оформления заказа,
          в корзине на выбор мы предложим несколько вариантов доставки. В зависимости от удалённости города и
          габаритов заказа возможна бесплатная* доставка некоторыми транспортными компаниями. Возможность бесплатной
          доставки уточняйте у менеджера по телефону. Клиент самостоятельно выбирает подходящую компанию для доставки.
          В случае платной доставки, стоимость доставки оплачивается при приёмке товара в транспортной компании.
          В итоговую сумму заказа, стоимость доставки не входит. Заказ будет доставлен в транспортную компанию
          на следующий рабочий день после подтверждения оплаты. Вы можете сделать предварительный расчёт
          доставки до оформления заказа. Отправка заказов со склада из города Саранска.</p>
        <br>
        <p>*бесплатная доставка осуществляется в случаях, если стоимость доставки не превышает 5% стоимости заказа.</p>
        <br>
        <div class="delivery-corps">
          <img class="delivery-corps__item" src="@/assets/images/delivery-corps/1.png">
          <img class="delivery-corps__item" src="@/assets/images/delivery-corps/2.png">
          <img class="delivery-corps__item" src="@/assets/images/delivery-corps/3.png">
          <img class="delivery-corps__item" src="@/assets/images/delivery-corps/4.png">
          <img class="delivery-corps__item" src="@/assets/images/delivery-corps/5.png">
        </div>
      </div>

      <div class="item">
        <h2>Доставка по Саранску <span class="yellow-font">БЕСПЛАТНО*</span></h2>
        <br>
        <p>Доставка товара осуществляется с центрального склада по Сарнску в течение рабочего дня с 09:00 до 16:00. </p>
        <br>
        <p>*Для заказов свыше 3 000 ₽ — доставка осуществляется бесплатно. Заказы с меньшей суммой — самовывоз.</p>
      </div>


      <div class="item">
        <h2><span class="yellow-font">Самовывоз</span> заказов</h2>
        <br>
        <p>Товар, заказанный в магазине «Командир» можно забрать самостоятельно по адресу: г. Саранск,
          ул. Лодыгина, д. 10 г., предварительно согласовав время с менеджером магазина.</p>
      </div>


      <div class="item">
        <h2>Оплата по счёту для юр. лиц</h2>
        <br>
        <p>Единственный способ оплаты для юридических лиц — это перевод средств на расчётный счёт.
          Для формирования счёта на оплату от вас потребуется указать реквизиты компании в момент оформления заказа
          в корзине.
        </p>
        <br>
        <p>При оформлении отгрузочных документов наша организация выделяет НДС. При получении Заказа проверьте его
          на соответствие наименований и количества позиций.</p>
      </div>

      <div class="item">
        <h2>Оплата банковской картой <span class="yellow-font">онлайн</span></h2>
        <p>Предоставляем возможность оплатить заказ банковской картой. Все указанные цены включают НДС 20%.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-delivery'
}
</script>

<style scoped lang="scss">
  .v-delivery{
    width: 80%;
    margin: 0 10% 0 10%;
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 1.2vw;
    &__items{
      display: flex;
      flex-direction: column;
      align-items: start;
      text-align: start;
      margin-right: 10%;
    }
  }
  .item{
    margin-bottom: 5%;

  }
  .center{
    margin: 0 35% 5% 35%;
  }
  .delivery-corps{
    width: 90%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    &__item{
      width: 10vw;
    }
  }
  @media screen and (max-width: 400px){
    .v-delivery{
      width: 90%;
      margin: 0 5% 0 5%;
      display: flex;
      flex-direction: column;
      align-items: start;
      font-size: 4vw;
      &__items{
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: start;
        margin-right: 10%;
      }
    }
    .item{
      margin-bottom: 5%;

    }
    .center{
      margin: 0 5% 5% 5%;
      width: 90%;
    }
    .delivery-corps{
      width: 90%;
      display: flex;
      align-items: start;
      justify-content: space-between;
      &__item{
        width: 10vw;
      }
    }
  }
</style>
