
var mongoose = require('mongoose');
var Project = mongoose.model('Project');




exports.create = function(req,res){
res.render('project-form.jade',{
userID:req.session.user._id,
name: req.session.user.name

})

}



exports.doCreate = function(req,res){

res.redirect('/');
console.log(req.body.task);

}
