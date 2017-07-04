'use strict';

var gulp = require('gulp');

// CSS
var sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');

// JS
var babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    pump = require('pump');

// CSS
gulp.task('sass', function () {
  return gulp.src('./src/sass/app.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/dev'));
});
gulp.task('css:minify', function() {
  return gulp.src('assets/dev/app.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.s[a|c]ss', ['sass']);
  gulp.watch('./assets/dev/**/*.css', ['css:minify']);
});


// JS
gulp.task('js', function () {
    try {
      browserify({entries: 'src/js/app.js', extensions: ['.js']})
          .transform(babelify, { presets: ['es2015'], compact: true })
          .bundle()
          .pipe(source('app.js'))
          .pipe(gulp.dest('assets/dev'));
    } catch(e) {
      console.log('\nJS Error: ', e.message, '\n');
    }
});
gulp.task('js:minify', function(cb) {
  pump([
    gulp.src('assets/dev/app.js'),
    uglify(),
    gulp.dest('assets/js')
  ], cb);
});
gulp.task('js:watch', function () {
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./assets/dev/**/*.js', ['js:minify']);
});

gulp.task('default', ['watch', 'sass', 'js']);
gulp.task('watch', ['sass:watch', 'js:watch']);
