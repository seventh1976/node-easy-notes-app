var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyNotes application."})
});

app.listen(3000, function(){
    console.log("Server is listening on port:3000");
});