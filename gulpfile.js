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
    pump = require('pump'),
    concat = require('gulp-concat');

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

gulp.task('js:concat', function () {
  var files = [
    'src/components/jquery/dist/jquery.js',
    'src/components/popper.js/index.js',
    'src/components/bootstrap/dist/js/bootstrap.js',
    'src/components/js-cookie/src/js.cookie.js',
    'src/js/TangleKit/Tangle.js',
    'src/js/TangleKit/mootools.js',
    'src/js/TangleKit/sprintf.js',
    'src/js/TangleKit/BVTouchable.js',
    'src/js/TangleKit/TangleKit.js',
    'src/js/vendor/comment-reply.js',
    'src/js/app.js',
    '../../plugins/aesop-story-engine/public/assets/js/ai-core.min.js',
    '../../plugins/aesop-story-engine/public/assets/js/ast.js',
    '../../plugins/aesop-story-engine/public/assets/js/scrollreveal.js',
    '../../plugins/aesop-story-engine/public/assets/js/waypoints.js'
  ];

  return gulp.src(files)
    .pipe(concat('app.bundle.js'))
    .pipe(gulp.dest('assets/dev'));
});


gulp.task('js:minify', function(cb) {
  pump([
    gulp.src('assets/dev/app.bundle.js'),
    uglify(),
    gulp.dest('assets/js')
  ], cb);
});
gulp.task('js:watch', function () {
  gulp.watch('./src/js/**/*.js', ['js:concat']);
  gulp.watch('./assets/dev/**/*.js', ['js:minify']);
});

gulp.task('default', ['watch', 'sass', 'js:concat', 'js:minify']);
gulp.task('watch', ['sass:watch', 'js:watch']);
