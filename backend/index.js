const express = require('express')
const CORS =  require('cors')

const app = express();
const port = 5000; 

app.use(CORS())

app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})