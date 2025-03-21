const http = require('http');

const server = http.createServer((req,resp)=>{
    resp.end("hello http")
})

server.listen(2000,()=>{
    console.log("connected successfully");
})
