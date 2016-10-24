
var mongoose = require('mongoose');
var Project = mongoose.model('Project');




exports.create = function(req,res){
res.render('project-form.jade',{
userID:req.session.user._id,
name: req.session.user.name

});

};



   exports.doCreate = function(req,res){

Project.create({
projectName:req.body.Projectname,
tasks:req.body.task,
modifiedOn:Date.now(),
createdby:req.session.user.name,
userid: req.session.user._id


     },function(err,project){

      if(!err){

        console.log(project);
        console.log(project._id);
        var ruta = project._id;
  res.redirect('/project/'+ruta);

            }


   }







    );





//console.log(req.body.task);
//console.log(req.body.Projectname);
//console.log(req.session.user.name);
//console.log(req.session.user._id);
};





exports.displayInfo = function(req,res){



 Project.findOne({'_id':req.params.id },function(err,project){

if(project) {

  console.log(project);


res.render('project',{project:project});


}

 });


};








exports.list = function(req,res) {

Project.find({},function(err, project){

if(project){

  console.log(project);


}
});

};
