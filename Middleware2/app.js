const express=require("express");
const app=express();

app.listen(8080,()=>{
    console.log("app is listening on the port 8080");
});
/*1)middleware can execute any code....
  2)it can make changes in request response object...
  3)it can end request response cycle
  4)it can call to the next middleware funtion.... */

//1.


//2.it can make changes in request response cycle

//it can break the request response cycle

// app.use("/home",(req,res,next)=>{
//     req.userShubham="shubham";//i have change the request object here
//     next();
// });

// app.use("/home",(req,res,next)=>{
//     console.log(req.userShubham);
//     next();
// })
// app.get("/home",(req,res)=>{
//     res.send(`this is a home of :   ${req.userShubham}`);
// });

const checkToken=("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token=="admin"){
       return next();
    }
    res.send(
        "ACCESS DENIED"
    );
});

app.get("/api",checkToken,(req,res)=>{
    res.send("give access");
})