<template>
  <div class="order">
    <header class="order__title">我的订单</header>
    <div class="order__items">
      <order-item
        v-for="orderItem in orderItemLists"
        :key="orderItem.storeName"
        :orderItemDesc="orderItem" />
    </div>
  </div>
</template>

<script>
import OrderItem from './components/OrderItem.vue'
export default {
  name: 'OrderPage',
  components: {
    OrderItem
  },
  data() {
    return {
      orderItemLists: [
        {
          storeName: '沃尔玛',
          status: '已取消',
          imgsSrc: [''],
          totalPrice: 66.69,
          amount: 6
        },
        {
          storeName: '沃尔玛1',
          status: '已取消',
          imgsSrc: [''],
          totalPrice: 66.69,
          amount: 6
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
.order {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: $content-fontcolor;
  background-color: #f5f5f5;
  &__title {
    font-size: 0.16rem;
    text-align: center;
    padding: 0.11rem 0;
    background-color: #ffffff;
  }
  &__items {
    padding: 0 0.18rem 0.18rem;
  }
}
</style>
