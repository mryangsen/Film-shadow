import Mock from 'mockjs';
const Random = Mock.Random;

function ticketImgs(){
    var imgs = [];
        for(var i= 0 ; i < 5 ;i++){
            imgs.push({
                id:Random.guid(),
                title: Random.ctitle(3,5),
                title1: Random.ctitle(3,7),
                 time: Random.time("H:m"),
                 time1: Random.time("HH:mm"),
                 date:  Random.date(),
                price:  Random.integer(40,100)
                
            })
        }
        return imgs;
}
export default {
    ticketImgs
}