// for single file upload 
// const express = require('express')
// const app=express();
// const multer= require('multer')//must use post method
// app.use(express.static(__dirname,{index:"m1.html"}))
// app.use(express.urlencoded({extended:true}))
// var store = multer.diskStorage({
//     destination:"lju",
//     filename:function(req,file,cb){
//         cb(null,file.originalname)

//     }
// })
// var upload = multer({storage:store});
// app.post("/upload",upload.single("mypic"),(req,res)=>
// {
//     const file = req.file
//     if(file){
//         res.send(" File "+file.originalname+" has been uploaded "+file.destination)
//     }
// }).listen(4001)



const express = require('express')
const app=express();
const multer= require('multer')//must use post method
app.use(express.static(__dirname,{index:"m1.html"}))
app.use(express.urlencoded({extended:true}))
var store = multer.diskStorage({
    destination:"lju",
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+".docx");
    }
})
var upload = multer({storage:store,limits:{fileSize:10*1024*1024}});
app.post("/upload",upload.array('mypic',5),(req,res)=>
{
    const files = req.files;
    if(files){
        for (i of files){
            res.write(" File "+i.originalname+" has been uploaded ")
        }
    }
    res.send()
}).listen(4007)