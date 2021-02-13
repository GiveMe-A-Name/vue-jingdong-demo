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
      for (const key in payload) {
        state[key] = payload[key]
      }
    },
    setHomePageActiveId(state, _id) {
      state.homePageActiveId = _id
    },
    setStoreProductItems(state, productItem) {
      state.storeProductItems.push(productItem)
    },
    hanldeAddProductCount(state, payload) {
      const { storeId, ProductId, handleType } = payload
      const storeProducts = state.storeProductItems.find(item => {
        return item._id === storeId
      }).productItems
      const product = storeProducts.find((item) => {
        return item._id === ProductId
      })
      switch (handleType) {
        case 'Add':
          product.count++
          break
        case 'Sub':
          product.count--
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
