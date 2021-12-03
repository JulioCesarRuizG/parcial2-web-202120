var express = require("express");
var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
const { getProducts, findProducts } = require("../controllers/product");

router.get("/", function (req, res, next) {
  const entrega = getProducts(req.query.q);
  res.json(entrega);
  /*
  res.send(
    'To implement. Please establish connection with getProduct function from controllers/product.js'
  );
  */
});

router.get("/:nombre", function (req, res, next) {
  const nombre = req.params.nombre;
  const entrega = findProducts(nombre);
  res.json(entrega);
  /*
  res.send(
    'To implement. Please establish connection with getProduct function from controllers/product.js'
  );
  */
});

module.exports = router;
