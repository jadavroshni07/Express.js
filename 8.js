// create a web server that ,
// 1. accept the get request with dinemic user id in the URL.
// 2. also accept additional data(Name & Age) using query parameters.
// 3. extract id from route perameters and name,age from query string.
// 4. return a JSON response containing all received data
var express = require('express');
const app=express();
app.get("/user/:id",(req,res)=>{
    const userId=req.params.id  //{"id":"101"} obj
    const name=req.query.name
    const age=req.query.age
    res.json({
        message:"Data Received",
        params:{id:userId},
        query:{name,age}
        });
});
app.listen(3056,()=>{console.log("sever started")})

// output: {"message":"Data Received","params":{"id":"101"},"query":{"name":"FSD","age":"19"}}