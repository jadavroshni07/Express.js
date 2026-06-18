var express = require('express');
const app = express();
app.get("/calender/:day/event/:birthday",(req,res)=>{
    res.send(req.params.day)
    console.log(req.params.day)
})
app.listen(6009)