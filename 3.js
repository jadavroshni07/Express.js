// html file, name , email, check box for subcriptaion.
// on login page welcome user and email id should be printed 
// if user checked the subcriptaion then "THANK YOU" msg will be printed and
// log out link will be display.
// if user has not otains subcripation you can subcribe msg will be printed
//  with subcribe link.
// if user then he or she will be redirected to sub. and thenk you for sub.
//  along with logout 
// use the concept of middleware and http post method

const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))//for parse post method
app.use(express.static(__dirname,{index:"3.html"}))
app.post("/log",(req,res,next)=>{
    res.set("content-type","text/html")
    res.write("<h1> Welcome : "+ req.body.uname+"</h1>")
    res.write("<h2>Your Email is: "+ req.body.Email+"</h2>")
    next();
})
app.post("/log",(req,res)=>{
    if(req.body.news=="on"){
        res.write("THANK YOU <a href='/'>logout </a>")
    }
    else{
        res.set("content-type","text/html")
        res.write("YOU CAN SUBSCRIBE <a href='/subscribe'>SUBSCRIBE</a>")
    }
    res.send()
})
app.get("/subscribe",(req,res)=>{
    res.set("content-type","text/html")
    res.write("THANK YOU FOR SUBSCRIBE <a href='/'>LOGOUT </a>")
res.send()
})
app.listen(5093)

