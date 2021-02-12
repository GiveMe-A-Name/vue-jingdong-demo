import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '@/utils/request.js'

// useLoginEffect 用户登录函数
// dep: 注入依赖
/*
  return {
    handleLoginSubmit, 用户登录Ajax函数
    data  用户登录数据
  }
*/
const useLoginEffect = (deps = {}) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLoginSubmit = async() => {
    try {
      const response = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (response?.data?.error === 0) {
        localStorage.isLogin = true
        router.push({ name: 'HomePage' })
      } else {
        deps.showToast('登录失败')
      }
    } catch {
      deps.showToast('请求失败')
    }
  }
  return {
    handleLoginSubmit,
    data
  }
}
export default useLoginEffect
