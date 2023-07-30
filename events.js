const  eventEmitter= require('events');
const http = require('http');

const server=http.createServer()
class Sales extends eventEmitter
{
    constructor(){
        super()
    }
}
const myEvent=new Sales()

myEvent.on("newSale",()=>{
    console.log("this is first new sale");
})
myEvent.on("newSale",()=>{
    console.log("this is first new sale");
})
myEvent.on("newSale",()=>{
    console.log("this is first new sale");
})
myEvent.on("newSale",()=>{
    console.log("this is first new sale");
})
myEvent.emit('newSale')


server.on("request",(req,res)=>{
    console.log("request one");
    console.log(req.url);
    res.end("request one in website")
})

server.listen("3000",'127.0.0.1',()=>{
    console.log('the server is hosted in port number 3000 and on local host');
})
