const mongoose    = require('mongoose');
const db          = mongoose.connection;
const itemsData = require('../data.js');

mongoose.connect('mongodb://localhost/fetcher');


db.on('error', console.error.bind(console, 'connection error:'));

let itemSchema = mongoose.Schema(
  //When you create a new document with the automatically added _id property, Mongoose creates a new _id of type ObjectId to your document.
  {
    // _id: ObjectId,
    image: {
        url: String,
        description: String
    },
    brand: String,
    itemName: String,
    rating: Image,
    numberOfRatings: Number,
    price: Number
  }

);

let Item = mongoose.model('Item', itemSchema);

let save = (item) => {
  var int = Math.floor(Math.random() * Math.floor(1000)).toString();
  var decimal = Math.random().toString().slice(0, 4);

  let item = new Item({
    image: {
      url: item.image.url,
      description: item.image.description
    },
    brand: item.brand,
    itemName: item.itemName,
    rating: item.rating,
    numberOfRatings: item.numberOfRatings,
    price: item.price;
  })
  item.save();
};

let dataIterator = (items) => {
  items.forEach((item) => { save(item) })
};

db.once('open', function (itemsData) {
  // we're connected!
  // Once our connection opens, our callback will be called
  dataIterator(itemsData);
});

module.exports.save = save;