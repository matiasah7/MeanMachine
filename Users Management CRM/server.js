var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    mongoose = require("mongoose"),
    config = require("./config"),
    path = require("path");

// Use body parser so we can grab information from POST requests.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Configure our app to handle CORS requests
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, \Authorization");
    next();
});

// Log all requests to the console
app.use(morgan("dev"));

mongoose.connect(config.database);

// Static file location
app.use(express.static(__dirname + "/public"));

var apiRoutes = require("./app/routes/api.js")(app, express);
app.use("/api", apiRoutes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/app/views/index.html"));
})

app.listen(config.port);
console.log("Magic happens on port " + config.port);
