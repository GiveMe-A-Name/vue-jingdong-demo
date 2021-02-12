<template>
  <div class="icons__item">
    <img
      class="icons__item__img"
      :src="item.imgSrc"
      alt=""
    >
    <p class="icons__item__desc">{{ item.desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'IconItem',
  props: ['item']
}
</script>

<style lang="scss" scoped>
.icons__item {
  text-align: center;
  width: 20%;
  &__img {
    width: 0.4rem;
    height: 0.4rem;
  }
  &__desc {
    margin-top: 0.06rem;
  }
}
</style>
