const mongoose = require('mongoose');

const data = require('../data_seed.js');

mongoose.connect('mongodb://127.0.0.1/rei');
const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));

const itemSchema = mongoose.Schema(
  {
    // _id: ObjectId,
    id: Number,
    category: String,
    items: Array,
  },
);

  // id: Number,
  // imageUrl: String,
  // imageDescription: String,
  // brand: String,
  // name: String,
  // rating: String,
  // numberOfRatings: Number,
  // price: Number,

  // need a random category generator for the category below
  const categories = ['backpacks', 'shoes', 'jackets', 'tents'];
  const randomInt = (max) => (Math.floor(Math.random() * Math.floor(max)));
  const category = categories[randomInt(4)];
const Item = mongoose.model('Item', itemSchema);

// eslint-disable-next-line func-names
const saver = function (itemList) {
  var id = 1;
  const newItem = new Item({
    id: id,
    category: category,
    items: itemList
  });

  newItem.save();
};

// eslint-disable-next-line no-unused-vars
// const dataIterator = (allItems) => {
//   allItems.forEach((item) => { save(item); });
// };

// UNCOMMENT TO RUN seeder.js
db.once('open', () => {
  // we're connected!
  // Once our connection opens, our callback will be called
  data.itemCreator(13, (err, results) => {
    saver(results);
  });
});

module.exports.Item = Item;

// Get one random document matching {a: 10} from the mycoll collection.
// db.mycoll.aggregate([
//   { $match: { a: 10 } },
//   { $sample: { size: 1 } }
// ])

// seeder.Item.find().toArray(function (err, result) {
//   if (err) throw err
//   console.log(result)
// })


// // eslint-disable-next-line func-names
// const save = function (item) {
//   const newItem = new Item({
//     id: item.id,
//     imageUrl: item.imageUrl,
//     imageDescription: item.imageDescription,
//     brand: item.brand,
//     name: item.name,
//     rating: item.rating,
//     numberOfRatings: item.numberOfRatings,
//     price: item.price,
//   });

//   newItem.save();
// };

// // eslint-disable-next-line no-unused-vars
// const dataIterator = (allItems) => {
//   allItems.forEach((item) => { save(item); });
// };

// db.once('open', () => {
//   // we're connected!
//   // Once our connection opens, our callback will be called
//   data.itemCreator(13, (err, results) => {
//     dataIterator(results);
//   });
// });

// module.exports.Item = Item;