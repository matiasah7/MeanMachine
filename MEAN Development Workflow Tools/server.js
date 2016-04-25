var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port);
console.log('Magic happens on http:localhost:' + port);
