/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , menu = require('./routes/menu')
  , http = require('http')
  , path = require('path');
//var methodOverride = require('method-override');
var session = require('express-session');
var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '123456789',
              database : 'test'
            });
 
connection.connect(function(error){
  if(error) throw error
  else console.log("Database Connected...")
});
 
global.db = connection;



// all environments
app.set('port', process.env.PORT || 3030);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 360000 }
            }))
 

// development only
app.get('/', routes.index);//call for main index page
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post 
app.get('/login', routes.index);//call for login page
app.post('/login', user.login);//call for login post
app.get('/home', user.home);//call for home page after login
app.get('/logout', user.logout);//call for logout
app.get('/settings',user.settings);//to render users settings
app.get('/menu', menu.menu);//to render menu page
app.get('/menu/food', menu.food);//to render menu page
app.get('/menu/museums', menu.museums);//to render menu page
app.get('/menu/zoos', menu.zoos);//to render menu page
app.get('/menu/parks', menu.parks);//to render menu page
app.get('/menu/newRec', menu.newRec);//to render newRec page
app.post('/menu/newRec', menu.newRec);//call for newRec post 
app.get('/map', menu.map); //render map page
app.post('/recs/:id', menu.comment); //call for comment post
 
//Middleware
//Listen on port 3030
app.listen(3030, () => console.info('Listening on port 3030...'))
