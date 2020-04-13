const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){



res.sendFile(__dirname + "/index.html");
});



app.listen(3000, function(){

  console.log("Server is spun up on port 3000");
})

app.post("/", function(req, res){


  const unit = "imperial";
  const apiKey = "c2297fd5bb9a23a3dec934458232920b";
  const query = req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const feelsLike = weatherData.main.feels_like
      const weatherDescript = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imgURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"




      res.write("<h1>The temperature in " +  query + " is " + temp + " degrees farenheit!</h1>");
      res.write("<p>The weather seems like it is " + weatherDescript + "</p>");
      res.write("<img src = " + imgURL +">");
      res.send();
      console.log(temp, feelsLike, weatherDescript);
});
});
});
