// create a html file named file.html this file contains heading(h3) "upload your cv in red color".
// input field for file and submit to upload
// create a js file named file.js and link  "this js and html  on "/" home page.
// after uploding a file display msg on "/upload" page"(file originale file)has been uploaded"
// save uploaded file to specific directory "/upload"
// in this folder file  must be stored in the format "lju-file.pdf" where lju is te field name


// for single file upload 
// const express = require('express')
// const app=express();
// const multer= require('multer')//must use post method
// app.use(express.static(__dirname,{index:"file.html"}))
// app.use(express.urlencoded({extended:true}))
// var store = multer.diskStorage({
//     destination:"upload",
//     filename:function(req,file,cb){
//         cb(null,file.fieldname+"-file.pdf")

//     }
// })
// var upload = multer({storage:store});
// app.post("/upload",upload.single("lju"),(req,res)=>
// {
//     const file = req.file
//     if(file){
//         res.send(" File "+file.originalname+" has been uploaded "+file.destination)
//     }
// }).listen(4008)



const express = require('express')
const app=express();
const multer= require('multer')//must use post method
app.use(express.static(__dirname,{index:"file.html"}))
app.use(express.urlencoded({extended:true}))
var store = multer.diskStorage({
    destination:"upload",
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-file.pdf")

    }
})
var upload = multer({storage:store,limits:{fileSize:10*1024}});
app.post("/upload",upload.single("lju"),(req,res)=>
{
    const file = req.file
    if(file){
        res.send(" File "+file.originalname+" has been uploaded "+file.destination)
    }
}).listen(4990)