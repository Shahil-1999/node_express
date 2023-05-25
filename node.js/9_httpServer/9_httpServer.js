const http = require('http')

// Now we have to declare call back function
 const server = http.createServer((request, response) => {
    response.end("Request from another side")   // End Means End user

 });

 server.listen(3001, "127.0.0.1",() =>{
    console.log("now you Enter host 3001");

 })      // First parameter is port number , second is localhost



