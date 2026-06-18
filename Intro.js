// npm install express
var express = require('express');
var app = express();
app.get('/',function(req,res){
    // res.set("content-type","text/plain")//res.type("text/plain")

    res.send("<i>Hello</i>");//it set header
    // res.write("Hieee")
})
app.listen(8000)