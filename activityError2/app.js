const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();

app.listen(8080, () => {
  console.log("app is listening on the port 8080");
});

// app.get("/admin", (req, res) => {
//   throw Error("forbiddan access");
// });

// app.use((err,req,res,next)=>{
//     let{status=500,message}=err;
//     res.status(status).send(message);
// ;})

//now will see the second way of doing it

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access Denied")
});


app.use((err,req,res,next)=>{
    let{status,message}=err;
    res.status(status).send(message);
})

//this is the second way of doing it right we are actually createing a ExpressError class for handeling th 
//error 
//it pretty easy to handle them who just have to know the fundamentals okay 
//