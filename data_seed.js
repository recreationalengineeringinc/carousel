var photoUrls = [
  "https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/bivy-sack.jpg",
  "https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/camping-tent.jpg",
  "https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/climbing-shoes.jpg",
  "https://reiphotos.s3-us-west-2.amazonaws.com/FEC+Photos/pav-backpack.jpg",
  "https://s3.console.aws.amazon.com/s3/object/reiphotos?region=us-west-2&prefix=FEC+Photos/pav-mens-jacket.jpg"
];

var randomPrice = (Math.floor(Math.random() * Math.floor(1000)).toString()) + (Math.random().toString().slice(0, 4));

function createOneItemObject(id, photoUrls) = {
  "image": {
    "url": "",
    "description": ""
},
"brand": "",
"itemName": "",
"rating": "",
"numberOfRatings": "Number",
"price": "Number"
}