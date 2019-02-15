var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/*


Documents
{
	{id : 1, Name : Anton},
	{id : 2, Name : Xie},
	{id : 3, Name : Benno},
}

assume this database is at mongodb://localhost/nameDB




 */

// Query for data example
// using db collection find


var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/medcal';   // database link

MongoClient.connect(url, function(err, db) {

  var cursor = db.collection('gps').find();

  cursor.each(function(err, doc) {

    console.log(doc);

  });
  db.close();
});

// Sample input for this type of find operation would be
/*

{
_id : 562hshshh4h42h2hh242242,
id : 1,
Name : 'Anton' }
{
_id : abdbdbsft3i5t3i5j3525423,
id : 2,
Name : 'Xie' }
{
_id : 1242525j5i3j53i5j3532535,
id : 3,
Name : 'Benno' }

 */


// Inserting documents in the collection

MongoClient.connect(url, function(err, db) {

  db.collection('gps').insertOne({
    id: 45,
    firstname: "Tim"
  });
  db.close()
});


// Updating documents

MongoClient.connect(url, function(err, db) {

  db.collection('gps').updateOne({
    "firstname": "Tim"
  }, {
    $set: {
      "firstname": "Timmy"
    }
  });
  db.close()
});


// Deleting documents

MongoClient.connect(url, function(err, db) {

  db.collection('gps').deleteOne(

      {
        "firstname": "Luan"
      }

  );
  db.close()
});
