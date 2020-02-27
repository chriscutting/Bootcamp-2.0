//jshint esversion:6


const express = require('express');
const app = express();

app.listen(3000, function(){
  console.log("server has started on port 3000");
});


app.get("/", function(req, res){
  res.send("I am a calculator!");
});
