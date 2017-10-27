var gulp = require('gulp');
var changed = require("gulp-changed");
var imageResize = require('gulp-image-resize');

gulp.task('resize', function () {
  gulp.src('./public_src/images/*.{jpg,png}')
    .pipe(changed('./public/images/'))
    .pipe(imageResize({
      width : 200,
      height : 200,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('./public/images/'));
});
