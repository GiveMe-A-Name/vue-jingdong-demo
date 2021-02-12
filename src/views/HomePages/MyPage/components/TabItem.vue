<template>
  <div class="tabitem">
      <img src="@/assets/钱包.jpg" class="tabitem__headimg" />
      <div class="tabitem__text">{{tabDesc.text}}</div>
      <div class="iconfont" >&#xe62b;</div>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  props: ['tabDesc']
}
</script>

<style lang="scss" scoped>
.tabitem{
    display: flex;
    position: relative;
    margin-top: .16rem;
    &__headimg{
        width: .22rem;
        height: .22rem;
        line-height: .22rem;
        text-justify: bottom;
    }
    &__text{
        font-size: .14rem;
        color: #262626;
        line-height: .22rem;
        font-weight: 550;
        margin-left: .16rem;
    }
    .iconfont{
        position: absolute;
        right: 0;
    }
}
</style>
