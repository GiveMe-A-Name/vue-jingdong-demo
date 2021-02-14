<template>
  <div class="docker">
    <router-link  :to="{path: item.link}"
      class="docker__item"
      v-for="(item, index) of dockerItemLists"
      :class="{'docker__item--active': homePageActiveId ==  index }"
      :key="item.title"
      @click="dockerItemActive(index)"
    >
      <div
        class="iconfont"
        v-html="item.iconfont"
      />
      <div class="docker__title">{{item.title}}</div>
    </router-link>
  </div>
</template>

<script>
import useDockerItemLists from './hooks/useDockerItemLists'
import useDockerItemActiveEffect from './hooks/useDockerItemActiveEffect'
export default {
  name: 'Docker',
  setup() {
    const { homePageActiveId, dockerItemActive } = useDockerItemActiveEffect()
    const { dockerItemLists } = useDockerItemLists()
    return {
      homePageActiveId,
      dockerItemActive,
      dockerItemLists
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/minxs.scss';
.docker {
  background: #f5f5f5;
  display: flex;
  position: fixed;
  padding: 0 0.18rem;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border: 0.01rem solid #fff;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: $content-fontcolor;
    .iconfont {
      font-size: 0.18rem;
      margin: 0.08rem 0 0.03rem 0;
    }
    &--active {
      color: #1fa4fc;
    }
  }

  &__title {
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
