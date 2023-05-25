const fs = require('fs');
const http = require('http');

fs.writeFile("example.txt", 'hello everyone\nmy name is Shahil Kumar Chourasia\ni am from west bengal\n',( () =>{
    console.log('file created');
} ));
fs.appendFile("example.txt", 'Good Morning',() =>{
    
});

const server = http.createServer();
server.on("request",(request, response)=>{


    const rStream = fs.createReadStream('example.txt');
    const rStream1 = fs.createReadStream('example1.txt');

    if (request.url == "/example1"){
        
        rStream.on('data',(chunkData) =>{   // data = this event is fired when there is data available to read.
            response.write(chunkData)   //to write data
        });
        rStream.on('end', ()=>{   // end = this event is fired when there is no more data to read.
            response.end()  // to show that data
        });
    }

    else if(request.url == "/"){
        
         rStream1.on('data',(chunkData1) =>{   // data = this event is fired when there is data available to read.
            response.write(chunkData1)   //to write data
         });
         rStream1.on('end', ()=>{   // end = this event is fired when there is no more data to read.
            response.end()  // to show that data
        });
    }


})
server.listen(8001, "127.0.0.1");
