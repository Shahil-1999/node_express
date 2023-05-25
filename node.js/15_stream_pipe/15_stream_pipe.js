const fs = require('fs')
const http = require('http')

fs.writeFile("example.txt", 'hello everyone\nmy name is Agastya\ni am from west bengal\n',( () =>{
    console.log('file created');
} ))
fs.appendFile("example.txt", 'Good Morning',() =>{
    
})

const server = http.createServer()
server.on("request",(request, response)=>{
    

    //way 3
    const rstream = fs.createReadStream('example.txt');
    rstream.pipe(response)
    




   
})
server.listen(3001, "127.0.0.1");
