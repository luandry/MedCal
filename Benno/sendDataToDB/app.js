//We want to send data to our Mongo database. In index.html we have a form, and we use it here.

var express = require("express");
var app = express();
var port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/medcal");
//up till here we only imported modules and set their settings

//mongoose settings: how to parse data, I think
var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});
var User = mongoose.model("OurUsers", nameSchema);



app.get("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
