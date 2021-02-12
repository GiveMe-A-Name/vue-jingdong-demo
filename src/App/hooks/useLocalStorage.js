import { useStore } from 'vuex'
import { onUnmounted } from 'vue'
const useSetState = () => {
  const store = useStore()
  const setVuxStateToLocalStorage = () => {
    localStorage.setItem(
      'vuexState',
      JSON.stringify({ ...store.state })
    )
  }
  return { setVuxStateToLocalStorage }
}
const useClearState = () => {
  const clearVuexStateInLocalStorage = () => {
    localStorage.removeItem('vuexState')
  }
  return { clearVuexStateInLocalStorage }
}
const useGetState = () => {
  const store = useStore()
  const getVuxStateFromLocalStorage = () => {
    store.commit(
      'setVuxStateFromLocalStorage',
      JSON.parse(localStorage.getItem('vuexState') || {})
    )
  }
  return { getVuxStateFromLocalStorage }
}

const useLocalStorage = () => {
  const { setVuxStateToLocalStorage } = useSetState()
  const { clearVuexStateInLocalStorage } = useClearState()
  const { getVuxStateFromLocalStorage } = useGetState()
  window.onunload = setVuxStateToLocalStorage
  window.onload = clearVuexStateInLocalStorage
  getVuxStateFromLocalStorage()
  onUnmounted(() => {
    window.onunload = null
    window.onload = null
  })
}
export default useLocalStorage
