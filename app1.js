// connected with contact.js & msg.js
// create an ejs file named contact.ejs that display form with text field , Email field and submit button.
// after form submision, display a msg with name and email to the browser from msg.ejs file


const express = require('express')
const app=express();
app.set("view engine",'ejs');
const path = require('path')
app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname))
app.get('/',(req,res)=>{
    res.render('contact')
});
app.post('/submit',(req,res)=>{
    const name = req.body.uname;
    const email =req.body.email;
    res.render('msg',{name,email});
}).listen(7007)