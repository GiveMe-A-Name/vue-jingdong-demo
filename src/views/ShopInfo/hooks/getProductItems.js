import { ref } from 'vue'
import { get } from '@/utils/request.js'
const getProductItem = () => {
  const productItems = ref(null)
  get('/api/shop/1/products').then(
    response => {
      if (response?.data?.errno === 0) {
        productItems.value = response?.data?.data
      } else {
        throw new Error(response?.data?.message)
      }
    }
  ).catch(
    error => {
      console.log(error)
    }
  )
  return { productItems }
}
export default getProductItem
