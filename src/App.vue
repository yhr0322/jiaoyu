<template>
  <div id="app">
  <router-view/>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
  
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
