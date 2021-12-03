const data = require("../assets/data");

function getProducts(query) {
  return data;
}

const findProducts = async (nombre) => {
  var productos = data.map(function (dat) {
    if (dat.name.includes(nombre)) {
      return dat;
    }
  });
  return productos;
};

module.exports = { getProducts };
