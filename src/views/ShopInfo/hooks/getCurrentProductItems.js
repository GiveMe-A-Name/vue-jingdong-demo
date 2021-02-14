import { toRefs, computed } from 'vue'
import getProductItems from './getProductItems'
const getCurrentProductItems = ({ tabsText, tabsAcitveId }) => {
  const { productItems } = toRefs(getProductItems('1').data)
  const currentProductItems = computed(() => {
    const tag = tabsText[tabsAcitveId.value].tag
    if (tag === 'all') {
      return productItems.value
    }
    return productItems.value.reduce((preArr, curItem) => {
      if (curItem.tag === tag) {
        preArr.push(curItem)
      }
      return preArr
    }, [])
  })
  return { currentProductItems }
}
export default getCurrentProductItems
