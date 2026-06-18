// connect to my.ejs and result.ejs
// devlop a web application using express and ejs that allows a user to enter a student name and marks to a form.
// after submittion a application should display the entered detailes in
// result.ejs : if the marks are 40 and above display pass in green colour otherwise display fialed in red colour

const express = require('express')
const app=express();
const path = require('path')
app.set("view engine",'ejs');
app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname))
app.get('/',(req,res)=>{
    res.render('form')
});
app.post('/submit',(req,res)=>{
    const uname = req.body.user;
    const result =req.body.marks;
    res.render('result',{uname,result});
}).listen(5009)