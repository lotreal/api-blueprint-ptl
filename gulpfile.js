'use strict';

var gulp = require('gulp');
var aglio = require('gulp-aglio');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var concat = require('gulp-continuous-concat');
var gulpProcess = require('gulp-process');

gulp.task('build', function() {
  return gulp.src(['documents/API.md', 'documents/*.md'])
    .pipe(require('gulp-concat')('API.md'))
    .pipe(gulp.dest('./.tmp/'));
});

gulp.task('document', function() {
  return gulp.src(['documents/API.md', 'documents/*.md'])
    .pipe(watch('documents/*.md'))
    .pipe(concat('index.apib'))
    .pipe(gulp.dest('./.tmp/'))
    .pipe(aglio({template: 'default'}))
    .pipe(gulp.dest('./.tmp/'))
    .pipe(connect.reload())
    .pipe(gulpProcess.restartStream('mockserver'));
});

gulp.task('server', function() {
  return connect.server({
    root: ['./.tmp'],
    port: 3456,
    livereload: {
      port: 35728
    }
  });
});

gulp.task('mock', function() {
  gulpProcess.start('mockserver', './mock-server');
});

var gopen = require('gulp-open');

gulp.task('open', function() {
  gulp.src(__filename)
    .pipe(gopen({uri: 'http://localhost:3456'}));
});

gulp.task('default', ['server', 'mock', 'document', 'open']);
