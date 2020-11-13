const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
// import seeder
var seeder = require('../database/seeder.js');

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.get('/items', (req, res) => {
  console.log('Inside app.get');
  seeder.dataFetcher((err, data) => {
    if (err) {
      res.send(err);
    } else {
      // console.log('Data: ', data);
      res.send(data);
    }
  })

});


app.listen(port, function () {
  console.log(`listening on port http://localhost:${port}`);
});
