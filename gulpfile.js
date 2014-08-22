'use strict';

var gulp = require('gulp');
var replace = require('gulp-replace');
var del = require('del');
var jade = require('gulp-jade');

var env = require('./env');
var libs = require('./configs/libs');

var srcHome = './ui/src';
var distHome = './ui/dist';

gulp.task('clean', function(){
  del([ distHome + '/*' ], { force: true });
});

gulp.task('index-process', function(){
  var data = { env: env, ui: libs.statics.dev, url: libs.url };
  gulp.src([ srcHome + '/index.jade' ])
    .pipe(jade({ data: data, compileDebug: true, pretty: true }))
    .pipe(gulp.dest(distHome));
});

gulp.task('dev', [ 'clean', 'index-process' ], function(){
  gulp.src([ 'images/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/images'));
  gulp.src([ 'libraries/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/libraries'));
  gulp.src([ 'defines/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/defines'));
  gulp.src([ 'scripts/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/scripts'));
  gulp.src([ 'styles/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/styles'));
  gulp.src([ 'templates/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/templates'));
});

gulp.task('default', [ 'dev' ]);