<template>
    <div class="appHome">
        <router-view></router-view>
        <docker />
    </div>
</template>

<script>
import Docker from './Docker'
export default {
  name: 'AppHome',
  components: {
    Docker
  }
}
</script>
<style scoped>

</style>
