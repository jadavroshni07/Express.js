var nm = require('nodemailer');
var trans=nm.createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:"sender@gmail.com",
        pass:"App pass"
    }
});
var mailoption={
    from:"sender@gmail.com",
    to:"recever@gmail.com",
    subject:"Hello",
    text:"Hiee",
    html:"Test Mail <h1>BYEEEE</h1>"//priority compare to text
}
trans.sendMail(mailoption,(err,info)=>
{
    if(err){
        console.log(err)
    }
    console.log(info)
        
})