#!/usr/bin/env node
'use strict';

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var url = require('url');

var config = require('./../configs/server');

var app = express();

var rootPath = path.dirname(__dirname) + '/';

app.use(favicon(rootPath + 'favicon.ico'));

app.set('view engine', 'jade');

// Only read the main page for the single page application
app.get('/*', function(req, res){

	var parsed = url.parse(req.url, true);
	res.render(rootPath + 'main', {
		hosts: config.hosts, 
		ICP: config.ICP,
		path: parsed.pathname,
		query: parsed.query,
		href: parsed.href
	});
	
});

module.exports = app;