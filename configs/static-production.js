#!/usr/bin/env node
'use strict';

var config = require('./server');
var collection = require('./../utils/collection');

var staticsCollection = collection.create();
var styles = staticsCollection.create('style');
var scripts = staticsCollection.create('script');

// normalize
styles.add('http://cdn.bootcss.com/normalize/3.0.1/normalize.min.css');
// font-awesome
styles.add('http://cdn.bootcss.com/font-awesome/4.1.0/css/font-awesome.min.css');
// jquery
scripts.add('http://cdn.bootcss.com/jquery/2.1.0/jquery.min.js');
// bootstrap
styles.add('http://cdn.bootcss.com/bootstrap/3.2.0/css/bootstrap.min.css')
	.add('http://cdn.bootcss.com/bootstrap/3.2.0/css/bootstrap-theme.min.css');
scripts.add('http://cdn.bootcss.com/bootstrap/3.2.0/js/bootstrap.min.js');
// angular
styles.add('http://cdn.bootcss.com/angular.js/1.2.16/angular-csp.css');
scripts.add('http://cdn.bootcss.com/angular.js/1.2.16/angular.min.js')
	.add('http://cdn.bootcss.com/angular.js/1.2.16/angular-route.min.js')
	.add('http://cdn.bootcss.com/angular.js/1.2.16/angular-resource.min.js')
	.add('http://cdn.bootcss.com/angular.js/1.2.16/angular-cookies.min.js');

// web application
styles.add(config.hosts.static + 'dist/styles/main.css');
scripts.add(config.hosts.static + 'dist/scripts/app.js');

module.exports = staticsCollection;