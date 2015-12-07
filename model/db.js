




//FIRST  ORM PROGRAM

var mongoose =require('mongoose');

//DB parameters
dbURI ='mongodb://localhost/gooze'

mongoose.connect(dbURI);

mongoose.connection.on('connected',function(){
console.log('Mongoose connected to '+dbURI);
});





