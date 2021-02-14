import { useStore } from 'vuex'
const useCount = ({ storeId, productId }) => {
  const store = useStore()
  const handleSub = () => {
    store.commit('hanleProductCount', {
      storeId,
      productId,
      handleType: 'sub'
    })
  }
  const handleAdd = () => {
    store.commit('hanleProductCount', {
      storeId,
      productId,
      handleType: 'add'
    })
  }
  return {
    handleSub,
    handleAdd
  }
}
export default useCount
