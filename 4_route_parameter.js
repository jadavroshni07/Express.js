// Route perameters --> URL segmet --> :Name --> req.params
var express = require('express');
const app = express();
app.get("/user/:id",(req,res)=>{
    const user = req.params
    const userId = req.params.id
    console.log(req.params);
    res.send("created profile : " +userId)
})
app.listen(5003)
