'use strict';

var gulp = require('gulp');

// CSS
var sass = require('gulp-sass');

// JS
var babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

// CSS
gulp.task('sass', function () {
  return gulp.src('./src/sass/app.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.sass', ['sass']);
});

// JS
gulp.task('js', function () {
    try {
      browserify({entries: 'src/js/app.js', extensions: ['.js'], debug: true})
          .transform(babelify, { presets: ['es2015'] })
          .bundle()
          .pipe(source('app.js'))
          .pipe(gulp.dest('assets/js'));
    } catch(e) {
      console.log('\nJS Error: ', e.message, '\n');
    }
});
gulp.task('js:watch', function () {
  gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['watch', 'sass', 'js']);
gulp.task('watch', ['sass:watch', 'js:watch']);
