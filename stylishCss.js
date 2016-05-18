var express = require('express');
var app = express();
var jade = require('jade');
var stylus = require('stylus');

var dir = process.argv[3];

app.use(stylus.middleware(dir));
app.use(express.static(dir));

app.set('views', dir);
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()});

});

app.listen(process.argv[2]);