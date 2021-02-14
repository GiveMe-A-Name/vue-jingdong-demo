<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
import useSessiontorage from './hooks/useSessiontorage'
export default {
  name: 'App',
  setup() {
    useSessiontorage()
  },
  mounted() {
    console.log('页面信息', this.$store.state)
  }
}
</script>
<style lang="scss" scoped>
</style>
