// write an express.js script to set cookies of submitted values of form 
// perform following task.
// 1. create a html file containing fields fname,lname,password,submit button
// 2. once form submited , store all this entered values
//  to the respective cookoies and on "/next"
// 3. then re-direct user to "/login" page and clear the cookie set for last name.
// display remainning cookie value use post mathod 

const express = require('express')
const app = express()
var cp = require("cookie-parser")
app.use(cp());
app.use(express.urlencoded({extended:true}))//for parse post method
app.use(express.static(__dirname,{index:"4.html"}))

app.post('/next',(req,res)=>{
    res.cookie("fname",req.body.fname)
    res.cookie("lname",req.body.lname)
    res.cookie("password",req.body.pass)
    res.redirect("/login")//allways use get method
})
app.get("/login",(req,res)=>{
    res.clearCookie("lname")
    res.write("Welcome: "+req.cookies.fname)
    res.write("Password: "+req.cookies.password)
    res.send()
}).listen(1001)
