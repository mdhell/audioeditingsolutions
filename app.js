var express = require("express");

var app = express();
// using SendGrid's Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
sendgrid.send({
  to:       'mdhellstrom@gmail.com',
  from:     'mdhell@aol.com',
  subject:  'Hello World',
  text:     'My first email through SendGrid.'
}, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
});




app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));



app.get("/", function(req, res) {
   res.render("home"); 
});

app.get("/", function(req, res) {
   res.render("home"); 
});

app.get("/home", function(req, res) {
   res.render("home"); 
});


app.get("/pricing", function(req, res) {
   res.render("pricing"); 
});

app.get("/clients", function(req, res) {
   res.render("clients"); 
});

app.get("/getstarted", function(req, res) {
   res.render("getstarted"); 
});

app.get("/about", function(req, res) {
   res.render("about"); 
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("AudioSolutions server is running!");
});