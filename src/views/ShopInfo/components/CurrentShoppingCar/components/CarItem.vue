<template>
  <div class="caritem">
    <div class="caritem__checkbox">
      <input type="checkbox" name="" id="" class="caritem__checkbox__check">
    </div>
    <div class="caritem__content">
      <img src="@/assets/番茄.jpg" alt="" class="caritem__content__img">
      <div class="text">
        <h5 class="text__name">{{item.name}}</h5>
        <div class="text__price">
          <span class="text__price__new">¥{{item.price}}</span>
          <span class="text__price__old">¥{{item.oldPrice}}</span>
        </div>
      </div>
      <div class="count">
        <button
          class="count__handlesub"
          @click="handleSub"
        >-</button>
        <span class="count__number">{{item.count}}</span>
        <button class="count__handleadd" @click="handleAdd">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'CarItem',
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    const storeId = inject('storeId')
    const handleSub = () => {
      store.commit('hanleProductCount', {
        storeId,
        productId: props.item._id,
        handleType: 'sub'
      })
    }
    const handleAdd = () => {
      store.commit('hanleProductCount', {
        storeId,
        productId: props.item._id,
        handleType: 'add'
      })
    }
    return {
      handleSub,
      handleAdd
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/minxs.scss';
.caritem{
  display: flex;
  &__checkbox {
    padding: .12rem 0;
    &__check{
      display: block;
      width: .19rem;
      height: .19rem;
      -webkit-appearance: radio;
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;
    margin-left: .16rem;
    &__img {
      width: .46rem;
      height: .46rem;
    }
    .text{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      margin-left: .16rem;
      &__name{
        margin: 0;
        @include textHeight(.2rem);
      }
      &__price{
        @include textHeight(.2rem);
        &__new{
          font-size: .1rem;
          font-weight: 600;
          color: #E93B3B;
        }
        &__old{
          display: inline-block;
          text-decoration: line-through;
          color: #999999;
          transform-origin: center;
          transform: scale(.85, .85);
        }
      }
    }
    .count{
      @include textHeight(.46rem);
      &__number{
        margin: 0 .16rem;
        font-size: .14rem;
      }
      button{
        width: 0.21rem;
        height: 0.21rem;
        border-radius: 50%;
        font-size: .13rem;
        outline: none;
      }
      &__handlesub{
        border: 1px solid #666666;
        color: #666666;
      }
      &__handleadd{
        border: none;
        color: #fff;
        background-color: #0091FF;
      }
    }
  }
}
</style>
