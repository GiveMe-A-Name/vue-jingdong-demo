import axios from 'axios'
// 将请求进行拆分，并且设置配置项baseURL 和  'Content-Type': 'application/json'的headers
const post = async(url, data = {}) => {
  return await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json'
    },
    baseURL: 'https://www.fastmock.site/mock/db2aae592ad80473b7712a94b42c4d7c/_jingdong'
  })
}
const get = async(url) => {
  return await axios.get(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    baseURL: 'https://www.fastmock.site/mock/db2aae592ad80473b7712a94b42c4d7c/_jingdong'
  })
}
export {
  post,
  get
}
