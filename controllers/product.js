const data = require("../assets/data");

function getProducts(query) {
  var tod = [];
  data.map(function (dat) {
    if (dat.name.includes(query)) {
      tod.push(dat);
    } else {
    }
  });
  return tod;
}

module.exports = { getProducts };
