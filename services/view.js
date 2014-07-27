#!/usr/bin/env node
'use strict';

var express = require('express');
var path = require('path');
var url = require('url');
var fs = require('fs');

var app = express();

var viewPath = path.dirname(__dirname) + '/views';

app.set('view engine', 'jade');

app.get('/*', function(req, res){

	var filename = url.parse(req.url).pathname;
	var filePath = viewPath + filename;

	fs.exists(filePath + '.jade', function (exists) {
		if(exists){
			res.render(filePath);
		}else{
			res.status = 404;
			res.end('Template Not Found');
		}
	});
	
});

module.exports = app;