<template>
  <div class="shopinfo">
    <div class="shopinfo__search">
      <div class="iconfont shopinfo__search__back" @click="goBack">&#xe8bc;</div>
      <div class="shopinfo__search__container">
        <span class="iconfont search__icon">&#xe60e;</span>
        <input class="search__input" type="text" placeholder="请输入商品名称搜素">
      </div>
    </div>
    <div class="shopinfo__about">
      <NearbyItem :item="nearbyItem" />
    </div>
    <div class="shopinfo__detail">
      <ul class="detail__tabs">
        <li
          v-for="(text,index) in tabsText"
          :key="text"
          class="detail__tabs__item"
          :class="{'detail__tabs__item__active': tabsAcitveId === index}"
          @click="handleTabs(index)"
        >
          {{text}}
        </li>
      </ul>
      <div class="detail__products">
        <product-item v-for="product in productItems" :key="product._id" :productInfo="product" />
      </div>
    </div>
    <div class="shopinfo__docker">
      <img src="@/assets/basket.svg" class="shopinfo__docker__img" alt="">
      <div class="shopinfo__docker__content">
        <span class="content__title">购物车是空的</span>
      </div>
      <button class="shopinfo__docker__btn">去结算</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import NearbyItem from '@/components/Public/NearbyItem.vue'
import ProductItem from './components/ProductItem.vue'
import getNearByItem from './hooks/getNearByItem'
import useGoback from './hooks/useGoback'
import getProductItems from './hooks/getProductItems'
export default {
  name: 'ShopInfo',
  props: {
    _id: {
      type: String,
      require: true
    }
  },
  components: {
    NearbyItem,
    ProductItem
  },
  setup(props) {
    const { nearbyItem } = getNearByItem(props._id)
    const { goBack } = useGoback()
    const { productItems } = getProductItems()
    const tabsText = reactive([
      '全部商品',
      '秒杀',
      '休闲水果',
      '时令蔬菜',
      '肉蛋家禽'
    ])
    const tabsAcitveId = ref(0)
    const handleTabs = (index) => {
      tabsAcitveId.value = index
    }
    return {
      nearbyItem,
      goBack,
      productItems,
      tabsText,
      tabsAcitveId,
      handleTabs
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/minxs.scss';
.shopinfo {
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &__search {
    display: flex;
    margin: 0.16rem 0.18rem;
    height: .32rem;
    &__back {
      @include textHight(0.32rem);
      color: #b6b6b6;
      font-size: 0.22rem;
    }
    &__container {
      @include textHight(0.32rem);
      width: 100%;
      margin-left: 0.16rem;
      border-radius: 0.16rem;
      background-color: #f5f5f5;
      padding: 0 0.16rem;
      .search__icon {
        font-size: 0.14rem;
        margin-right: 0.12rem;
      }
      .search__input {
        font-size: 0.14rem;
        outline: none;
        border: none;
        background-color: inherit;
      }
    }
  }
  &__about {
    padding: 0 0.18rem;
    height: .81rem;
  }
  &__detail {
    display: flex;
    height: 100%;
    .detail__tabs{
      background-color: #F5F5F5;
      width: .95rem;
      list-style: none;
      padding: 0;
      margin: 0;
      &__item{
        text-align: center;
        height: .4rem;
        line-height: .4rem;
        font-size: .14rem;
        font-weight: 500;
        color: #333;
        &__active{
          background: #fff;
        }
      }
    }
    .detail__products{
      width: 100%;
      overflow: auto;
    }
  }
  &__docker{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    background-color: #FFFFFF;
    bottom: 0;
    width: 100%;
    height: .49rem;
    line-height: .49rem;
    &__img{
      margin: 0 .32rem 0 .24rem;
    }
    &__content{
      width: 100%;
    }
    &__btn{
      width: 1.79rem;
      height: inherit;
      background: #4FB0F9;
      color: #fff;
      outline: none;
      border: none;
    }
  }
}
</style>