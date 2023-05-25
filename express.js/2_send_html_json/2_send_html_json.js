const express = require('express');
const app = express();

// The callback function has 2 parameters which is request(req), and response(res). The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers etc.

// Similarly the response object represents the HTTP response that the Express app sends when it receives an HTTP request

app.get("/", (req, res) =>{ 

    res.write("<h1>This is Home page</h1>") // If you want multiple HTML element
    res.write("<h1>This is Another Home page</h1>")
    res.send(); // ypu have to write send because you have to tell the browser that ypu have not more than that HTML element to show

})
app.get("/about", (req, res) =>{ 

    // If youe want to show JSON file 
    res.send({
        id: 1,
        name: "Shahil Chourasia",
        College: "Gurunanak institute of technology1"
    })
    


})

app.get("/moreabout", (req, res) =>{ 

    // If youe want to show JSON file with multiple object
    res.send([
        {
            id: 1,
            name: "Shahil Chourasia",
            College: "Gurunanak institute of technology2"
        },
        {
            id: 1,
            name: "Shahil Chourasia",
            College: "Gurunanak institute of technology3"
        },
        {
            id: 1,
            name: "Shahil Chourasia",
            College: "Gurunanak institute of technology4"
        }

    ])


})


app.listen(3000, "127.0.0.1", ()=>{
    console.log("port 3000 is on");
})




