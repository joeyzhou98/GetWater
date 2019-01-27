require("dotenv").config();

var express = require("express");
var Fountain = require("./models/fountain");
var mongoose = require("mongoose");
var app = express();

mongoose.connect(process.env.DATABASEURL);

app.get("/", function(req, res) {
    Fountain.findOne({}).exec(function(err, allFountains) {
        if (err) {
            console.log(err);
        } else {
            res.render("mainPage.ejs", {fountains: allFountains});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});