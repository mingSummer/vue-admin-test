import axios from 'axios'

const service = axios.create({
  baseURL: 'https://apis.imooc.com', // 慕课网防盗版域名
  timeout: 50000
})

service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      console.log(response.data)
      return response.data
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  error => { // 响应失败的处理
    return Promise.reject(error) // 返回一个错误处理
  }
)

export default service
