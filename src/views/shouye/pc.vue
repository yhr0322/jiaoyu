<template>
  <div class="homea">
  <left></left>
 <div class="box_conrent">
  <top></top>
 <div class="box_right">
 <p class="p_title">凑合看一下吧！主要是为了Git!!!</p>

 </div>
 </div>
   
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import left from "@/components/left.vue";
import top from "@/components/top.vue";

 export default {
 
  components: {
      left,top
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
