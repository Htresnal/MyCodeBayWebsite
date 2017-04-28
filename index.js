var express = require('express');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://bemaovcelglemi:b0f7f122431317ce65931e2bc327fa6e86fcdb614358264932b7e8f297fd3778@ec2-23-21-96-70.compute-1.amazonaws.com:5432/d8uqn1mr35dekr';

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/angular'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/index', function(request, response) {
  response.redirect('/');
});

app.get('/articles', function(request, response) {
  response.render('pages/articles');
});

app.get('/programs', function(request, response) {
  response.render('pages/programs');
});

app.get('/links', function(request, response) {
  response.render('pages/links');
});

app.get('/db', function(request, response) {
  response.render('pages/db');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


