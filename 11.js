// create a middleware that log a msg a 'student has entered the campus' whenever  a req is made.
// create another middleware that check weather the student has valid id.
// if the id is valid, store the students name in a req obj and allowed access
// if the id is not valid, stop further proccesing send approciate msg 
// apply both middleware fun to route("/Class")
// last response "welcome student"
var express=require('express');
const app=express();
const entrylog = (req,res,next)=>{
    console.log("student entered campus")
    next();
}
const checkId=(req,res,next)=>{
    hasId=false;
    if(hasId){
        req.name="abc";//req obj
        console.log("Id verified");
        next();
    }
    else{
        res.send("access denied")
    }
};
app.use("/Class",entrylog,checkId);//using app.use()
app.get("/Class",(req,res)=>{
    res.send("welcome: "+req.name)
}).listen(5056)