var gulp = require('gulp');
var changed = require("gulp-changed");
var imageResize = require('gulp-image-resize');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack-stream');

gulp.task('watch', ['resize_portfolio_images:watch', 'sass:watch', 'js:watch'], () => {
  console.log('Watchers started');
})

gulp.task('sass', () => {
  return gulp.src('./public_src/stylesheets/takeontom.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./public/css/'));
});

gulp.task('js', () => {
  return gulp.src('./public_src/js/takeontom.js')
  .pipe(webpack({output: {
    filename: 'takeontom.js'
  }}))
  .pipe(gulp.dest('./public/js/'));
})

gulp.task('js:watch', ['js'], () => {
  gulp.watch('./public_src/js/**/*.*', ['js']);
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./public_src/stylesheets/**/*.*', ['sass']);
});

gulp.task('resize_portfolio_images', function () {
  return gulp.src('./public_src/images/portfolio/*.{jpg,png}')
    .pipe(changed('./public/images/portfolio/'))
    .pipe(imageResize({
      width : 200,
      height : 200,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('./public/images/portfolio/'));
});

gulp.task('resize_portfolio_images:watch', ['resize_portfolio_images'], function () {
  gulp.watch('./public_src/images/portfolio/*.{jpg,png}', ['resize_portfolio_images']);
});
