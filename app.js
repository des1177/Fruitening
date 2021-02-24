

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));

app.get("/", function(req, res) {
  // req= request from client browser
  // res: response that my server is sending to client's web browser
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.url);
  const query = req.body.cityName;
  const id = "db6d9ad0518395fc08fe1940b7ce691d";
  const units = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + id +"&units=" + units ;

  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data)

      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description // weatherData + . +copied from JSON tree
      const icon = weatherData.weather[0].icon
      const imageURL= "http://openweathermap.org/img/wn/" + icon + "@2x.png"

      // res.writeHead("<link rel='stylesheet' href='styles.css'>");
      res.write('<html>');
      res.write('<head>');
      res.write("<link rel='stylesheet' href='styles.css'>");
      res.write('</head>')
      res.write('<body class="bg">');
      res.write('<div class="weatherReport">');
      res.write("<h1> " + weatherDescription + "<h1>");
      res.write("<h3>Current temperature : " + temp + " &#8451 <h3>");
      res.write("<img src=" + imageURL + ">");
      res.write('</div>');
      res.write('</body>');
      res.write('</html>');
      res.send();
    });
  });
})

//////////////////////////////////////////////////

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
