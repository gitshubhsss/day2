const express = require("express");

const app = express();

app.listen(8080, () => {
  console.log("app is listening on the port 8080");
});

const ExpressError=require("./ExpressError");
//create a route such as if server reicieves the request on /api it should take the
//token first if the token is valid then and then only send the response otherwise
//send something has broke

app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token == "access") {
    return next();
  }
  next(new ExpressError(506,"something broke"))
});

app.use("/api",(err,req,res,next)=>{
 let{status,message}=err;
 res.status(status).send(message);
})
app.get("/api", (req, res) => {
  res.send("data");
});


app.get("/err", (req, res) => {
  ldfkj = sdlfkj;
});

app.use((err,req,res,next)=>{
  let{status=500,message="bro you are not doing anything"}=err;
  res.status(status).send(message);
})

// app.use("/err",(err,req,res,next)=>{
//   next(new ExpressError(504,"Error ocucured"));
// });

// app.use("/err",(err,req,res,next)=>{
//   let{status,message}=err;
//   res.status(status).send(message);
// })

// app.use((err, req, res, next) => {
//   console.log("---------------Error-----------");
//   next(err); //hamane apani taraf se error ko handel kar liya ab aage konsa middleware esko handel karega
// });


// app.use((err,req,res,next)=>{
//   next(new ExpressError("5646321686531685316451","i love express error"));//we are calling to  the next error handeling funtion 
//   //which will have statuscode ,and the message
// });

// app.use((err,req,res,next)=>{
//   res.send(err.status);
// })
