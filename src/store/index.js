import { createStore } from 'vuex'
export default createStore({
  state: {
    nearbyStoreLists: [],
    storeProductItems: [],
    homePageActiveId: 0
  },
  mutations: {
    setNearByStoreLists(state, payload) {
      state.nearbyStoreLists = payload
    },
    setVuxStateFromSessionStorage(state, payload) {
      if (typeof payload !== 'object') {
        return
      }
      for (const key in state) {
        state[key] = payload[key]
      }
    },
    setHomePageActiveId(state, _id) {
      state.homePageActiveId = _id
    },
    setStoreProductItems(state, productItem) {
      state.storeProductItems.push(productItem)
    },
    hanleProductCount(state, { storeId, productId, handleType }) {
      // 获得商店列表
      const { storeProductItems } = state
      // 当前商店
      const currentStore = storeProductItems.find(item => {
        return item._id === storeId
      })
      // 从当前商店的列表中，找到当前商品
      const currentProduct = currentStore.productItems.find(item => {
        return item._id === productId
      })
      switch (handleType) {
        case 'add':
          currentProduct.count++
          break
        case 'sub':
          currentProduct.count--
          break
        default:
      }
    }
  },
  getters: {
    getNearByStoreItem(state) {
      console.log('hello')
    }
  },
  actions: {
  },
  modules: {
  }
})
