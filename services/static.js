#!/usr/bin/env node
'use strict';

var express = require('express');
var path = require('path');
var url = require('url');

var serverUtil = require('./../utils/server');

var app = express();

var staticPath = path.dirname(__dirname) + '/statics';

app.get('/*', function(req, res){
	
	var filePath = staticPath + url.parse(req.url).pathname;

	serverUtil.respFile(filePath, res, function(err){
		if(err){
			res.status(404);
			res.end('Resource Not Found');
		}
	});
	
});

module.exports = app;