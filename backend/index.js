// node prerequisite
require('dotenv').config({ path: './mong.env' });
const express = require('express')
const cors =  require('cors')
const mongoose = require('mongoose')
const fs = require('fs')
const multer = require('multer');
const { type } = require('os');
const { error } = require('console');


// make sure the file gets uploaded
const uploadDir = 'uploads/'
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir)
}


//db schema formatori
const fileSchema = new mongoose.Schema({
    originalname:String,
    filename:String,
    path:String,
    size:Number,
    uploadDate:{type:Date,default:Date.now}
})
const FileModel = mongoose.model('FileModel',fileSchema)


// storing the file
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


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DB Succesfully Connected")
}).catch((error)=>{
    console.log("Error Conneting DB",error)
})


app.get('/',(req,res)=>{
    res.send({message:'Server is Runnig'})
})

// posting the file
app.post('/upload' ,upload.single('file'),async(req,res) =>{
    if(!req.file){
        return res.status(400).send({message:'No File Uploaded'})
    }
    try{
    const newFile = new FileModel({
        originalname:req.file.originalname,
        filename:req.file.filename,
        path:req.file.path,
        size:req.file.size
    })
    await newFile.save()
    res.status(200).send({message : 'File Uploaded & saved'})}
    catch(error){
        console.log("Error Saving the File",error);
    }

})


//get the files to react
app.get('/files',async(req,res) => {
    try{
    const allFiles = await FileModel.find({})
    res.status(200).send(allFiles);}
    catch(error){
        console.log("Error Sending File",error)
        res.status(500).send({ message: "Error fetching files from database" });
    }
})

// deleting the files
app.delete('/files/:id',async(req,res)=>{
    try{
    const fileid = req.params.id
    const file = await FileModel.findById(fileid)
    if(!file){
        return res.status(404).send({message:"File Not Found"})
    }
    fs.unlink(file.path,async(err)=>{
        if(err){
            console.log("Error deleting physical File")
        }
        await FileModel.findByIdAndDelete(fileid)
        res.status(200).send({message:"File Deleted Successfully"});
    })}

    catch(error){
        console.log("Error deleting the File",error)
        res.status(500).send({message:"Error deleting the File"})
    }

})
//server output
app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})

