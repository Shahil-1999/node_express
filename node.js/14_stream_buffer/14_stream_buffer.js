const fs = require('fs')
const http = require('http')

fs.writeFile("example.txt", 'hello everyone\nmy name is Shahil Kumar Chourasia\ni am from west bengal\n',( () =>{
    console.log('file created');
} ));
fs.appendFile("example.txt", 'Good Morning',() =>{
    
});

const server = http.createServer()
server.on("request",(request, response)=>{
    

    //way 1


    // fs.readFile("example.txt", "utf-8",(err, data) =>{
    //     if(err){
    //         console.log('Error is : ', err);
    //     }
    //     else{

    //         response.end(data);
    //     }
       
    
    // } )

    // way 2

    const rStream = fs.createReadStream('example1.txt')
    rStream.on('data',(chunkData) =>{   // data = this event is fired when there is data available to read.
        response.write(chunkData)   //to write data
    });
    rStream.on('end', ()=>{   // end = this event is fired when there is no more data to read.
        response.end()  // to show that data
    })

    rStream.on('error', (err)=>{   // error = this event is fired when there is any error recieving or write data
        console.log(err);
        response.end("<h1> 404 Error </h1>")

    })
})
server.listen(3001, "127.0.0.1");
