var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session =require('express-session');
var bodyParser = require('body-parser');
var mongoose =require('mongoose');
var db = require('./model/db');
var routes = require('./routes');
var user = require('./routes/users');
var project = require('./routes/project');
var lista = require('./routes/users');
var app = express();





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
}))

app.use('/', routes);

//USER ROUTES
app.get('/users', user.index);
app.get('/users/new', user.Create);
app.post('/users/new', user.doCreate);


app.get('/login',  user.login);
app.post('/login',user.doLogin);


//app.get('/user/edit',user.edit );
//app.post('/user/edit',user.doEdit);
//app.get('/user/delete',user.confirmDelete);
//app.post('/user/delete',user.doDelete);




//PROJECT ROUTE

app.get('/project/new', project.create);
app.post('/project/new', project.doCreate);


app.get('/users/all',user.lista);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});





module.exports = app;


app.listen(3000);
