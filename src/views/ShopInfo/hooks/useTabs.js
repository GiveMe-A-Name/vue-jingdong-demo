import { ref, reactive } from 'vue'
const useTabs = () => {
  const tabsAcitveId = ref(0)
  const handleTabs = (index) => {
    tabsAcitveId.value = index
  }
  const tabsText = reactive([
    { name: '全部商品', tag: 'all' },
    { name: '秒杀', tag: 'seckill' },
    { name: '休闲水果', tag: 'fruit' },
    { name: '时令蔬菜', tag: 'vegetables' },
    { name: '肉蛋家禽', tag: 'meats' }
  ])
  return {
    tabsAcitveId,
    handleTabs,
    tabsText
  }
}
export default useTabs
