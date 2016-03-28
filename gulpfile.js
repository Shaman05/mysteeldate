/**
 * Created by ChenChao on 2016/1/27.
 */

var fs            = require('fs');
var path          = require('path');
var gulp          = require('gulp');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');

gulp.task('concat-lib', function(){
  return gulp.src(['lib/*.js'])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('.build'));
});

gulp.task('concat-cdn', function(){
  return gulp.src(['cdn/cloudflare/*.js', 'cdn/createjs/*.js'])
    .pipe(concat('cdn.min.js'))
    .pipe(gulp.dest('.build'));
});

gulp.task('concat-master', function(){
  return gulp.src(['js/master.min.js', 'js/d.js', 'js/mysteeldata.js'])
  .pipe(concat('master.min.js'))
  .pipe(gulp.dest('.build'));
});

gulp.task('uglify', ['concat-lib', 'concat-cdn', 'concat-master'], function(){
  return gulp.src('.build/*.js')
    .pipe(uglify({
      mangle: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['uglify'], function(){
  console.log('Done!');
});