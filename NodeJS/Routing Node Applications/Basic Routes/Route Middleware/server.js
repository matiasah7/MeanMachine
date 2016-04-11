var express = require("express");
var app = express();
var path = require("path");
var adminRouter = require("./adminRouter");

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/admin", adminRouter);

app.listen(1337);
console.log("Visit me at http://localhost:1337");
