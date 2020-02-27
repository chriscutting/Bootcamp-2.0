// jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Whats good</h1>");
});

app.get("/contact", function(req, res){
  res.send("<h2>You are the contact page!</h2>");
});

app.get("/about", function(req, res){
  res.send("<h1>It's a bio page!</h1> <h2>Let's try with two lines!</h2>");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Code</li><li>Vidyagames</li><li>exercise</li></ul>");
});



app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
