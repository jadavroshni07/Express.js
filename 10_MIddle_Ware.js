// express middleware
// app.use(path,fun())
// next()--> responsible for colling middle fun
// do not write res.end()  || res.send() in middle of code

// design a node JS application using express.JS which satisfied the following requirement
// create 3 middleware fun() 
// 1. the 1st middleware should be display a message("fisrt fun executed")
// 2. the 2nd middleware should be display a message("second fun executed")
// 3. the 3rd middleware should perform a simple arithmatic operation and store the result in request obj,
// then display it in console apply all 3 middleware fun in sequance to a single route ("/Student").
// afyer executing all the final response should display a thank you message.

var express=require('express')
const app=express();
const addone =(req,res,next)=>{
    res.write("First fun executed ")
    next()
};
const addtwo =(req,res,next)=>{
    res.write("Second fun executed ")
    next()
};
const addthree =(req,res,next)=>{
    req.total=50+40;
    console.log(req.total);
    next()
};
app.get("/student",addone,addtwo,addthree,(req,res)=>{
    res.write("Thank you!")
    res.end()
});
app.listen(6006)