var express = require('express')
  , mongoskin = require('mongoskin');
var app = express();

var db = mongoskin.db('mongodb://@localhost:27017/contest', {safe:true});

app.get('/region/25', function(req, res) {
	//Error:  incoming message has no method send
	res.send('This is the route for region 25');
});

app.get('/region', function(req, res) {
	// if (req.param('25')) {
	// 	res.send('region 25');
	// }
	// else
	// {
	// 	res.send('something else');
	// }
  db.collection('regions').find().toArray(function(err, results) {
  		if (err) throw err;
  		res.send(results);
  });
});



app.get('/', function(req, res) {
	res.sendFile('site.html', { root: __dirname });
});

app.use('/', express.static('./'));

app.listen(3000);
console.log('Server running at http://localhost:3000');

module.exports = app;
