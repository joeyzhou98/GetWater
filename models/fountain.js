var mongoose = require("mongoose");

var fountainSchema = new mongoose.Schema({
    location: String,
    description: String,
    lat: Number,
    lng: Number
});

module.exports = mongoose.model("Fountain", fountainSchema);