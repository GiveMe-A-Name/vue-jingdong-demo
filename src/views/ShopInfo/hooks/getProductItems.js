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
        // 添加购物车功能，把每个商品都加一个count=0字段
        const resData = [...response?.data?.data]
        for (const item of resData) {
          item.count = 0
        }
        data.productItems = resData
        store.commit('setStoreProductItems', {
          _id: storeId,
          productItems: resData
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
