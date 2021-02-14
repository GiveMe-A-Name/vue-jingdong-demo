import { toRefs, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { get } from '@/utils/request.js'

const getProductItemLists = (storeId) => {
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
        const Data = response?.data?.data
        for (const item of Data) {
          item.count = 0
        }
        data.productItems = Data
        store.commit('setStoreProductItems', {
          _id: storeId,
          productItems: Data
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

const getProductItems = ({ tabsText, tabsAcitveId }) => {
  const { productItems } = toRefs(getProductItemLists('1').data)
  const currentProductItems = computed(() => {
    const tag = tabsText[tabsAcitveId.value].tag
    if (tag === 'all') {
      return productItems.value
    }
    return productItems.value.reduce((preArr, curItem) => {
      if (curItem.tag === tag) {
        preArr.push(curItem)
      }
      return preArr
    }, [])
  })
  return {
    currentProductItems,
    productItems
  }
}
export default getProductItems
