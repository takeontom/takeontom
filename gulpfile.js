const gulp = require('gulp');
const util = require('gulp-util');
const changed = require('gulp-changed');
const imageResize = require('gulp-image-resize');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const webpackStream = require('webpack-stream');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const del = require('del');
const gulpSequence = require('gulp-sequence');
const eslint = require('gulp-eslint');
const shell = require('gulp-shell');
const autoprefixer = require('gulp-autoprefixer');

gulp.task(
  'watch', [
    'resize_portfolio_images:watch', 'sass:watch', 'js:watch', 'fonts:watch',
    'lint:js:watch',
  ],
  () => util.log('Watchers started'),
);

gulp.task(
  'build',
  ['resize_portfolio_images', 'sass', 'js', 'fonts', 'images'],
  () => util.log('Build complete'),
);

gulp.task('build:full', gulpSequence('clean:public', 'build'));

gulp.task('clean:public', () => del(['./public_dist/**/*']));

gulp.task(
  'lint',
  ['lint:js', 'lint:pug'],
);

gulp.task(
  'lint:js',
  () => gulp.src(['**/*.js', '!node_modules/**', '!public_dist/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()),
);

gulp.task(
  'lint:js:watch',
  () => gulp.watch('./**/*.js', ['lint:js']),
);

gulp.task(
  'lint:pug',
  () => gulp.src('views/*.pug')
    .pipe(shell([
      'npx pug-lint <%= file.path %>',
    ])),
);

gulp.task(
  'lint:pug:watch',
  () => gulp.watch('views/**/*.pug', ['lint:pug']),
);

gulp.task(
  'sass',
  () => gulp.src('./public_src/stylesheets/takeontom.scss')
    .pipe(changed('./public_dist/css/'))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public_dist/css/')),
);

gulp.task(
  'sass:watch',
  ['sass'],
  () => gulp.watch('./public_src/stylesheets/**/*.*', ['sass']),
);

gulp.task(
  'js',
  () => gulp.src('./public_src/js/takeontom.js')
    .pipe(changed('./public_dist/js/'))
    .pipe(webpackStream({
      devtool: 'source-map',
      output: {
        library: 'TakeOnTom',
        libraryTarget: 'var',
        filename: 'takeontom.js',
      },
      plugins: [
        new UglifyJSPlugin({ sourceMap: true }),
      ],
    }))
    .pipe(gulp.dest('./public_dist/js/')),
);

gulp.task(
  'js:watch',
  ['js'],
  () => gulp.watch('./public_src/js/**/*.*', ['js']),
);

gulp.task(
  'fonts',
  () => gulp.src('./public_src/font/*.*')
    .pipe(changed('./public_dist/font/'))
    .pipe(gulp.dest('./public_dist/font/')),
);

gulp.task(
  'fonts:watch',
  ['fonts'],
  () => gulp.watch('./public_src/font/**/*.*', ['fonts']),
);

gulp.task(
  'images',
  () => gulp.src(['./public_src/images/**/*.*', '!./public_src/images/portfolio/**'])
    .pipe(changed('./public_dist/images/'))
    .pipe(gulp.dest('./public_dist/images/')),
);

gulp.task(
  'resize_portfolio_images',
  () => gulp.src('./public_src/images/portfolio/*.{jpg,png}')
    .pipe(changed('./public_dist/images/portfolio/'))
    .pipe(imageResize({
      width: 200,
      height: 200,
      crop: false,
      upscale: false,
    }))
    .pipe(gulp.dest('./public_dist/images/portfolio/')),
);

gulp.task(
  'resize_portfolio_images:watch',
  ['resize_portfolio_images'],
  () => gulp.watch(
    './public_src/images/portfolio/*.{jpg,png}',
    ['resize_portfolio_images'],
  ),
);
