import detailImg from '@/assets/mock/tast.js'
function getDetailimgs(){
    var detailImgapi= detailImg.information()
    var promise = new Promise((reslove, reject) => {
        reslove(detailImgapi)
    });
    return promise;
}
export default {
    getDetailimgs
}
