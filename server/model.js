// importing Item from seeder
const seeder = require('../database/seeder.js');

const dataFetcher = (callback) => {
  seeder.Item.find({}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      // eslint-disable-next-line no-console
      console.log('the docs: ', docs);
      callback(null, docs);
    }
  }).limit(1);
};

// export dataFetcher to the server app.get request
module.exports.dataFetcher = dataFetcher;