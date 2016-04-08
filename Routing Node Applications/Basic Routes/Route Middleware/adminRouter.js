var express = require("express");
var app = express();
var path = require("path");

var adminRouter = express.Router();

adminRouter.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
});

adminRouter.get("/", function(req, res){
  res.send("I am dashboard!");
});

adminRouter.get("/users", function(req, res){
  res.send("I show all the users!");
});

adminRouter.get("/posts", function(req, res){
  res.send("I show all the posts!");
});


adminRouter.get("/users/:name", function(req, res){
  res.send("Hello " + req.params.name + "!");
});

// Con validación intermedia.
adminRouter.param("name", function(req, res, next, name){
  console.log("Doing name validations on " + name);
  req.name = name;
  next();
});

adminRouter.get("/hello/:name", function(req, res){
  res.send("hello " + req.name);
});

module.exports = adminRouter;
