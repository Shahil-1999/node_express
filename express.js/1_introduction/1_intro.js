const express = require('express');
const app = express();

// The callback function has 2 parameters which is request(req), and response(res). The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers etc.

// Similarly the response object represents the HTTP response that the Express app sends when it receives an HTTP request

app.get("/", (req, res) =>{ 

    res.send("Express.js Introduction") // in node we write "end" but in express we write "send"


})
app.get("/about", (req, res) =>{ 

    res.send("this website is used for blogging purpose") // in node we write "end" but in express we write "send"


})
app.listen(3000, "127.0.0.1", ()=>{
    console.log("port 3000 is on");
})




