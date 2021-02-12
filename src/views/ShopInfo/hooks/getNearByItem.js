import { ref } from 'vue'
import { useStore } from 'vuex'
const getNearByItem = (_id) => {
  const store = useStore()
  const nearbyItem = ref({})
  const { nearbyStoreLists } = store.state
  nearbyItem.value = nearbyStoreLists.find((item) => {
    return item._id === _id
  }) || {}
  return {
    nearbyItem
  }
}
export default getNearByItem
