#!/usr/bin/env node
'use strict';

var express = require('express');
var path = require('path');

var config = require('./../configs/server');
// var statics = require('./../configs/static-development');
var statics = require('./../configs/static-production');

var app = express();

app.set('view engine', 'jade');

// Only read the main page for the single page application
app.get('/*', function(req, res){

	res.render(path.dirname(__dirname) + '/main', {
		ICP    : config.ICP,
		statics: statics,
		hosts  : config.hosts
	});

});

module.exports = app;