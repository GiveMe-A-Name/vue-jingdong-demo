<template>
  <div class="car__item">
    <p class="car__item__storeName">
      {{shoppingCarDesc.storeName}}
    </p>
    <car-item-product
      v-for="(product, index) in shoppingCarDesc.products"
      :key="index"
      :productdesc="product"
    />
    <div class="car__item__totally">共计3件/1.4kg <span class="iconfont">&#xe756;</span></div>
  </div>
</template>

<script>
import CarItemProduct from './CarItemProduct.vue'
export default {
  name: 'CarItem',
  components: {
    CarItemProduct
  },
  props: ['shoppingCarDesc']
}
</script>

<style lang="scss" scoped>
@import '@/style/minxs.scss';
.car__item {
  background-color: #fff;
  margin: 0.16rem .18rem 0 .18rem;
  padding: .16rem;
  border-radius: .04rem;
  &__storeName {
    font-size: 0.16rem;
    font-weight: 600;
  }
  &__totally {
    background-color: #F5F5F5;
    color: #999999;
    text-align: center;
    font-size: 0.14rem;
    margin: 0.16rem 0;
    @include textHeight(.28rem);
    .iconfont {
      display: inline-block;
      @include textHeight(0.07rem);
    }
  }
}
</style>
