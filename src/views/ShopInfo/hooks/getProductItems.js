import { reactive } from 'vue'
import { get } from '@/utils/request.js'
import { useStore } from 'vuex'

const getProductItem = (storeId) => {
  const store = useStore()
  const data = reactive({
    productItems: null
  })
  // 从store中取出具体商店的商品列表
  data.productItems = store.state.storeProductItems.find(item => {
    return item._id === storeId
  })
  if (data.productItems) {
    data.productItems = data.productItems?.productItems
    return {
      data
    }
  }
  // 如果暂时没有该商店的的数据，就从后端请求，
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
