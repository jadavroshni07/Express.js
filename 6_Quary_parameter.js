// Quary parameters 
// 1. req.quary -->get(in url , small data)
// 2. req.body --> post(not in url , larger data)
var express = require('express');
const app = express();
app.get("/data",(req,res)=>{
    var datas=req.query;
    var name=req.query.name;
    var age=req.query.age;
    console.log(typeof name)
    console.log(typeof datas)
    res.write(JSON.stringify(datas))
    res.write("Name : "+name+" Age : "+age)
    res.send()
}).listen(8088)

