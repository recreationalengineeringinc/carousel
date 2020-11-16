// importing Item model from seeder
// const seeder = require('../database/seeder.js');
const model = require('../database/seeder.js');

const dataFetcher = (callback) => {
  model.Item.find({}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      // eslint-disable-next-line no-console
      // console.log('the docs: ', docs);
      callback(null, docs);
    }
  }).limit();
};

// export dataFetcher to the server app.get request
module.exports.dataFetcher = dataFetcher;

// get a specific atribute and a specific amount
// const dataFetcher = (callback) => {
//   Item.find({ 'image.description': 'jacket' }, (err, docs) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       console.log('the docs: ', docs);
//       callback(null, docs);
//     }
//   }).limit(1);
// };
