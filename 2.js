// create an html form that takes a number
// on submition if input is empty then display "PLEASE ENTER A NUMBER" and 
// if input is nan then display "INVALID INPUT".
// 2. if a proper number then display "EVEN NO." if the no. is even
// if a proper number then display "ODD NO." if the no. is odd
// also provide a link to go back
// use to file html and js

const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))//for parse post method
app.use(express.static(__dirname,{index:"2.html"}))
app.post("/check",(req,res)=>{
    // res.set("content-type","text/html");
    const num=req.body.num
    if(!num){
        res.send("PLEASE ENTER THE NO.")
    }
    if(isNaN(num)){
        res.send("INVALID NO.")
    }
    const number = parseInt(num)
    if(number%2==0){
        res.send("Even no. <a href='/' Try Again </a>")
    }
    else{
        res.send("Odd no. <a href='/' Try Again </a>")
    }
}).listen(3367)


