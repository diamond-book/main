module.exports.home = function(req, res){
    console.log(req.cookies);
    return res.render('home',{
        title : 'Diamond Book | Home'
    });
}
