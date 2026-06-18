// write express js script to perform the task as ask below.
// 1. add one form which contains username, password and submit button.
//    data should be submitted by http post method
// 2. on home page form should e display and while submited the form on the next page "/login" 
//    if username is admin then it will display "welcome admin" 
//    else diaplay "please login with admin name" in red color
var express = require('express');
const app=express();
app.use(express.urlencoded({extended:true}));//parse form data

app.get("/",(req,res)=>{
    res.send(`<form action="/login" method="post">
        <input type="text" name="Username" />
        <input type="password" name="pswd"/>
        <button type="submit">click</button>
        </form>`)
});
app.post("/login",(req,res)=>{
    if(req.body.Username=="admin")
    {
        res.write("welcome: "+req.body.Username)
    }
    else{
        res.write("<h1 style='color:red'> please enter with admin name </h1>")
    }
    res.send()
}).listen(1116)