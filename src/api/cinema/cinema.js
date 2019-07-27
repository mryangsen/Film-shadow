import Mock from 'mockjs'
const Random = Mock.Random;

function getCinema(){
    var cinema = [];
    for(var i = 0; i < 10; i ++){
        cinema.push({
            id: Random.guid(),
            name: Random.ctitle(4,10),
            price: Random.integer(15,30),
            site: Random.county(),
            dis: Random.integer(1,5),
            pes2: Random.ctitle(7,15),
            pes3: Random.ctitle(7,14),
            pes4: Random.cparagraph(1)
        })
    }


    var promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(cinema)
        }, 200);
    })
    return promise;
}

export default {
    getCinema
}
