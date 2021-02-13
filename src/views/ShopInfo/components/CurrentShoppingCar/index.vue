<template>
  <div class="car">
    <article class="car__content">
      <header class="car__content__header">
        <label for="all" class="">
        <input type="checkbox" id="all">
          全选
        </label>
        <div>清空购物车</div>
      </header>
      <aside class="car__gap"></aside>
      <ul class="car__goods__items">
        <CarItem class="car__goods__item"/>
        <CarItem class="car__goods__item"/>
      </ul>
      <aside class="car__gap"></aside>
    </article>
  </div>
</template>

<script>
import CarItem from './components/CurrentCarItem'
export default {
  name: 'CurrentShoppingCar',
  components: {
    CarItem
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/minxs.scss';
.car{
    position: fixed;
    top: 0;
    bottom: .49rem;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    &__content{
      background-color: #fff;
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      &__header {
        @include textHeight(.52rem);
        padding: 0 .18rem;
        display: flex;
        justify-content: space-between;
      }
    }
    &__goods__items{
      margin: 0;
      padding: .16rem .16rem 0 .16rem;
      .car__goods__item{
        margin-bottom: .16rem;
      }
    }
    &__gap{
      height: 1px;
      background-color: #F1F1F1;
    }
}
</style>
