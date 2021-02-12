<template>
  <div class="homepage">
    <div class="wrapper">
      <div class="position">
        <span class="iconfont position__icon">&#xe6b4;</span>
        北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
        <span class="iconfont position__notice">&#xe613;</span>
      </div>
      <div class="search">
        <span class="iconfont search__icon">&#xe60e;</span>
        <input class="search__input" type="text" placeholder="山姆会员商店优惠商品">
      </div>
      <div class="banner">
        <img class="banner__img" src="@/assets/banner.jpg" alt="">
      </div>
      <div class="icons">
        <icon-item v-for="item in iconsLists" :key="item" :item="item" />
      </div>
      <div class="gap"></div>
      <div class="nearby">
        <p class="nearby__title">附近店铺</p>
        <router-link class="nearby__store" v-for="item in nearbyItemLists"
          :key="item._id" :to="{name: 'ShopInfo', params:{'_id': item._id}}">
          <NearbyItem :item="item" />
        </router-link>
      </div>
      <toast :message="toastData.toastMessage" v-if="toastData.showToast" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import IconItem from './components/IconItem.vue'
import NearbyItem from '@/components/Public/NearbyItem.vue'
import Toast, { useToastEffect } from '@/components/Public/Toast.vue'
import useGetNearByItemsEffect from './hooks/useGetNearByItemsEffect'
export default {
  name: 'HomePage',
  components: {
    IconItem,
    NearbyItem,
    Toast
  },
  setup() {
    const iconsLists = reactive([
      { desc: '超市便利', imgSrc: require('@/assets/超市@2x.png') },
      { desc: '菜市场', imgSrc: require('@/assets/菜市场@2x.png') },
      { desc: '水果店', imgSrc: require('@/assets/水果店@2x.png') },
      { desc: '鲜花绿植', imgSrc: require('@/assets/鲜花@2x.png') },
      { desc: '医药健康', imgSrc: require('@/assets/医药健康@2x.png') },
      { desc: '居家时尚', imgSrc: require('@/assets/家居@2x.png') },
      { desc: '烘培蛋糕', imgSrc: require('@/assets/蛋糕@2x.png') },
      { desc: '签到', imgSrc: require('@/assets/签到@2x.png') },
      { desc: '大牌免运', imgSrc: require('@/assets/大牌免运@2x.png') },
      { desc: '红包套餐', imgSrc: require('@/assets/红包@2x.png') }
    ])
    const { toastData, showToast } = useToastEffect()
    const { nearbyItemLists } = useGetNearByItemsEffect({ showToast })

    return {
      iconsLists,
      nearbyItemLists,
      toastData
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/minxs.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  overflow: auto;
  .position {
    color: $content-fontcolor;
    position: relative;
    line-height: 0.22rem;
    height: 0.22rem;
    font-size: 0.16rem;
    @include ellipsis;
    padding: 0.16rem 0.24rem 0.16rem 0;
    &__icon {
      font-size: 0.2rem;
    }
    &__notice {
      position: absolute;
      right: 0;
      font-size: 0.2rem;
    }
  }
  .search {
    height: 0.32rem;
    background: #f5f5f5;
    padding: 0.08rem 0.16rem;
    box-sizing: border-box;
    &__icon {
      font-size: 0.15rem;
      margin: 0 0.12rem 0.16rem;
    }
    &__input {
      background: #f5f5f5;
      font-size: 0.13rem;
      width: 80%;
      outline: none;
      border: none;
    }
  }
  .banner {
    margin-top: 0.12rem;
    height: 0.86rem;
    &__img {
      width: 100%;
      height: inherit;
    }
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.16rem;
  }
  .gap {
    background-color: #f1f1f1;
    height: 0.1rem;
    width: 100%;
    margin: 0 0 0.16rem 0;
  }
  .nearby {
    color: $content-fontcolor;
    &__title {
      font-size: 0.18rem;
      height: 0.25rem;
      line-height: 0.25rem;
      font-weight: 550;
      margin: 0 0 0.14rem 0;
    }
    &__store {
      text-decoration: none;
      color: $content-fontcolor;
    }
  }
}
</style>
