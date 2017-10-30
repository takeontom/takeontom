var gulp = require('gulp');
var changed = require("gulp-changed");
var imageResize = require('gulp-image-resize');

gulp.task('resize_portfolio_images', function () {
  gulp.src('./public_src/images/portfolio/*.{jpg,png}')
    .pipe(changed('./public/images/portfolio/'))
    .pipe(imageResize({
      width : 200,
      height : 200,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('./public/images/portfolio/'));
});
