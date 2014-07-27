#!/usr/bin/env node
'use strict';

var express = require('express');
var path = require('path');
var url = require('url');

var serverUtil = require('./../utils/server');

var app = express();

var staticPath = path.dirname(__dirname) + '/statics/';

app.get('/*', function(req, res){
	
	/*
	 * The dirname is the bottom domain part of the host of request
	 * example:  
	 * 	request.host => txt.static.domain.com
	 *  dir => txt
	 *  path => path-to-statics/txt/path-to-file
	 */
	var dir = req.headers.host.split('.')[0];
	
	var filePath = staticPath + dir + url.parse(req.url).pathname;

	serverUtil.respFile(filePath, res, function(err){
		if(err){
			res.status(404);
			res.end('Resource Not Found');
		}
	});
	
});

module.exports = app;