import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: {},//登录时保存的数据
    token: "",//登录的token
    list_left: [],//左侧列表的数据
    dynamicTags: [],//动态改变title的值
  },
  mutations: {
    handleClose(state,tag) {
      state.dynamicTags.splice(state.dynamicTags.indexOf(tag), 1);
    },
    // handleOpen_tag(state, obj) {
      
     
    // },
    // handleClose_tag(state, obj) {

    // },
  },
  actions: {},
  modules: {}
});
