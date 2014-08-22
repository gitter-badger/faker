'use strict';

var env = require('../env');

function url(uri){
  return env.protocol + '://' + uri + '/';
}

module.exports = {
  url: url,
  libs: {
    dev: {
      styles:[
        url('libraries/normalize.css/normalize.css'),
        url('libraries/font-awesome/css/font-awesome.css'),
        url('libraries/bootstrap/dist/css/bootstrap.css'),
        url('libraries/bootstrap/dist/css/bootstrap-theme.css'),
        url('libraries/angular/angular-csp.css')
      ],
      scripts:[
        url('libraries/jquery/dist/jquery.js'),
        url('libraries/bootstrap/dist/js/bootstrap.js'),
        url('libraries/angular/angular.js'),
        url('libraries/angular-route/angular-route.js'),
        url('libraries/angular-resource/angular-resource.js'),
        url('libraries/angular-sanitize/angular-sanitize.js')
      ]
    }
  }
};