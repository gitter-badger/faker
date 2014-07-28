#!/usr/bin/env node
'use strict';

var env = require('./../env');

var base = env.domain;
var staticHost = 'static.' + base;
var tplHost = 'tpl.' + base;
var apiHost = 'api.' + base;
var etcHost = '*.' + base;

var protocol = 'http';

var list = [
	// Load the main page of the single-page-application
	{ service: 'root', domain: base },
	// Load the page parts of the single-page-application
	{ service: 'tpl', domain: tplHost },
	// Load the statics
	{ service: 'static', domain: staticHost },
	// Load the api
	{ service: 'api', domain: apiHost },
	// Other domains processing
	{ service: 'etc', domain: etcHost }
];

module.exports = {
	domain: env.domain,
	port: 80,
	vhosts: list,
	hosts: {
		base: protocol + '://' + base + '/',
		api: protocol + '://' + apiHost + '/',
		tpl: protocol + '://' + tplHost + '/',
		static: protocol + '://' + staticHost + '/'
	},
	ICP: {
		id: '苏ICP备14034957号-1',
		url: 'http://www.miibeian.gov.cn/'
	}
};