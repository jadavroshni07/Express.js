// write express js script to get form data using get method and display data in json fromat 
// named "process"  create a file named index.html and example.js

// write express script to get form data (first_name & last_name) using get method
// and display data in JSON format in next page named "/processs"
// create 2 different files.

const express = require('express')
const app = express()
app.use(express.static(__dirname));
app.get("/process",(req,res)=>{
    var fn=req.query.fname;
    var ln=req.query.lname;
    console.log(req.query)
    res.send("Welcome: "+ fn + ln)
}).listen(2002)

