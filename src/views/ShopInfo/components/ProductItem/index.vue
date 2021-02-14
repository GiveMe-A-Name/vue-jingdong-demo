<template>
  <div class="product">
    <div class="product__container">
      <img class="product__container__img" src="@/assets/番茄.jpg" alt="">
      <div class="content">
        <p class="content__name">{{ productInfo.name }} </p>
        <p class="content__sales">月售{{ productInfo.sales }}件</p>
        <div class="content__detail">
          <div class="detail__prices">
            <span class="detail__prices__now">¥{{ productInfo.price }}</span>
            <span
              class="detail__prices__before">¥{{ productInfo.oldPrice }}</span>
          </div>
          <div class="detail__count">
            <button class="detail__count__sub" v-if="productInfo.count > 0"
              @click="handleSub">-</button>
            <span class="count"
              v-if="productInfo.count > 0">{{productInfo.count}}</span>
            <button class="detail__count__add" @click="handleAdd">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="product__gap"></div>
  </div>
</template>

<script>
import useCount from './hooks/useCount'
export default {
  name: 'ProductItem',
  props: {
    productInfo: {
      type: Object,
      require: true
    },
    currentStoreId: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const { handleSub, handleAdd } = useCount({
      storeId: props.currentStoreId,
      productId: props.productInfo._id
    })
    return {
      handleSub,
      handleAdd
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  &__container {
    display: flex;
    margin: 0.12rem 0;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-left: 0.16rem;
    }
    .content {
      color: #333;
      width: 100%;
      &__name {
        font-size: 0.14rem;
        margin: 0;
      }
      &__sales {
        margin: 0.06rem 0;
        font-size: 0.12rem;
      }
      &__detail {
        display: flex;
        justify-content: space-between;
        padding-right: 0.18rem;
        .detail__prices {
          &__now {
            color: #e93b3b;
            font-size: 0.14rem;
            font-weight: 550;
            margin-right: 0.06rem;
          }
          &__before {
            color: #999999;
            text-decoration: line-through;
            font-size: 0.1rem;
          }
        }
        .detail__count {
          button {
            border-radius: 50%;
            width: 0.2rem;
            height: 0.2rem;
            outline: none;
            font-size: 0.12rem;
          }
          &__sub {
            background-color: #fff;
            color: #666;
            border: 1px solid #666;
          }
          &__add {
            background-color: #0091ff;
            border: none;
            color: #fff;
          }
          .count {
            margin: 0 0.1rem;
            font-size: 0.14rem;
          }
        }
      }
    }
    &__gap {
      width: 100%;
      height: 1px;
      margin-top: 0.12rem;
      background: #f1f1f1;
    }
  }
  &__gap {
    width: 100%;
    height: 0.01rem;
    background-color: #f1f1f1;
  }
}
</style>
