const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fountainSchema = new Schema({

    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
});

module.exports = fountain = mongoose.model('Fountain', fountainSchema);