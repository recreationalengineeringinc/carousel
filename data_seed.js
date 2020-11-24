const faker = require('faker');

// array of photo links
const photoUrls = [
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/bivy-sack.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/camping-tent.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/womens-jacket.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/vegan-climbing-shoes.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/pav-mens-jacket.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/pav-backpack.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/pav-backpack-2.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/paddle-boards.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/nemo-sleeping-bag.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/nalgene-bottle.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/mens-sleeping-bag.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/mens-jacket.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/climbing-shoes.jpg'
];

var indexGenerator = (photoUrls) => (Math.floor(Math.random()*photoUrls.length));
var photo = (photoUrls) => (photoUrls[indexGenerator(photoUrls)]);
// var brand = faker.company.bsNoun();
// var brand = faker.company.companyName();
// var productName = faker.commerce.productName();
// var adjective = faker.commerce.productAdjective();
// var price = faker.commerce.price();

// random price generator
// eslint-disable-next-line max-len
var randomNum = (max) => (Number((Math.floor(Math.random() * Math.floor(max)).toString())) + Number((Math.random().toString().slice(0, 4))));
// console.log(randomPrice(100));

// random number of ratings generator
var randomInt = (max) => (Math.floor(Math.random() * Math.floor(max)));

// item object generator

var createItem = (index) => (
  {
    id: index,
    imageUrl: photo(photoUrls),
    imageDescription: faker.commerce.productAdjective(),
    brand: faker.company.bsNoun(),
    name: faker.commerce.productName(),
    rating: randomNum(5),
    numberOfRatings: randomInt(1000),
    price: faker.commerce.price(),
  }
);

var itemCreator = (numberOfItems, callback) => {
  var allItems = [];
  for (let i = 1; i < numberOfItems; i += 1) {
    var item = createItem(i);
    allItems.push(item);
  }
  callback(null, allItems);
};

// const itemsData = itemCreator(6);
// console.log(createItem());
// console.log(Math.random());
// console.log(Math.floor(Math.random() * Math.floor(10)));
// console.log(Math.random().toString().slice(0, 4));
// console.log(itemCreator(3));

module.exports.itemCreator = itemCreator;
