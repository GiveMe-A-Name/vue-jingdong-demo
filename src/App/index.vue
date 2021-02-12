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
  }
}
</script>
<style lang="scss" scoped>

</style>
