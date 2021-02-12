<template>
    <div class="couponitem">
        <div class="couponitem__text">{{couponDesc.text}}</div>
        <div class="couponitem__amount"> {{couponDesc.amount}} </div>
    </div>
</template>

<script>
export default {
  name: 'CouponItem',
  props: ['couponDesc']
}
</script>

<style lang="scss" scoped>
.couponitem{
  &__text{
    color: #C1C0C9;
    font-size: .12rem;
    padding-bottom: .03rem;
  }
  &__amount{
    font-size: .2rem;
    color: #262628;
  }
}
</style>
