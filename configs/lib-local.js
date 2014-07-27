#!/usr/bin/env node
'use strict';

var config = require('./server');
var collection = require('./../utils/collection');

var libs = collection.create();

// normalize
libs.add('style', config.hosts.lib + '/normalize.css/normalize.css');
// font-awesome
libs.add('style', config.hosts.lib + '/font-awesome/css/font-awesome.min.css');
// jquery
libs.add('script', config.hosts.lib + '/jquery/dist/jquery.js');
// bootstrap
libs.add('style', config.hosts.lib + '/bootstrap/dist/css/bootstrap.min.css')
	.add('style', config.hosts.lib + '/bootstrap/dist/css/bootstrap-theme.min.css')
	.add('script', config.hosts.lib + '/bootstrap/dist/js/bootstrap.min.js');
// angular
libs.add('style', config.hosts.lib + '/angular/angular-csp.css')
	.add('script', config.hosts.lib + '/angular/angular.min.js')
	.add('script', config.hosts.lib + '/angular-route/angular-route.min.js')
	.add('script', config.hosts.lib + '/angular-resource/angular-resource.min.js')
	.add('script', config.hosts.lib + '/angular-cookies/angular-cookies.min.js');

module.exports = libs;