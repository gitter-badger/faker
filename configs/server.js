#!/usr/bin/env node
'use strict';

var env = require('./../env');

var base = env.domain;
var staticHost = 'static.' + base;
var libHost = 'lib.' + staticHost;
var distHost = 'dist.' + staticHost;
var apiHost = 'api.' + base;
var etcHost = '*.' + base;

var protocol = 'http';

var list = [
	// Load the main page of the single-page-application
	{ service: 'root', domain: base },
	// Load the page parts of the single-page-application
	{ service: 'view', domain: staticHost },
	// Load the 3rd-party static libs, it might be replaced by CDN solution
	{ service: 'static', domain: libHost },
	// Load the custom static files
	{ service: 'static', domain: distHost },
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
		view: protocol + '://' + staticHost + '/',
		lib: protocol + '://' + libHost + '/',
		dist: protocol + '://' + distHost + '/'
	},
	ICP: {
		id: '苏ICP备14034957号-1',
		url: 'http://www.miibeian.gov.cn/'
	}
};