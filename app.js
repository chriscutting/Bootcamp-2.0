const express = require("express");
const https = require("https");


const app = express();

app.get("/", function(req, res){

const url = "https://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=c2297fd5bb9a23a3dec934458232920b&units=imperial"

https.get(url, function(response){
  console.log(response.statusCode);

  response.on("data", function(data){
    const weatherData = JSON.parse(data)
    const temp = weatherData.main.temp
    const feelsLike = weatherData.main.feels_like
    const weatherDescript = weatherData.weather[0].description
    console.log(temp, feelsLike, weatherDescript);
  })


})


  res.send("New message received!")

})





app.listen(3000, function(){

  console.log("Server is spun up on port 3000");
})
