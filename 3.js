/*write an express js script to define 1 json array having property name and age.
sort this obj acording to age.
if user request shorted names in URL then all name along with age should be printed.
acording to descening order of age
also display json obj in home page*/
var express = require('express');
var app = express();
Student=[{Name:"abc",age:21},
    {Name:"def",age:19},
    {Name:"ghi",age:25}
]
app.get("/",(req,res)=>{
    res.send(Student);
    //if you use res.write() then you need you convert obj to string (json.stringify)
    //then use res.end()
})
app.get("/sort",(req,res)=>{
    res.set("content-type","text/html");
    var des=Student.sort((a,b)=>b.age-a.age);
    for (k of des){
        res.write("<h2>"+k.Name+"="+k.age+"</h2>");
    }res.send();//also use res.end()--> coz no argument in res.send()
})
app.listen(5057)


