const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = 3000;
// import seeder
const seeder = require('../database/seeder.js');

app.use(express.static(`${__dirname}/../public`));
app.use(bodyParser.json());

app.get('/items', (req, res) => {
  seeder.dataFetcher((err, data) => {
    if (err) {
      res.send(err);
    } else {
      // console.log('Data: ', data);
      res.send(data);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port http://localhost:${port}`);
});
