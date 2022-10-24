const User = require('../models/user');
const { use } = require('../routes');

module.exports.profile = function(req, res){
    // if use of Manual Authentication
    // if(req.cookies.user_id){
    //     User.findById(req.cookies.user_id, function(err, user){
    //         if(user){
    //             return res.render('user_profile',{
    //                 title:"Profile page | Diamond Book",
    //                 user: user
    //             });
    //         }

    //         return res.redirect('/user/sign-in');
    //     })
    // }
    // else{
    //     return res.redirect('/user/sign-in');
    // }

    // authentication using passport middelware ago check all condition
    return res.render('user_profile',{
        title:"Profile page | Diamond Book"
    });
}


module.exports.signIn = function(req, res){
    //already sign in then go to profile page
    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }

    res.render('user_sign_in',{
        title: "Diamond Book | sign in"
    })
}

module.exports.signUp = function(req, res){
    //already sign up then go to profile page
    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }

    res.render('user_sign_up',{
        title: "Diamond Book | sign up"
    })
}

module.exports.destroySession = function(req, res){
    req.logout(function(err) {
        if (err) { return console.log(err); }
        return res.redirect('/');
    })
}


module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log("Error in findinng user in signing up"); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){ console.log('error in creating user while signing up'); return}

                return res.redirect('/user/sign-in');
            })
        }
        else{
            return res.redirect(back);
        }

    })
}

module.exports.createSession = function(req, res){

    // Manual Authentication
    // find the user
    // User.findOne({email: req.body.email},function(err, user){
    //     if(err){ console.log('error in Findding user in signing in'); return}

    //     // handle user found
    //     if(user){

    //         console.log(user.password);

    //         //handle password which doesn't match
    //         if(user.password != req.body.password){
    //             console.log('password doesn\'t match');
    //             return res.redirect('back');
    //         }

    //         res.cookie('user_id',user.id);

    //         return res.redirect('/user/profile');
    //     }
    //     else{
    //         return res.redirect('back');
    //     }
    // })

    return res.redirect('/');
    
}