var express = require('express');
var expressHandlebars = require('express-handlebars');
var http = require('http');

var PORT = 40000;

var LINES = [
    "This is my first line",
    "This is my second line",
    "This is my third line",
    "This is my fourth line",
];

var index = 0;

var app = express();
app.engine('html', expressHandlebars());
app.set('view engine', 'html');
app.set('views', __dirname);
app.get('/', function(req, res) {
    var message = LINES[index];
    index +=1;
    if(index >= LINES.length) {
        index = 0;
    }

    res.render('index', {message:message});
});

http.Server(app).listen(PORT, function() {
    console.log("Server listening at port %s", PORT);
})