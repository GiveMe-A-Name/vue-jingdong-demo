import { reactive } from 'vue'
import { useStore } from 'vuex'
const useCount = ({ storeId, productId }) => {
  const { storeProductItems } = useStore().state
  // 当前商店
  const currentStore = storeProductItems.find(item => {
    return item._id === storeId
  })
  // 从当前商店的列表中，找到当前商品
  const currentProduct = reactive(currentStore.productItems.find(item => {
    return item._id === productId
  }))
  const handleSub = () => {
    currentProduct.count--
  }
  const handleAdd = () => {
    currentProduct.count++
  }
  return {
    handleSub,
    handleAdd
  }
}
export default useCount
