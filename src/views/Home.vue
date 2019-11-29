<template>
  <div class="login_box">
    <div class="login_content">
      <img src="@/assets/smallsi.jpg" alt="">
      <el-input placeholder="请输入用户名" prefix-icon="el-icon-user-solid" v-model="login_user">
      </el-input>
      <el-input placeholder="请输入密码" prefix-icon="el-icon-s-help" v-model="login_pass">
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
  import {
    login,list_left
  } from "../api/yin.js"
  import storea from "../api/indexa.js"
  export default {
    name: "home",
    components: {
      //  HelloWorld,
    },
    data() {
      return {
        login_user: '13800000000', //登陆时用户名
        login_pass: "123456", //登陆时密码
        list: [], //登录返回的数据
      }
    },
    methods: {
      but_null() {
        this.login_user = ""
        this.login_pass = ""
      },
      async login_login() {
        let obj = {
          clientId: "lkb65617f842ad4c37895a733b8de43cbb",
          ip: "127.0.0.0",
          mobile:  this.login_user,
          password: this.login_pass,
        }
        let res =await login(obj)
        window.console.log(res)
         this.$store.state.list=res.data
         this.$store.state.token=res.data.token
         storea.save("token", this.$store.state.token)
         if(res.data.token){
           this.$router.push("/dashboard")
         }
        // axios.post("http://www.wyunfei.com:8002/apis/user/pc/api/user/login/password",{
        //      clientId: "lkb65617f842ad4c37895a733b8de43cbb",
        //      ip: "127.0.0.0",
        //      mobile: "13800000000",
        //      password: "123456",
        // }).then((res)=>{
        //   window.console.log(res)
        // })
      }
    }
  };
</script>
