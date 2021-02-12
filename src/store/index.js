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
      for (const key in state) {
        state[key] = payload[key]
      }
    },
    setHomePageActiveId(state, _id) {
      state.homePageActiveId = _id
    },
    setStoreProductItems(state, productItem) {
      state.storeProductItems.push(productItem)
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
