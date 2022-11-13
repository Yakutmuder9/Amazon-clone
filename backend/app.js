require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const bodyParser = require("body-parser");
var authRouter = require('./routes/auth');
var productsRouter = require('./routes/products');

const mongoose = require('mongoose')

// connect DB
const url = process.env.MONGO_DB

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
connect.then(() => console.log('DB connected successfuly'))

var app = express();
app.use(cors({
  origin: "http://localhost:3000"
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
