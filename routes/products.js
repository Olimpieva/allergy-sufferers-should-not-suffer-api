const routerProducts = require('express').Router();

const {
  getAllProducts,
  getProduct,
  addProduct,
} = require('../controllers/products');

routerProducts.get('/', getAllProducts);
routerProducts.get('/:batchCode', getProduct);
routerProducts.post('/', addProduct);

module.exports = routerProducts;
