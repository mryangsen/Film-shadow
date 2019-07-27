
var state= {
   cityName:"郑州",
   hostoryCity:["郑州"]
   
}
var mutations = {
    setName(state,name){
        state.cityName = name
    },
    hostoryName(state,name){
        if(!state.hostoryCity.some(item => item == name)){
          return  state.hostoryCity.push(name)
        }else{
            return 
        }
    }
  
}
var getters = {
  CityName(state){
      return state.cityName
  }
}
var actions= {
  
}
export default {
    //命名空间，防止冲突
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}