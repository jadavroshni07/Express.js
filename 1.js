// write express js script to print msg in next line slipting by "." 
// and use get method to submit the data 
// html file contains form of text area for the msg and submit button

const express = require('express')
const app = express()
app.use(express.static(__dirname,{index:"1.html"}));
app.get("/login",(req,res)=>{
    res.set("content-type","text/html");
    t1=(req.query.msg).split(".")
    console.log(t1);
    for (i in t1){
        res.write(t1[i]+"<br>")
    }
    res.send()
}).listen(6001)

