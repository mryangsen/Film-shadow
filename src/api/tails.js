import Mock from 'mockjs'

const Random = Mock.Random;

 function DetailsApi(){
    var datas = [];
    datas.push({
        id: Random.guid(),   //require 必须确保图片存在  直接引入图片资源 里边不能拼接变量 
        times:Random.time(),
        // moneys:Random.natural(30, 50),
        
    })
    // for(var i=0; i<8; i++ ){
    //     datas.push({
    //         id: Random.guid(),   //require 必须确保图片存在  直接引入图片资源 里边不能拼接变量 
    //         datas:Mock.mock('@date'),
            
    //     })
    // }
    var promise = new Promise((resolve,reject)=>{
        // 模拟延迟
        setTimeout(()=>{
            resolve(datas);
        },200)
    });
    // console.log(promise)
    return promise;
    


}

//api模块  往外导出 对象 导出模块
export default {
    DetailsApi


}

 