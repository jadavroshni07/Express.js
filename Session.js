// write express.js script using session to display how many times
// A user visited a website 
// if user is visiting a website for the first time then display "welcome user"
// else display the count how many times user visited the website.

const express = require('express')
const app = express()
const sess = require('express-session')
app.use(sess(
    {
        resave:true,
        saveUninitialized:true,
        // cookie:{maxAge:oneday}-->time limit manage(1000*60*60*24)
        secret:"123"
    }
));
app.get("/",(req,res)=>{
    console.log("SessionID: " ,req.SessionID)
    if(req.session.page){
        req.session.page++;
        res.send("YOU HAVE VISITED "+req.session.page+" TIMES ")
    }
    else{
        req.session.page=1
        res.send("Welcome user")
    }
}).listen(8899)

