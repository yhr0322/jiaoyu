<template>
  <div class="left">
    <el-menu 
    default-active="2"
     class="el-menu-vertical-demo" 
     @open="handleOpen" 
     @close="handleClose" 
     background-color="#545c64"
      text-color="#fff" 
      active-text-color="#ffd04b"
      router
      >
      <el-submenu  :key="index" v-for="(item,index) in list" :index="String(item.id)">
        <template slot="title">
              <i class="el-icon-location"></i>
              <span  :index="item.path">{{item.name}}</span>
</template>
        <el-submenu @click="add_tagone(items)"  :key="indexs" v-for="(items,indexs) in item.children"  :index="String(items.path)">
            <template slot="title">
               <i class="el-icon-menu"></i>
          <span   :index="items.path">{{items.name}}</span>
              </template>
          <el-menu-item @click="add_tag(itema)"  :key="indexa" v-for="(itema,indexa) in items.children" :index="itema.path">
          <i class="el-icon-menu"></i>
          <span   :index="itema.path">{{itema.name}}</span>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import {
    Component,
    Prop,
    Vue
  } from "vue-property-decorator";
  import {
    login,
    list_left
  } from "../api/yin.js"
  export default {
    data() {
      return {
        // list: [], //首页的左侧导航栏数据
        arr:[],
      }
    },
    created() {
      this.login()
    },
    computed: {
      list(){
        return this.$store.state.list_left
      }
    },
    methods: {
      //切换左侧二级菜单
      add_tagone(items){
        this.$store.commit("add_tagone",item)
      },
       //切换左侧三级菜单
      add_tag(itema){
      // this.arr.push( itema.name )
      let obj={
        patha:itema.path,
        namea:itema.name
      }
      //  this.$router.push({ path: itema.path })
     let index=this.arr.findIndex(item=>{
       return item.path==obj.path
     })
     if(index==-1){
       this.arr.push(obj)
     }
     
      this.$store.state.dynamicTags=this.arr
      },
      //登录完成后，请求左侧列表
      async login() {
        let obj = {}
        let res = await list_left(obj)
        this.$store.state.list_left = res.data.sysMenu.splice(1,res.data.sysMenu.length-1)
      },
      handleOpen(key, keyPath) {
        // window.console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // window.console.log(key, keyPath);
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
