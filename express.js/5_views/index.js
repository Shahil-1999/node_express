const express = require('express');
const app = express();

const path = require('path')
const port = 3000;
const staticPath = path.join(__dirname,'/views')
// console.log(staticPath);


//To Set The View Engine
app.set("view engine", "hbs")
app.use(express.static(staticPath))

//Template Engine Route ( If anyone wants to login into our site then there name will show beside Contact then you'll make object and pass key value pair in key you have to pass same name which you mention in your hbs file)

app.get("/",(req,res) => {
    
    res.render("index",{loginPerson:"Shahil"})
})




// app.get("/", (req, res) => {
//     res.send("Response from Server Side");
// });

app.listen(port, "127.0.0.1", () =>{
    console.log(`You Are In ${port}`);
})