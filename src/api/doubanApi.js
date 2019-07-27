  
  var bsuserDomain = "http://59.110.138.169/api/douban/movie"
  var in_theaters = "/in_theaters"
  var top250 = "/top250"
  var coming_soon = "/coming_soon"
  var API = {
    //正在热映
    in_theaters: bsuserDomain+in_theaters,
    //top250
    top250: bsuserDomain+top250,
    //即将上映
    coming_soon: bsuserDomain+coming_soon,
  }
  export default API;