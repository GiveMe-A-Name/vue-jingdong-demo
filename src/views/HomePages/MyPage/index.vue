<template>
  <div class="mypage">
    <div class="mypage__card">
      <img src="@/assets/凸凸.jpg" alt=""
        class="mypage__card__headImg" />
      <div class="mypage__card__name">凸凸</div>
      <div class="mypage__card__ID">ID: 1069643013
      </div>
      <div class="mypage__card__gap"></div>
      <div class="mypage__card__coupon__items">
        <coupon-item
          v-for="couponitem in couponLists"
          :key="couponitem.text"
          :couponDesc="couponitem" />
      </div>
    </div>
    <div class="mypage__tab__items">
      <tab-item v-for="tabItem in tabLists"
        :key="tabItem.text" :tabDesc="tabItem" />
    </div>
  </div>
</template>

<script>
import CouponItem from './components/CouponItem.vue'
import TabItem from './components/TabItem.vue'
export default {
  name: 'MyPage',
  components: {
    CouponItem,
    TabItem
  },
  data() {
    return {
      couponLists: [
        { text: '红包', amount: '218' },
        { text: '优惠卷', amount: '12张' },
        { text: '仙豆', amount: '88' },
        { text: '白条', amount: '1000' }
      ],
      tabLists: [
        { imgSrc: '', text: '我的钱包' },
        { imgSrc: '', text: '我的地址' },
        { imgSrc: '', text: '客服与帮助' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/minxs.scss';
.mypage {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  padding: 0 0.18rem;
  &__card {
    background-color: #fff;
    position: relative;
    text-align: center;
    margin-top: 1.08rem;
    border-radius: 0.06rem;
    @include boxStyle();
    &__headImg {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: 0.96rem;
      height: 0.96rem;
    }
    &__name {
      font-size: 0.24rem;
      padding-top: 0.59rem;
      color: #262628;
      @include textHight(.36rem);
    }
    &__ID {
      color: #c1c0c9;
      font-size: 0.14rem;
      margin: 0.02rem 0 0.12rem 0;
    }
    &__gap {
      width: 100%;
      height: 0.02rem;
      background-color: #f1f1f1;
      margin-bottom: 0.12rem;
    }
    &__coupon__items {
      display: flex;
      padding: 0 0.28rem 0.16rem 0.28rem;
      justify-content: space-between;
    }
  }
  &__tab__items {
    margin: 0.16rem 0;
    padding: 0.16rem;
    background-color: #fff;
    @include boxStyle();
  }
}
</style>
