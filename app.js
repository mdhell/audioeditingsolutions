var express = require("express");
var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); // needed to parse input from contact form

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

app.get("/workflow", function(req, res) {
   res.render("workflow"); 
});

// using SendGrid's Node.js Library to post message from contact form
// https://github.com/sendgrid/sendgrid-nodejs
app.post("/getstartedForm", function(req, res) {
    var name = req.body.name;
    var weburl = req.body.weburl;
    var email = req.body.email;
    var comments = req.body.comments;
  sendgrid.send({
  to:       'john.bukenas@gmail.com',
  from:     email,
  subject:  'A message from your website form!',
  text:     'You have received a message from ' + name + '.\n' + 'Web address: ' +  weburl + '. \n' + 'Email address: ' + email + '.\n\n' + comments
}, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
});
    res.redirect("/getstarted");
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