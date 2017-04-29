var express = require('express');
var pg = require('pg');
pg.defaults.ssl = true;

var app = express();

app.set('port', (process.env.PORT));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/angular'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	pg.connect(process.env.DATABASE_URL, function(err, client) {
	  if (err){
        return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * FROM "MyTable"', function(err, result) {
	    if (err){
	      return console.error('error fetching client from pool', err);
	    }
	    console.log(result.rows[0]);
	    //response.render('pages/index', {MyTable: result.rows});
	  });
	});

/*
  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});
*/


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


