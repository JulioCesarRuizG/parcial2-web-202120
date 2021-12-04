var express = require("express");
var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
const { getProducts } = require("../controllers/product");

router.get("/", function (req, res, next) {
  const entrega = getProducts(req.query.q);
  res.json(entrega);
});

module.exports = router;
