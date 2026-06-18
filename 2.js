// Write express js script to request server to display json obj on browser
var express = require('express');
var app = express();
Student={Name:"LJU",age:21}
app.get("/",(req,res)=>{
    // 1st method 
    // res.write(JSON.stringify(Student))
    //it's by default convert string and buffer only.... thats why we need to convert obj to string
    // res.end();

    // 2nd method  overall method
    // res.send(Student)

    // 3rd method only for json obj
    res.json(Student)
})
app.listen(5004)