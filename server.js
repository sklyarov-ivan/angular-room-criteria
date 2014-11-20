var express = require('express')
var app = express();
var bodyParser  = require('body-parser');

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
  res.end(JSON.stringify([
  {
    value: 'None',
    index: 0
  },
  {
    value: '1',
    index: 1
  },
  {
    value: '2',
    index: 2
  },
  {
    value: '3',
    index: 3
  },
  {
    value: '4+',
    index: 4
  }
  ]));
});


app.get('/api/bedrooms.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify([
  {
    value: 'None',
    index: 0
  },
  {
    value: '1',
    index: 1
  },
  {
    value: '2',
    index: 2
  },
  {
    value: '3',
    index: 3
  },
  {
    value: '4',
    index: 4
  },
  {
    value: '5',
    index: 5
  },
  {
    value: '6',
    index: 6
  },
  {
    value: '7+',
    index: 7
  }
  ]));
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