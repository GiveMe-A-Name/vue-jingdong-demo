import { ref } from 'vue'
const useCount = () => {
  const count = ref(1)
  const handleSub = () => {
    count.value--
  }
  const handleAdd = () => {
    count.value++
  }
  return {
    count,
    handleSub,
    handleAdd
  }
}
export default useCount
