import { useStore } from 'vuex'
const handleCount = (IDs) => {
  const store = useStore()
  const handleSub = () => {
    store.commit('hanldeAddProductCount', {
      storeId: IDs.storeId,
      ProductId: IDs.productId,
      handleType: 'Sub'
    })
  }
  const handleAdd = () => {
    store.commit('hanldeAddProductCount', {
      storeId: IDs.storeId,
      ProductId: IDs.productId,
      handleType: 'Add'
    })
  }
  return {
    handleSub,
    handleAdd
  }
}
export default handleCount
