import { useStore } from 'vuex'
import { onUnmounted } from 'vue'
const useSetState = () => {
  const store = useStore()
  const setVuxStateToSessionStorage = () => {
    sessionStorage.setItem(
      'vuexState',
      JSON.stringify({ ...store.state })
    )
  }
  return { setVuxStateToSessionStorage }
}
const useClearState = () => {
  const clearVuexStateInSessionStorage = () => {
    sessionStorage.removeItem('vuexState')
  }
  return { clearVuexStateInSessionStorage }
}
const useGetState = () => {
  const store = useStore()
  const getVuxStateFromSessionStorage = () => {
    store.commit(
      'setVuxStateFromSessionStorage',
      JSON.parse((sessionStorage.getItem('vuexState') || '0'))
    )
  }
  return { getVuxStateFromSessionStorage }
}

const useSessionStorage = () => {
  const { setVuxStateToSessionStorage } = useSetState()
  const { clearVuexStateInSessionStorage } = useClearState()
  const { getVuxStateFromSessionStorage } = useGetState()
  window.onunload = setVuxStateToSessionStorage
  window.onload = clearVuexStateInSessionStorage
  getVuxStateFromSessionStorage()
  onUnmounted(() => {
    window.onunload = null
    window.onload = null
  })
}
export default useSessionStorage
