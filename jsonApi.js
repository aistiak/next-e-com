const porducts = require("./data");
// read from file load to array
const getProducts = (page = 1, count = 10) => {
  const p = page < 10 && page > 0 ? page : 1;
  const c = count < 20 && count > 5 ? count : 5;
  const start = (p - 1) * c;
  const end = start + c;
  return porducts.slice(start,end);
};

//

module.exports = {
  getProducts,
};
