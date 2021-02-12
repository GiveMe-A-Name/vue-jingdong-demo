import { createStore } from 'vuex'
export default createStore({
  state: {
    nearbyStoreLists: [],
    homePageActiveId: 0
  },
  mutations: {
    setNearByStoreLists(state, payload) {
      state.nearbyStoreLists = payload
    },
    setVuxStateFromLocalStorage(state, payload) {
      for (const key in state) {
        state[key] = payload[key]
      }
    },
    setHomePageActiveId(state, _id) {
      state.homePageActiveId = _id
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
