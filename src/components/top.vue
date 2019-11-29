<template>
  <div class="top">
   <div class="top_top">
   <p>
   <span @click="zero">首页</span>
   <span @click="respone">退出登录</span>
   </p>
   <img src="../assets/gif.gif" alt="">
   </div>
   <div class="top_bottom"></div>
   <el-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</el-tag>
  <el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag.namea}}
</el-tag>
  </div>
</template>

<script >
import { Component, Prop, Vue } from "vue-property-decorator";
import storea from "../api/indexa.js"
export default {
  data() {
    return {
     
       tags: [
          { name: '首页', type: 'success' },
        ],
        token:''
    }
  },
  computed: {
    dynamicTags(){
      return this.$store.state.dynamicTags
    }
  },
  methods: {
     handleClose(tag) {
       
        this.$store.commit('handleClose',tag)
      },
      zero(){
        this.$router.push('/dashboard')
      },
      respone(){
         storea.save("token", this.token)
         this.$router.push("/")
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
