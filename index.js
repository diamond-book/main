const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const port = 8000;

const app = express();

const db = require('./config/mongoose');
const user = require('./models/user');

//layout
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use for session cookies
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const MongoStore = require('connect-mongo');


app.use(cookieParser());

app.use(express.static('./assets'));
app.use(express.urlencoded({ extended: true }));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'Diamond book',
    //TODO change the secret before deployment in producton mode
    secret: 'diamondbook@1',
    saveUninitialized: false,
    cookie: {
        maxAge:(1000*60*100)
    },
    // mongo store
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb://localhost/diamondbook_db',
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongo setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log(`error in running the server : ${err}`);
        return;
    }
    console.log(`server is running on port : ${port}`);
});