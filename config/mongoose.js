const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/diamondbook_db");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));

db.once('open', function(){
    console.log('connected to Database :: MongoDB');
})


module.exports = db;