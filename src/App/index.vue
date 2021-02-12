<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
import useLocalStorage from './hooks/useLocalStorage'
export default {
  name: 'App',
  setup() {
    useLocalStorage()
  }
}
</script>
<style lang="scss" scoped>

</style>
