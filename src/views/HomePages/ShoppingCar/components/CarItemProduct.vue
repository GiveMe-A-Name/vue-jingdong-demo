<template>
  <div class="car__item__product">
    <img
      class="product__img"
      src="@/assets/番茄.jpg"
      alt=""
    >
    <div class="product__content">
      <div class="product__content__price">{{productdesc.name}}</div>
      <div class="product__content__money">
        <span class="product__content__money__number">{{productdesc.price}}</span>
        <span class="product__content__money__total">{{productdesc.total}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CarItemProduct',
  props: ['productdesc']
}
</script>

<style lang="scss" scoped>
@import '@/style/minxs.scss';
.car__item__product {
  display: flex;
  margin: 0.16rem 0;
  .product__img {
    width: 0.46rem;
    height: 0.46rem;
  }
  .product__content {
    margin-left: 0.16rem;
    width: 100%;
    &__price {
      height: 0.2rem;
      line-height: 0.2rem;
      font-size: 0.14rem;
      font-weight: 600;
      margin-bottom: 0.06rem;
    }
    &__money {
      display: flex;
      justify-content: space-between;
      &__number {
        color: #e93b3b;
        @include textHight(0.2rem);
      }
      &__total {
        @include textHight(0.2rem);
      }
    }
  }
}
</style>
