import { ref } from 'vue'
import { get } from '@/utils/request'
import store from '@/store'
const useGetNearByItemsEffect = (deps = {}) => {
  const nearbyItemLists = ref(null)
  const { nearbyStoreLists } = store.state
  // 如果Store中已经存在了， 那么就直接从Store中取数据。
  // 用户在第二次加载这个组件的时候，是不用再去请求后端的。
  // 有两个好处
  // 1. 减少向后端请求次数
  // 2. 由于是前端加载数据，减少了用户加载该组件显示数据的时间
  if (nearbyStoreLists.length > 0) {
    nearbyItemLists.value = nearbyStoreLists
    return {
      nearbyItemLists
    }
  }
  get('/api/hot-list')
    .then((response) => {
      if (response?.data?.errorno === 0) {
        const ItemLists = response?.data?.data
        nearbyItemLists.value = ItemLists
        store.commit('setNearByStoreLists', ItemLists)
      } else {
        throw Error(response?.data?.message || response?.data?.desc)
      }
    })
    .catch((error) => {
      deps.showToast(error)
    })
  return {
    nearbyItemLists
  }
}

export default useGetNearByItemsEffect
