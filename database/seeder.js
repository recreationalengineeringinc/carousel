const mongoose = require('mongoose');
const itemsData = require('../data.js');

mongoose.connect('mongodb://localhost/rei');
const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));

const itemSchema = mongoose.Schema(
  {
    // _id: ObjectId,
    image: {
      url: String,
      description: String,
    },
    brand: String,
    itemName: String,
    rating: String,
    numberOfRatings: Number,
    price: Number,
  },
);

const Item = mongoose.model('Item', itemSchema);

// eslint-disable-next-line func-names
const save = function (item) {
  const newItem = new Item({
    image: {
      url: item.image.url,
      description: item.image.description,
    },
    brand: item.brand,
    itemName: item.itemName,
    rating: item.rating,
    numberOfRatings: item.numberOfRatings,
    price: item.price,
  });

  newItem.save();
};

const dataIterator = (data) => {
  data.forEach((item) => { save(item); });
};

db.once('open', () => {
  // we're connected!
  // Once our connection opens, our callback will be called
  dataIterator(itemsData);
});

const dataFetcher = (callback) => {
  Item.find({}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

// seeder.Item.findfind().toArray(function (err, result) {
//   if (err) throw err

//   console.log(result)
// })

module.exports.dataFetcher = dataFetcher;
