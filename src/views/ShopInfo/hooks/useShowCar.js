// 控制是否要显示购物车蒙层
import { ref } from 'vue'
const useShowCar = () => {
  const showShoppingCar = ref(false)
  const handleShowCar = () => {
    showShoppingCar.value = !showShoppingCar.value
  }
  return {
    showShoppingCar,
    handleShowCar
  }
}
export default useShowCar
