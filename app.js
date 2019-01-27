require("dotenv").config();

var express = require("express");
var Fountain = require("./models/fountain");
var mongoose = require("mongoose");
var app = express();
var path = require("path");

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

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});