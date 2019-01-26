require("dotenv").config();

var express = require("express");
var mongoose = require("mongoose");
var app = express();

mongoose.connect(process.env.DATABASEURL);

app.get("/", function(req, res) {
    res.render("mainPage.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});