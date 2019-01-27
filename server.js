const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const fountains = require('./routes/api/fountains');

const app = express();

app.use(bodyParser.json());

//DB configuration 
const db = require('./config/db').mongoURI;

// Connect to Mongo
mongoose.connect(db)
    .then( () => console.log('mongodb is connected'))
    .catch( err => console.log(err));

//Launch local server
app.listen(3000, () => console.log('Server started. '));

// Use Routes
app.use('/api/fountains', fountains);