var express = require('express');
var app = express();

app.get('/home', function (req, res) {
    console.log(req.query)
    res.send('NOVITA')
});

app.listen(3000);