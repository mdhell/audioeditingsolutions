var express = require("express");
var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

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

// using SendGrid's Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
app.post("/getstartedForm", function(req, res) {
    var name = req.body.name;
    var weburl = req.body.weburl;
    var email = req.body.email;
    var comments = req.body.comments;
  sendgrid.send({
  to:       'mdhellstrom@gmail.com',
  from:     'me@example.com',
  subject:  'Working',
  text:     'Finally, I have figured it out.' + name + weburl + email + comments
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