
const http = require('http')
const fs = require('fs')


const server = http.createServer((request, response) => {

    const data =  fs.readFileSync("API.json", "UTF-8")    // We use File Sync because we dont read data again nd again
    const objformat = JSON.parse(data);

    if (request.url == "/"){
        response.end("Home page");
    }
    else if(request.url == "/about"){
        response.end("About Page");
    }
    else if(request.url == "/api"){

        response.writeHead(200, {"Content-type" : "application/json"}); // Simply pass the  status code and status message if u work with json then u have to write application
        response.end(objformat[2].name)

    }

   
    else{
        response.writeHead(404, {"Content-type" : "text/html"}) 

        response.end("<h1> 404 Error page Not found </h1>")
    
    }
})

server.listen(3000, "127.0.0.1",() =>{
    console.log("now you Enter host 3000");

 })
