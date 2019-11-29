<template>
  <div class="homea">
  <left></left>
 <div class="box_conrent">
  <top></top>
 <div class="box_right" id="myChart">
 <p class="p_title">四哥呀，以后就不是四哥了，以后是王主任</p>

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
