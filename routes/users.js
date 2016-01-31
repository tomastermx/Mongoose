var mongoose = require( 'mongoose' );


var userSchema = new mongoose.Schema({
name: String,
email: {type: String, unique:true},
createdOn: { type: Date, default: Date.now },
modifiedOn: Date,
lastLogin: Date
});
// Build the User model
var User = mongoose.model( 'User',userSchema );



//index

exports.index = function(req,res){
if(req.session.loggedIn === true ){

res.render('user-page',{
title: req.session.user.name,
name: req.session.user.name,
email: req.session.user.email,

})

}else{

res.redirect('/login');
}
}





//Post new user

exports.Create = function(req,res){
res.render('user-form',{
title:'Create user',
buttonText: "Join"
});


};





// POST new user creation form
exports.doCreate = function(req, res){
User.create({
name: req.body.FullName,
email: req.body.Email,
modifiedOn : Date.now(),
lastLogin : Date.now()

},function(err,user) {
if(!err){
console.log("User created and saved:"+user);
req.session.user = {"name": user.name, "email" :user.email, "_id": user._id };
req.session.loggedIn = true ;
res.redirect('/users');


}



});


};

//Get Login Page
exports.login = function (req,res){

res.render('login-form',{title:'Log in'})
}







exports.doLogin = function (req,res){

if(req.body.Email){
res.send('bien!');
} else{
res.redirect('/');
}


}

