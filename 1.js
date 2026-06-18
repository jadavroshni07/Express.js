var express = require('express');
var app = express();
app.get('/',(req,res)=>{
    // res.set("content-type","text/html")
    res.send("<h1>Hello</h1>")
});
app.get("/about",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<i>Hieee</i>")
    res.send();
});
app.listen(5507,function(){
    console.log("server started")
})