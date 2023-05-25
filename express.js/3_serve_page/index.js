const express = require('express')
const app = express()

const staticPath = (__dirname);
console.log(staticPath);

//built - in middleware
app.use(express.static(staticPath))


app.get('/',(req, res) => {
    res.send('home')
})

app.get('/about',(req, res) => {
    res.send('about')
})

app.get('/contact',(req, res) => {
    res.send('contact')
})

app.listen(3000, '127.0.0.1', ()=>{
    console.log('You Are IN');
})