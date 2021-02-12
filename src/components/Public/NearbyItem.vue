<template>
  <div class="nearby__item">
    <img class="nearby__item__img"
      src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
    <div class="nearby__content">
      <div class="nearby__content__title">{{item.name}}</div>
      <div class="nearby__content__tags">
        <span class="nearby__content__tag">月售{{item.sales}}</span>
        <span class="nearby__content__tag">起送¥{{item.expressLimit}}</span>
        <span class="nearby__content__tag">基础运费¥{{item.expressPrice}}</span>
      </div>
      <p class="nearby__content__highlight">{{ item.slogon }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NearbyItem',
  props: ['item']
}
</script>

<style lang="scss" scoped>
.nearby__item {
  display: flex;
  &__img {
    width: 0.56rem;
    height: 0.56rem;
    margin-right: 0.16rem;
  }
  .nearby__content {
    &__title {
      font-size: 0.16rem;
    }
    &__tags {
      margin: 0.08rem 0;
      .nearby__content__tag {
        font-size: 0.13rem;
        margin-right: 0.16rem;
      }
    }
    &__highlight {
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
