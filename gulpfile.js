'use strict';

var gulp = require('gulp');
var replace = require('gulp-replace');
var del = require('del');
var jade = require('gulp-jade');

var exec = require('child_process').exec;
var env = require('./env');
var libs = require('./configs/libs');

var srcHome = 'ui/src';
var distHome = 'ui/dist';

gulp.task('clean', function(){
  del([distHome + '/*'], { force: true });
});

gulp.task('dev', ['clean'], function(){

  // indexFile process
  var data = { env: env, ui: libs.statics.dev, url: libs.url };
  gulp.src([srcHome + '/index.jade'])
    .pipe(jade({ data: data, compileDebug: true, pretty: true }))
    .pipe(gulp.dest(distHome));

  // templates process
  exec('cp ' + srcHome + '/templates ' + distHome + '/ -r');
  // scripts process
  exec('cp ' + srcHome + '/scripts ' + distHome + '/ -r');
  // styles process
  exec('cp ' + srcHome + '/styles ' + distHome + '/ -r');
  // resources process
  exec('cp ' + srcHome + '/resources ' + distHome + '/ -r');
  // images process
  exec('cp ' + srcHome + '/images ' + distHome + '/ -r');

});

gulp.task('default', ['dev']);