const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = 3003;

const model = require('./model.js');
const morgan = require('morgan');

app.use(express.static(`${__dirname}/../public`));
app.use(bodyParser.json());
app.use(morgan('dev'));
// app.use('/product/:id')


app.get('/product/:id', (req, res) => {
  model.dataFetcher((err, data) => {
    if (err) {
      res.send(err);
    } else {
      // console.log('Data: ', data);
      // res.header(‘Content-Type’, ‘application/json’);
      // res.status(200).send(JSON.stringify(result, 0, 1));
      res.send(data);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port http://localhost:${port}`);
});
