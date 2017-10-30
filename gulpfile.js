var gulp = require('gulp');
var changed = require("gulp-changed");
var imageResize = require('gulp-image-resize');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack-stream');
var del = require('del');
var gulpSequence = require('gulp-sequence')

gulp.task('watch', ['resize_portfolio_images:watch', 'sass:watch', 'js:watch', 'fonts:watch'], () => {
  console.log('Watchers started');
})

gulp.task('build', ['resize_portfolio_images', 'sass', 'js', 'fonts'], () => {
  console.log('Build complete');
})

gulp.task('build:full', gulpSequence('clean:public', 'build'));

gulp.task('clean:public', () => {
  return del(['./public/**/*']);
});

gulp.task('sass', () => {
  return gulp.src('./public_src/stylesheets/takeontom.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./public/css/'));
});

gulp.task('sass:watch', ['sass'], () => {
  gulp.watch('./public_src/stylesheets/**/*.*', ['sass']);
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

gulp.task('fonts', () => {
  return gulp.src('./public_src/font/*.*')
  .pipe(gulp.dest('./public/font/'));
})

gulp.task('fonts:watch', ['fonts'], () => {
  gulp.watch('./public_src/font/**/*.*', ['fonts']);
})

gulp.task('resize_portfolio_images', () => {
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

gulp.task('resize_portfolio_images:watch', ['resize_portfolio_images'], () => {
  gulp.watch('./public_src/images/portfolio/*.{jpg,png}', ['resize_portfolio_images']);
});
