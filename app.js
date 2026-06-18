// <%%>   --> login only(condition)
// <%= %> --> output (html escaped)
// <%- %> --> output(html unescaped)
// <%# %> --> comment (not execute)
// <%%    --> print literal %
const express = require('express')
const app=express();
app.set("view engine",'ejs');
app.get('/',(req,res)=>
{
    res.render('first',{name:' rahul'});
}).listen(3002)