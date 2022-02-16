const Product = require('../models/product');

module.exports.getAllProducts = async (req, res) => {
  let products;

  try {
    products = await Product.find();

    res.send(products);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getProduct = async (req, res) => {
  const { batchCode } = req.params;

  try {
    const product = await Product.find({ batch: batchCode });

    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports.addProduct = async (req, res) => {
  const {
    batch,
    nameRU,
    nameEN,
    brand,
    ingredients,
    mayContain,
    nutrients: {
      proteins,
      carbohydrates,
      fats,
      calories,
    },
    weight,
  } = req.body;

  console.log(req.body);

  try {
    const product = await Product.create({
      batch,
      nameRU,
      nameEN,
      brand,
      ingredients,
      mayContain,
      nutrients: {
        proteins,
        carbohydrates,
        fats,
        calories,
      },
      weight,
    });

    res.send(product);
  } catch (error) {
    console.log(error);
  }
};
