'use strict';

var env = require('../env');

function url(uri){
  return env.protocol + '://' + uri + '/';
}

function formatFactory(prefix){
  return function(uri){
    return url(prefix) + uri;
  };
}

var format = formatFactory(env.uiHost+'/libraries');

module.exports = {
  url: url,
  statics: {
    dev: {
      styles:[
        format('normalize.css/normalize.css'),
        format('font-awesome/css/font-awesome.css'),
        format('bootstrap/dist/css/bootstrap.css'),
        format('bootstrap/dist/css/bootstrap-theme.css'),
        format('angular/angular-csp.css')
      ],
      scripts:[
        format('jquery/dist/jquery.js'),
        format('bootstrap/dist/js/bootstrap.js'),
        format('angular/angular.js'),
        format('angular-route/angular-route.js'),
        format('angular-resource/angular-resource.js'),
        format('angular-sanitize/angular-sanitize.js')
      ]
    }
  }
};