const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

const db = require('./config/mongoose');
const user = require('./models/user');


app.use(express.urlencoded({extended: false}));
app.use('/', require('./routes'));


app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

app.listen(port, function(err){
    if(err){
        console.log(`error in running the server : ${err}`);
        return;
    }
    console.log(`server is running on port : ${port}`);
});