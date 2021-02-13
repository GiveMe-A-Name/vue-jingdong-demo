<template>
  <div class="shoppingcar">
    <header class="shoppingcar__title">
      <p class="shoppingcar__title__text">我的全部购物车（2）</p>
    </header>
    <div class="shoppingcar__items">
      <car-item
        v-for="item in carItemLists"
        :key="item.storeTitle"
        :shoppingCarDesc="item"
      />
    </div>
  </div>
</template>

<script>
import CarItem from './components/CarItem.vue'
export default {
  name: 'ShoppingCar',
  components: {
    CarItem
  },
  data() {
    return {
      carItemLists: [
        {
          storeName: '沃尔玛',
          products: [
            { name: '番茄250g/份', price: '33.6 x 3', total: '¥99.9', imgSrc: '' },
            { name: '提子250g/份', price: '33.6 x 3', total: '¥99.9', imgSrc: '' }
          ]
        },
        {
          storeName: '京东7FRESH七鲜',
          products: [
            { name: '番茄250g/份', price: '33.6 x 3', total: '¥99.9', imgSrc: '' },
            { name: '提子250g/份', price: '33.6 x 3', total: '¥99.9', imgSrc: '' }
          ]
        },
        {
          storeName: '百果园',
          products: [
            { name: '番茄250g/份', price: '33.6 x 3', total: '¥99.9', imgSrc: '' },
            { name: '提子250g/份', price: '33.6 x 3', total: '¥99.9', imgSrc: '' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/minxs.scss';
.shoppingcar {
  position: absolute;
  top: 0;
  bottom: .49rem;
  left: 0;
  right: 0;
  background-color: #F5F5F5;
  overflow-x: auto;
  &__title {
    background-color: #fff;
    &__text {
      @include textHeight(.44rem);
      font-size: 0.16rem;
      text-align: center;
      margin: 0;
    }
  }
}
</style>
