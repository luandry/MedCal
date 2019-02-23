/*We want to send data to our Mongo database. In index.html we have a form, and we use it here.
What you need for it to run: installed mongo and node. The required packages should already be
in the node_modules folder
To run this enter "node app.js" into your console. Then enter "http://localhost:3000"
into your browser. Enter some data and submit it. You should now see it in your database,
in the database "medcal", collection "users".

*/
var express = require("express");
var app = express();
var port = 3000;
var router = express.Router();
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
var User = mongoose.model("Users", nameSchema);

var docSchema = new mongoose.Schema({
    firstname: String,
    lastname: String

});
var Doctor = mongoose.model("gps", docSchema);


// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
Doctor.find({ 'firstname': 'Anton', 'lastname' : 'Yamkovoy' }, 'firstname lastname', function (err, Doctor) {
    if (err) return handleError(err);

    console.log('doctor firstName : %s, doctor lastName: %s', Doctor.firstname, Doctor.lastname);
});


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
