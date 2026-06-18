// create index.html file which contains username, password and login button 
// after clicking submit button, it should jump on "/saveSession" page.
// store username and password 
// after saving session re-direct to "/fetch" page 
// and read(session store value) value.
// also put logout link
// jump on "/delete session" page where session is
//  distroy and re-direct to home page

const express = require('express')
const app = express()
const es = require('express-session')
app.use(es(
    {
        resave:false,
        saveUninitialized:false,
        // cookie:{maxAge:oneday}-->time limit manage(1000*60*60*24)
        secret:"lju123"
    }
    ));
app.use(express.urlencoded({extended:true}))//for parse post method
app.use(express.static(__dirname,{index:"5.html"}))
app.post("/savesession",(req,res)=>{
    res.set("content-type","text/html")
    req.session.uname=req.body.uname;
    req.session.pass=req.body.pass;
    res.redirect("/fetch")
})
app.get("/fetch",(req,res)=>{
    res.set("content-type","text/html")
    res.write("Welcome: "+req.session.uname);
    res.write("<a href ='/deletesession'>LOGOUT</a>")
    res.send()
})
app.get("/deletesession",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})
app.listen(2003)