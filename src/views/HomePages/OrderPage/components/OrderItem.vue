<template>
  <div class="order__item">
    <div class="order__item__title">
      <span class="order__item__title__name">{{orderItemDesc.storeName}}</span>
      <span class="order__item__title__status">已取消</span>
    </div>
    <div class="order__item__content">
      <div class="order__item__imgs">
        <img class="order__item__img" src="@/assets/番茄.jpg" alt="">
        <img class="order__item__img" src="@/assets/番茄.jpg" alt="">
        <img class="order__item__img" src="@/assets/番茄.jpg" alt="">
      </div>
      <div class="order__item__text">
        <div class="order__item__text__price">¥{{ orderItemDesc.totalPrice }}</div>
        <div class="order__item__text__amount">共{{ orderItemDesc.amount }}件</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  props: ['orderItemDesc']
}
</script>

<style lang="scss" scoped>
@import '@/style/minxs.scss';
.order__item {
  background-color: #ffffff;
  padding: .16rem;
  margin-top: .16rem;
  border-radius: .04rem;
  &__title {
    display: flex;
    justify-content: space-between;
    &__name {
      font-size: 0.16rem;
      font-weight: 600;
    }
    &__status {
      font-size: 0.14rem;
      color: #999999;
    }
  }
  &__content{
    display: flex;
    justify-content: space-between;
    margin-top: .16rem;
    .order__item__imgs{
      .order__item__img{
        margin-right: .12rem;
        width: .4rem;
        height:  .4rem;
      }
    }
    .order__item__text{
      &__price{
        color: #E93B3B;
        font-size: .14rem;
        @include textHeight(.2rem);
      }
      &__amount{
        color: #333333;
        text-align: right;
        font-size: .12rem;
      }
    }
  }
}
</style>
