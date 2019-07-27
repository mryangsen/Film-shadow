import tickMock from '@/mock/tick.js'
function getTicketImgs(){
    var imgs = tickMock.ticketImgs();
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(imgs);
    },200)
})
}
export default {
    getTicketImgs
}