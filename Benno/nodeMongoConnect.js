//connecting to my dummy Mongo database
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/medcal';

MongoClient.connect(url, function(err, db){
  console.log("Connected");
  var cursor = db.Collection('gps').find();
  cursor.each(function(err, doc){
    console.log(doc);
  });
  db.close();
});
