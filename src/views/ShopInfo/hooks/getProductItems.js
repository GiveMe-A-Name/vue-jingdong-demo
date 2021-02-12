import { reactive } from 'vue'
import { get } from '@/utils/request.js'
import { useStore } from 'vuex'

const getProductItem = (storeId) => {
  const store = useStore()
  const data = reactive({
    productItems: null
  })
  data.productItems = store.state.storeProductItems.find(item => {
    return item._id === storeId
  })
  if (data.productItems) {
    data.productItems = data.productItems?.productItems
    return {
      data
    }
  }
  get(`/api/shop/${storeId}/products`).then(
    response => {
      if (response?.data?.errno === 0) {
        data.productItems = response?.data?.data
        store.commit('setStoreProductItems', {
          _id: storeId,
          productItems: response?.data?.data
        })
      } else {
        throw new Error(response?.data?.message)
      }
    }
  ).catch(
    error => {
      console.log(error)
    }
  )
  return { data }
}
export default getProductItem
