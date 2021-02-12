import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '@/utils/request.js'

// useRegisterEffect 用户注册Hook
// dep: 注入依赖
/*
  return {
    userData,  用户注册数据
    handleRegisterSubmit 用户注册Ajax函数
  }
*/
const useRegisterEffect = (deps = {}) => {
  const router = useRouter()
  const userData = reactive({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const handleRegisterSubmit = async() => {
    if (userData.password !== userData.confirmPassword) {
      deps.showToast('输入密码不一致')
      return
    }
    try {
      const response = await post('/api/user/login', {
        username: userData.username,
        password: userData.password
      })
      if (response?.data?.error === 0) {
        deps.showToast('2秒后自动跳转到登录页面')
        setTimeout(() => {
          router.push({ name: 'Login' })
        }, 2000)
      } else {
        deps.showToast('注册失败')
      }
    } catch {
      deps.showToast('请求失败')
    }
  }
  return {
    userData,
    handleRegisterSubmit
  }
}
export default useRegisterEffect
