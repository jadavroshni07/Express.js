// develop web application using node js and express js with the following requirements.
// 1. create login.html file that contains form with fields username,password and submit button
// 2. on form submision if username = admin and password =1234 then display "login successful" 
// else display "invalid credential"and provide link to go back
// use http post method

const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))//for parse post method
app.use(express.static(__dirname,{index:"login.html"}));
app.post("/go",(req,res)=>{
    res.set("content-type","text/html");
    if((req.body.uname=="admin")&&(req.body.pass=="1234")){
        res.send("login successfully")
    }else{
        res.send("invalid credential <a href ='/'> Go Back </a>")
    }
}).listen(2345)


