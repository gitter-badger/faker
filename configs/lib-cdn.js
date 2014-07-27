#!/usr/bin/env node
'use strict';

var collection = require('./../utils/collection');

var libs = collection.create();

// normalize
libs.add('style', 'http://cdn.bootcss.com/normalize/3.0.1/normalize.min.css');
// font-awesome
libs.add('style', 'http://cdn.bootcss.com/font-awesome/4.1.0/css/font-awesome.min.css');
// jquery
libs.add('script', 'http://cdn.bootcss.com/jquery/2.1.0/jquery.min.js');
// bootstrap
libs.add('style', 'http://cdn.bootcss.com/bootstrap/3.2.0/css/bootstrap.min.css')
	.add('style', 'http://cdn.bootcss.com/bootstrap/3.2.0/css/bootstrap-theme.min.css')
	.add('script', 'http://cdn.bootcss.com/bootstrap/3.2.0/js/bootstrap.min.js');
// angular
libs.add('style', 'http://cdn.bootcss.com/angular.js/1.2.16/angular/angular-csp.css')
	.add('script', 'http://cdn.bootcss.com/angular.js/1.2.16/angular/angular.min.js')
	.add('script', 'http://cdn.bootcss.com/angular.js/1.2.16/angular-route/angular-route.min.js')
	.add('script', 'http://cdn.bootcss.com/angular.js/1.2.16/angular-resource/angular-resource.min.js')
	.add('script', 'http://cdn.bootcss.com/angular.js/1.2.16/angular-cookies/angular-cookies.min.js');

module.exports = libs;