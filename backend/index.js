// node prerequisite
const express = require('express')
const cors =  require('cors')

//security
const fs = require('fs')
const multer = require('multer')

// make sure the file gets uploaded
const uploadDir = 'uploads/'
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir)
}


const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,uploadDir)
    },
    filename:(req,file,cb) =>{
        cb(null,Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage:storage})
//server initialization
const app = express();
const port = 5000;
app.use(cors())

app.post('/upload' ,upload.single('file'),(req,res) =>{
    res.status(200).send({message : 'File Uploaded'})
})

//server output
app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})

