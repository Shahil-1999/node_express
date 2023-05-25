
const http = require('http')
const fs = require('fs')


const server = http.createServer((request, response) => {
    if (request.url == "/"){
        response.end("Home page");
    }
    else if(request.url == "/about"){
        response.end("About Page");
    }

   
    else{
        response.writeHead(404) // Simply pass the error status code 

        response.end("404 Error page Not found")
    }
})

server.listen(3000, "127.0.0.1",() =>{
    console.log("now you Enter host 3000");

 })
