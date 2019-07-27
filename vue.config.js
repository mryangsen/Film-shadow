const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
   chainWebpack: (config)=>{
     config.resolve.alias
         .set('@assets',resolve('src/assets'))
         .set('@components',resolve('src/components'))
         .set('static',resolve('src/static'))
   }
}