import { reactive } from 'vue'
const useDockerItemLists = () => {
  const dockerItemLists = reactive([
    { iconfont: '&#xe604;', title: '首页', link: '/' },
    { iconfont: '&#xe603;', title: '购物车', link: '/shoppingcar' },
    { iconfont: '&#xe619;', title: '订单', link: '/order' },
    { iconfont: '&#xe610;', title: '我的', link: '/mypage' }
  ])
  return {
    dockerItemLists
  }
}
export default useDockerItemLists
