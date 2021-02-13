<template>
  <div class="curcar">
    <section class="curcar__content">
      <header class="car__header">
        <div for="" class="car__header__checkbox">
          <input type="checkbox" name="" id="" class="car__header__checkbox__check">
          <label class="car__header__checkbox__label">全选</label>
        </div>
        <div class="car__header__clearcar">
          清空购物车
        </div>
      </header>
      <article class="car__items">
        <CarItem class="car__item"/>
        <CarItem class="car__item"/>
        <CarItem class="car__item"/>
      </article>
    </section>
  </div>
</template>

<script>
import CarItem from './components/CarItem.vue'
export default {
  name: 'CurrentShoppingCar',
  components: {
    CarItem
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/minxs.scss';
.curcar {
  position: fixed;
  top: 0;
  bottom: .48rem;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.50);
  .curcar__content{
    position: absolute;
    bottom: 0;
    background-color: #fff;
    box-sizing: border-box;
    width: 100%;
    .car__header{
      display: flex;
      justify-content: space-between;
      padding: 0 .18rem;
      @include textHeight(.52rem);
      &__checkbox{
        font-family: PingFangSC-Regular;
        &__check{
          width: .19rem;
          height: .19rem;
          vertical-align:middle;
        }
        &__label{
          display: inline-block;
          color: #333333;
          font-size: .14rem;
          margin-left: .08rem;
          vertical-align:middle;
        }
      }
      &__clearcar{
        font-size: .14rem;
        color: #333333;
      }
    }
    .car__items{
      padding: .18rem .18rem 0 .18rem;
      border-top: 1px solid #F1F1F1;
      border-bottom: 1px solid #F1F1F1;
      .car__item{
        margin-bottom: .16rem;
      }
    }
  }
}
</style>
