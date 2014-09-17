'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var jade = require('gulp-jade');

var keeper = require('./ui/.helper/assetKeeper');

var env = require('./env');
var lib = require('./ui/.helper/asset/libraries');
var com = require('./ui/.helper/asset/components');

var srcHome = './ui/src';
var distHome = './ui/dist';

gulp.task('index-process', function(){
  gulp.src(distHome + '/images', { read: false, force: true }).pipe(clean());

  var data = {
    env : env,
    url : keeper.url,
    ui  : {
      lib: {
        styles  : keeper.urlBoxFactory(lib.builtin.styles, keeper.urlProcessors.library),
        scripts : keeper.urlBoxFactory(lib.builtin.scripts, keeper.urlProcessors.library)
      },
      com: {
        styles  : keeper.urlBoxFactory(com.builtin.styles, keeper.urlProcessors.style),
        scripts : keeper.urlBoxFactory(com.builtin.scripts, keeper.urlProcessors.script)
      }
    }
  };

  return gulp.src([ srcHome + '/index.jade' ])
    .pipe(jade({ data: data, compileDebug: true, pretty: true }))
    .pipe(gulp.dest(distHome));
});

gulp.task('dev', [ 'index-process' ], function(){

  gulp.src(distHome + '/images', { read: false, force: true }).pipe(clean());
  gulp.src(distHome + '/defines', { read: false, force: true }).pipe(clean());
  gulp.src(distHome + '/scripts', { read: false, force: true }).pipe(clean());
  gulp.src(distHome + '/styles', { read: false, force: true }).pipe(clean());
  gulp.src(distHome + '/templates', { read: false, force: true }).pipe(clean());

  gulp.src([ 'images/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/images'));
  gulp.src([ 'defines/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/defines'));
  gulp.src([ 'scripts/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/scripts'));
  gulp.src([ 'styles/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/styles'));
  gulp.src([ 'templates/**/*.*' ], { cwd: srcHome }).pipe(gulp.dest(distHome + '/templates'));

});

gulp.task('blog', [], function(){
  gulp.src([ 'index.html' ], { cwd: './blog/src' }).pipe(gulp.dest('.blog/dist/index.html'));
});

gulp.task('default', [ 'dev', 'blog' ]);