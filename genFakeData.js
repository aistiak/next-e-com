const faker = require("faker");
const { v4: uuid } = require("uuid");
const fs = require('fs')

const categories = ["cloth", "food", "cosmetic", "health", "steel"];

const getSomeRandCateAsArray = () =>
  [...Array(parseInt(Math.random() * 4))].map(
    (v) => categories[parseInt(Math.random() * 4)]
  );
const genFakeProduct = () => {
  return {
    name: faker.commerce.product(),
    category: getSomeRandCateAsArray() ,
    stock: faker.datatype.number(100),
    price: faker.commerce.price(),
    status: "active",
    productId: uuid(),
    image : 'https://source.unsplash.com/category/food/640x480'
  };
};

const products = [...Array(100)].map( v  => genFakeProduct() )

console.log(products)

fs.writeFile("./data.json",  JSON.stringify(products), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 