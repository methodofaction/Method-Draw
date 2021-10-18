const gulp = require('gulp');
const concat = require('gulp-concat');
const useref = require('gulp-useref');
const replace = require('gulp-replace');
const cachebust = require('gulp-cache-bust');
const minify = require('gulp-minify');

gulp.task('css', function () {
  return gulp.src('src/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
  return gulp.src(['src/js/*.js', 'src/lib/*.js']) 
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('loading', function () {
  return gulp.src('src/js/loading.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('index', function () {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(cachebust({type: 'timestamp'}))
    .pipe(gulp.dest('dist'));
});

// no service worker implemented yet
gulp.task('cache', function(){
  return gulp.src(['./src/serviceworker.js'])
    .pipe(replace('<timestamp>', Date.now()))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('manifest', function(){
  return gulp.src(['./src/site.webmanifest'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('images', function(){
  return gulp.src(['src/images/**/*'])
    .pipe(gulp.dest('dist/images'));
});

gulp.task('extensions', function(){
  return gulp.src(['src/extensions/**/*'])
    .pipe(gulp.dest('dist/extensions'));
});

gulp.task('shapelib', function(){
  return gulp.src(['src/shapelib/**/*'])
    .pipe(gulp.dest('dist/shapelib'));
});

gulp.task('canvg', function(){
  return gulp.src(['src/js/lib/canvg.js', 'src/js/lib/rgbcolor.js'])
    .pipe(gulp.dest('dist/js/lib'));
});

gulp.task('build', 
  gulp.series(
      'css', 
      'js', 
      'index', 
      'manifest',
      'images',
      'extensions',
      'shapelib',
      'canvg'
  )
);