<template>
   <div class="login_box">
   <div class="login_content">
   <img src="@/assets/smallsi.jpg" alt="">
   <el-input
    placeholder="请输入用户名"
    prefix-icon="el-icon-user-solid"
    v-model="login_user">
  </el-input>
  <el-input
    placeholder="请输入密码"
    prefix-icon="el-icon-s-help"
    v-model="login_pass">
  </el-input>
  <div class="login_butt">
   <el-button type="primary" @click="login_login">登录</el-button>
  <el-button type="primary" @click="but_null">重置</el-button>
  
  </div>
 <p>还没有账号，点击一键注册</p>
   </div>
   
   </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import storea from "../utils/js/indexa.js"
import Product from '../services/services.js'
const _product = new Product()
export default {
  name: "home",
  components: {
  //  HelloWorld,
  },
  data() {
    return {
      login_user:'13800000000',//登陆时用户名
      login_pass:"123456",//登陆时密码
    }
  },
  methods: {
   but_null(){
     this.login_user=""
     this.login_pass=""
   },
   login_login(){
    //  let obj={
    //     username:this.login_user,
    //     password:this.login_pass
    //   }
      _product.login_home().then(res => {
        window.console.log(res)
    })
   }
  }
};
</script>
