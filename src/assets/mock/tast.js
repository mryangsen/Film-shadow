import Maok from 'mockjs'
const Random = Maok.Random
function information(){
   var array =[]
   for(var i = 0;i < (Random.natural(1,10));i ++){
       array.push({
           id:Random.guid(),
           cname:Random.cname(),
           string:Random.natural(2, 12),
           text:Random.cparagraph(),
           title:Random.ctitle( 2,5 ),
           time:Random.date(),
           number:Random.natural(10,40),
           fraction:Random.natural(1,80),
           img: Random.image('50x50',Random.color()),
       })
   }
   return array;
}
export default {
    information
}