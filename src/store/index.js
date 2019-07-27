import Vue from 'vue'
import Vuex from 'vuex'
import City from "./modules/city"

Vue.use(Vuex)

export default new Vuex.Store({
 modules:{
  City
 }
})
