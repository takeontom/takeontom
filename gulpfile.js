const path = require('path');

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
const puppeteer = require('puppeteer');

gulp.task(
  'watch',
  [
    'resize_portfolio_images:watch',
    'sass:watch',
    'js:watch',
    'fonts:watch',
    'lint:js:watch',
    'lint:pug:watch',
    'images:watch',
  ],
  () => util.log('Watchers started'),
);

gulp.task(
  'build',
  ['resize_portfolio_images', 'sass', 'js', 'fonts', 'images', 'resume_pdf'],
  () => util.log('Build complete'),
);

gulp.task(
  'build:full',
  gulpSequence('clean:public', 'resume_pdf:clean', 'build'),
);

gulp.task('clean:public', () => del(['./public_dist/**/*']));

gulp.task('lint', ['lint:js', 'lint:pug']);

gulp.task('lint:js', () =>
  gulp
    .src(['**/*.js', '!node_modules/**', '!public_dist/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()),
);

gulp.task('lint:js:watch', () => gulp.watch('./**/*.js', ['lint:js']));

gulp.task('lint:pug', () =>
  gulp.src('views/*.pug').pipe(shell(['npx pug-lint <%= file.path %>'])),
);

gulp.task('lint:pug:watch', () => gulp.watch('views/**/*.pug', ['lint:pug']));

gulp.task('sass', () =>
  gulp
    .src([
      './public_src/stylesheets/common.scss',
      './public_src/stylesheets/home.scss',
      './public_src/stylesheets/resume.scss',
    ])
    .pipe(changed('./public_dist/css/'))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public_dist/css/')),
);

gulp.task('sass:watch', ['sass'], () =>
  gulp.watch('./public_src/stylesheets/**/*.*', ['sass']),
);

gulp.task('js', () =>
  gulp
    .src('./public_src/js/takeontom.js')
    .pipe(changed('./public_dist/js/'))
    .pipe(
      webpackStream({
        devtool: 'source-map',
        output: {
          library: 'TakeOnTom',
          libraryTarget: 'var',
          filename: 'takeontom.js',
        },
        plugins: [new UglifyJSPlugin({ sourceMap: true })],
      }),
    )
    .pipe(gulp.dest('./public_dist/js/')),
);

gulp.task('js:watch', ['js'], () =>
  gulp.watch('./public_src/js/**/*.*', ['js']),
);

gulp.task('fonts', () =>
  gulp
    .src('./public_src/font/*.*')
    .pipe(changed('./public_dist/font/'))
    .pipe(gulp.dest('./public_dist/font/')),
);

gulp.task('fonts:watch', ['fonts'], () =>
  gulp.watch('./public_src/font/**/*.*', ['fonts']),
);

gulp.task('images', () =>
  gulp
    .src(['./public_src/images/**/*.*', '!./public_src/images/portfolio/**'])
    .pipe(changed('./public_dist/images/'))
    .pipe(gulp.dest('./public_dist/images/')),
);

gulp.task('images:watch', ['images'], () =>
  gulp.watch(
    ['./public_src/images/**/*.*', '!./public_src/images/portfolio/**'],
    ['images'],
  ),
);

gulp.task('resize_portfolio_images', () =>
  gulp
    .src('./public_src/images/portfolio/*.{jpg,png}')
    .pipe(changed('./public_dist/images/portfolio/'))
    .pipe(
      imageResize({
        width: 200,
        height: 200,
        crop: false,
        upscale: false,
      }),
    )
    .pipe(gulp.dest('./public_dist/images/portfolio/')),
);

gulp.task('resize_portfolio_images:watch', ['resize_portfolio_images'], () =>
  gulp.watch('./public_src/images/portfolio/*.{jpg,png}', [
    'resize_portfolio_images',
  ]),
);

gulp.task('resume_pdf:generate', ['sass'], async () => {
  // const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/resume/', {
    waitUntil: 'networkidle0',
  });
  await page.pdf({
    path: path.join('/tmp/resume.pdf'),
    format: 'A4',
  });
  await page.goto('http://localhost:3000/resume/anon/', {
    waitUntil: 'networkidle0',
  });
  await page.pdf({
    path: path.join('/tmp/resume-anon.pdf'),
    format: 'A4',
  });
  await browser.close();
});

gulp.task('resume_pdf:clean', () => del(['./pdfs/']));

gulp.task('resume_pdf', ['resume_pdf:generate'], () =>
  gulp
    .src(['/tmp/resume.pdf', '/tmp/resume-anon.pdf'])
    .pipe(changed('./pdfs/'))
    .pipe(gulp.dest('./pdfs/')),
);

gulp.task('resume_pdf:watch', ['resume_pdf'], () =>
  gulp.watch(['./**/*.js', './**/*.css'], ['resume_pdf']),
);
