#!/usr/bin/env node
'use strict';

var config = require('./server');
var collection = require('./../utils/collection');

var staticsCollection = collection.create();
var styles = staticsCollection.create('style');
var scripts = staticsCollection.create('script');

// normalize
styles.add(config.hosts.static + 'lib/normalize.css/normalize.css');
// font-awesome
styles.add(config.hosts.static + 'lib/font-awesome/css/font-awesome.min.css');
// jquery
scripts.add(config.hosts.static + 'lib/jquery/dist/jquery.js');
// bootstrap
styles.add(config.hosts.static + 'lib/bootstrap/dist/css/bootstrap.min.css').add(config.hosts.static +
                                                                                 'lib/bootstrap/dist/css/bootstrap-theme.min.css');
scripts.add(config.hosts.static + 'lib/bootstrap/dist/js/bootstrap.min.js');
// angular
styles.add(config.hosts.static + 'lib/angular/angular-csp.css');
scripts.add(config.hosts.static + 'lib/angular/angular.min.js').add(config.hosts.static +
                                                                    'lib/angular-route/angular-route.min.js').add(config.hosts.static +
                                                                                                                  'lib/angular-resource/angular-resource.min.js').add(config.hosts.static +
                                                                                                                                                                      'lib/angular-cookies/angular-cookies.min.js');

// web application
styles.add(config.hosts.static + 'src/styles/main.css');
scripts.add(config.hosts.static + 'src/scripts/app.js');

module.exports = staticsCollection;