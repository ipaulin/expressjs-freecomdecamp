var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], 'utf8', function(err, data) {
        if(err) {
            throw err;
        } else {
            res.json(JSON.parse(data));
        }
        
        res.end();
    });
 
});

app.listen(process.argv[2]);