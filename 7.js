// create a web application that,
// 1. displays a form on the home page to enter a users name.
// 2. send the form data to the server using post method.
// 3. the server should read the submited data from the request body 
// 4. finally display the comfirm message
var express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send(`<form action="/login" method="post">
        <input type="text" name="Uname"/>
        <button type="submit">click</button>
        </form>`)
})
app.post("/login",(req,res)=>{
    const name=req.body.Uname
    res.send("User created: "+name)
}).listen(8089)


// using get method

var express = require('express');
const app1 = express();
app1.get("/",(req,res)=>{
    res.send(`<form action="/login" method="get">
        <input type="text" name="Uname"/>
        <button type="submit">click</button>
        </form>`)
})
app1.get("/login",(req,res)=>{
    const name=req.query.Uname
    res.send("User created: "+name)
}).listen(8887)

