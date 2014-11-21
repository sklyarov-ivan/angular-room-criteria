var express = require('express')
var app = express();
var bodyParser  = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(express.compress());
app.use(express.static(__dirname + '/app'));
// app.get('/', function (req, res) {
//   // res.send('Hello World!');
//   var path = req.params[0] ? req.params[0] : 'index.html';
//   res.sendfile(path, {root: './app'});
// });

app.get('/api/bathrooms.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  fs.readFile('./static_data/bathrooms.json',function(err,data){
    if (err) {
        throw err;
    }
    res.end(data);
  });
});


app.get('/api/bedrooms.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  fs.readFile('./static_data/bedrooms.json',function(err,data){
    if (err) {
        throw err;
    }
    res.end(data);
  });
});

app.post('/api/criteria',function(req,res){
  console.log(req.body);
  res.send(req.body);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});