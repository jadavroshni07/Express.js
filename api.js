const express = require('express')
const router = express.Router()
const data = [
    {id:101,name:"ABC",branch:"CE"},
    {id:102,name:"DEF",branch:"CES"},
    {id:103,name:"GHI",branch:"CEIT"}
]
router.get('/',(req,res)=>{
    for (i of data){
        res.write("ID: "+i.id+"Name: "+i.name)
    }
    res.send()
})
router.get("/:id" ,(req,res)=>{
    var current = data.filter((i1)=>i1.id==req.params.id)
    if(current.length>0){
        res.send(current)
    }
    else{
        res.send("not found")
    }
})
module.exports=router
