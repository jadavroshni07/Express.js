// cookie is a part of session
const express = require('express')
const app = express()
var cp = require("cookie-parser")
app.use(cp());
app.get("/cookie",(req,res)=>{
    res.cookie('name','ExpressJS');
    res.cookie('fname','JS');
    res.cookie('ID','2',{expires:new Date(Date.now()+10000)})
    res.cookie('email','e@email.com',{maxAge:2000})
    res.clearCookie('fname')
    res.send(req.cookies);
}).listen(4449)


