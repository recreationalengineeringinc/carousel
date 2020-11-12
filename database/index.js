const itemsData   = require('../data.js');
const mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/rei');
const db          = mongoose.connection;

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
    rating: String,
    numberOfRatings: Number,
    price: Number
  }

);

let Item = mongoose.model('Item', itemSchema);

let save = function (item) {

  let newItem = new Item({
    image: {
      url: item.image.url,
      description: item.image.description
    },
    brand: item.brand,
    itemName: item.itemName,
    rating: item.rating,
    numberOfRatings: item.numberOfRatings,
    price: item.price
  });

  newItem.save();
};

let dataIterator = (data) => {
  data.forEach((item) => { save(item) })
};

db.once('open', function () {
  // we're connected!
  // Once our connection opens, our callback will be called
  dataIterator(itemsData);
});

// module.exports.save = save;