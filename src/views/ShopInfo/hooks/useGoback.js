import { useRouter } from 'vue-router'
const useGoback = () => {
  const router = useRouter()
  const goBack = () => {
    router.go(-1)
  }
  return {
    goBack
  }
}
export default useGoback
