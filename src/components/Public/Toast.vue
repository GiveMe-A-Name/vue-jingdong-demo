<template>
  <div class="toast">
    {{message}}
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Toast.vue',
  props: {
    message: {
      type: String,
      require: true
    }
  }
}

export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    toastMessage: ''
  })
  const showToast = (message) => {
    toastData.toastMessage = message
    toastData.showToast = true
    setTimeout(() => {
      toastData.showToast = false
    }, 2000)
  }
  return {
    toastData, // 提示信息
    showToast // 提示信息操作
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  border-radius: 0.05rem;
  background-color: rgba(0, 0, 0, 0.35);
  color: #fff;
}
</style>
