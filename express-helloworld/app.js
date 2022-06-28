var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World esta es la version 2 de la app!\n');
});

app.get('/lets', function(req, res) { 
  res.send('Hello Luis Enrique Torralba Salvador!\n');
  });
  

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

