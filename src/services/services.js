import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
 
  //删除角色
  // role_del(id) {
  //   return _http.request({
  //     type: 'delete',
  //     url: `api/private/v1/roles/${id}`,
  //   })
  // }
  //登录
  login_home() {
    return _http.request({
      url: `apis/user/pc/api/user/login/password`,
      data:{
         clientId: "lkb65617f842ad4c37895a733b8de43cbb",
         ip: "127.0.0.0",
         mobile: "13800000000",
         password: "123456",
       }   
    })
  }
}

export default Product
