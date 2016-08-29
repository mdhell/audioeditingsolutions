var express = require("express");
var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var app = express();
// using SendGrid's Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs



app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
   res.render("home"); 
});


sendgrid.send({
  to:       'mdhellstrom@gmail.com',
  from:     'me@example.com',
  subject:  'Fourth',
  text:     'My fourth email through SendGrid.'
}, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
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