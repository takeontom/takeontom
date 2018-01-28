const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSitemap = require('express-sitemap');
const compress = require('compression');

const index = require('./routes/index');
const resume = require('./routes/resume');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public_dist')));

// app.use = (req, res, next) => {
//   // res.locals['appEnv'] = app.get('env');
//   // next();
// };

app.use('/resume', resume);
app.use('/', index);

const sitemap = expressSitemap({
  http: 'https',
  url: 'takeontom.com',
  cache: 3600000, // 1 hour
});
sitemap.generate4(app, ['/']);

app
  .get('/sitemap.xml', (req, res) => sitemap.XMLtoWeb(res))
  .get('/robots.txt', (req, res) => sitemap.TXTtoWeb(res));

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404);
  res.render('404');
});

// error handler
app.use((req, res) => {
  // set locals, only providing error in development
  res.locals.message = req.err.message;
  res.locals.error = req.app.get('env') === 'development' ? req.err : {};

  // render the error page
  res.status(req.err.status || 500);
  res.render('error');
});

module.exports = app;
