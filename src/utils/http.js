import config from '../config/index'
import Axios from 'axios'
import Qs from 'qs'
import storea from "./js/indexa.js"

// Axios.interceptors.request.use(config => {
//   //为请求头对象，添加token验证的Authorization字段
//   config.headers.Authorization = storea.fetch('token')
//   return config
// })
// 定义HTTP类
class HTTP {
  // HTTP下面的方法
  request(params) {
    
    return new Promise((resolve, reject) => {
      Axios({
        method: params.type || 'get',
        url: config.baseUrl + params.url,
        data: Qs.stringify(params.data)
      }).then(res => {
        // console.log(res)
        // if (!res.code) {
        //   //  alert('请求成功')
        // }
        resolve(res)
      })
    })
  }
}
export default HTTP
