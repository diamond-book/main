const passport = require('passport');
const User = require('../models/user');

const LocalStrategy = require('passport-local').Strategy;

//Authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                console.log("error in finding user ---> passport");
                return done(err);
            }

            if (!user || user.password != password) {
                console.log('Invalid username/password');
                return done(null, false);
            }

            return done(null, user);
        });
    }
));

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
    done(null, user.id);
});


//deserializing the user from the key in the cookies
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        if (err) {
            console.log("Error in finding user ---> passport");
            return done(err);
        }

        return done(null, user);
    });
});

//check if user is authenticated
passport.checkAuthentication = function(req, res, next){
    //if the user is signed in, then pass on the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect('/user/sign-in');
}


passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the local for the views
        res.locals.user = req.user;  
    }

    next();
}

module.exports = passport;