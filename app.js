require("dotenv").config();

var express = require("express");
var Fountain = require("./models/fountain");
var mongoose = require("mongoose");
var app = express();
var path = require("path");
var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null
};

var geocoder = NodeGeocoder(options);

mongoose.connect(process.env.DATABASEURL);

app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,"views")));

app.get("/", function(req, res) {
    Fountain.find({}).exec(function(err, allFountains) {
        if (err) {
            console.log(err);
        } else {
            res.render("GetWaterFrontpage.html", {fountains: allFountains});
        }
    });
});

app.post("/", function(req, res) {
    var description = req.body.description;
    geocoder.geocode(req.body.location, function (err, data) {
        if (err || !data.length) {
          return res.redirect('back');
        }
        var lat = data[0].latitude;
        var lng = data[0].longitude;
        var location = data[0].formattedAddress;
        var newFountain = {description: description, location: location, lat: lat, lng: lng};
        Fountain.create(newFountain, function(err, fountain) {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/");
            }
        });
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});