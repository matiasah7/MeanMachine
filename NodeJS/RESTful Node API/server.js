var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  apiRouter = require("./routers/apiRouter.js"),
  port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, \Authorization");
  next();
});

app.use(morgan("dev"));

app.get("/", function(req, res){
  res.send("Welcome to the home page!");
});

app.use("/api", apiRouter);

app.listen(port);
console.log("Magic happens on port " + port);
