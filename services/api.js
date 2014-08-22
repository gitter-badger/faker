'use strict';

var express = require('express');
//var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', function(req, res){
	res.end(JSON.stringify({type: 'api'}));
});

app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res){
	res.status(err.status || 500);
	res.end(err.message);
});

module.exports = app;