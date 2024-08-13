const express = require("express");
const app = express();
app.listen(8080, () => {
  console.log("app is listening on the port 8080");
});

//in this tutorial we are going to make one activity

//i have created a ExpressError class now i will just require it and use it
const ExpressError = require("./ExpressError");

//create an admin route and send the an error with 403 status code

const deafaultError = (req, res, next) => {
  let { pass } = req.query;
  if (pass == "123") {
    return next();
  }
  next(new ExpressError(403, "invalid creadentials")); //this is not an Error handling funtion
  //it is an error calling funtion
};

app.get("/admin", deafaultError, (req, res) => {
  res.send("welcome to the admin page");
});

app.get("/student", deafaultError, (req, res) => {
    res.send("you are a studnet")
});

app.get("/shubham",(req,res)=>{
    res.send("my name is shubham");
})

app.use((err, req, res, next) => {
  //this is an error handeler funtoin
  let { status, message } = err;
  res.status(status).send(message);//this is nothing but and error handling funtion
});

app.use("*",(req,res)=>{
    res.send("bad request")
})
