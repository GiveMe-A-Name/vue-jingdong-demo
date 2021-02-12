import { useStore } from 'vuex'
import { computed } from 'vue'
const useDockerItemActiveEffect = () => {
  const store = useStore()
  const dockerItemActive = (index) => {
    store.commit('setHomePageActiveId', index)
  }
  const homePageActiveId = computed(() => store.state.homePageActiveId)
  return {
    homePageActiveId,
    dockerItemActive

  }
}
export default useDockerItemActiveEffect
