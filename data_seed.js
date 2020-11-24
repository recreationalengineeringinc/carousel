const faker = require('faker');

// array of photo links
const photoUrls = [
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/bivy-sack.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/camping-tent.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/climbing-shoes.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/pav-backpack.jpg',
  'https://reiphotos.s3-us-west-2.amazonaws.com/womens-jacket.jpg',
];
let index = Math.floor(Math.random()*photoUrls.length);
const photo = photoUrls[index];
const brand = faker.company.bsNoun();
// const brand = faker.company.companyName();
const productName = faker.commerce.productName();
const adjective = faker.commerce.productAdjective();
const price = faker.commerce.price();

// random price generator
// eslint-disable-next-line max-len
const randomNum = (max) => (Number((Math.floor(Math.random() * Math.floor(max)).toString())) + Number((Math.random().toString().slice(0, 4))));
// console.log(randomPrice(100));

// random amount of ratings generator
const randomInt = (max) => (Math.floor(Math.random() * Math.floor(max)));

// item object generator

const createItem = (index) => (
  {
    id: index,
    imageUrl: photo,
    imageDescription: adjective,
    brand: brand,
    name: productName,
    rating: randomNum(5),
    numberOfRatings: randomInt(1000),
    price: price,
  }
);

const itemCreator = (numberOfItems, callback) => {
  const allItems = [];
  for (let i = 1; i < numberOfItems; i += 1) {
    const item = createItem(i);
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
