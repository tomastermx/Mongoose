




//FIRST  ORM PROGRAM

var mongoose =require('mongoose');

//DB parameters
dbURI ='mongodb://localhost/gooze'

mongoose.connect(dbURI);

mongoose.connection.on('connected',function(){
console.log('Mongoose connected to '+dbURI);
});





/************************ 
 * 
 *  USER SCHEMA
 * 
 * 
 * 
 * 
*/





/*****************************************************

PROJECT SCHEMA

**********************************************************/

var projectSchema = new mongoose.Schema({
projectName:String,
createdOn:{type:Date,default:Date.now},
modifiedOn:Date,
contributors:String,
tasks:String,
createdby:String,
userid:String



});

mongoose.model('Project',projectSchema);
