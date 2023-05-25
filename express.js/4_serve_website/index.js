const express = require('express');
const app = express();
const port = 8001;
const dir = (__dirname);



//first you have to create middleware
app.use(express.static(dir));

//it simply takes 2 parameters first is rout and second is callback
app.get("/", (req, res)=>{
    res.send('resp')
})

app.listen(port,()=>{
    console.log(`Listining Port ${port}`);
})
