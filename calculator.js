//jshint esversion:6

const bodyParse = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParse.urlencoded({extended:true}));

app.listen(3000, function(){
  console.log("server has started on port 3000");
});

app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("the result of the calculator is " + result);
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

///BMI Calculator, on the same port.

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

  var height = Number(req.body.Height);
  var weight = Number(req.body.Weight);

  var resultBMI = height / weight;

  res.send("Your BMI is " + resultBMI + "!");
});
