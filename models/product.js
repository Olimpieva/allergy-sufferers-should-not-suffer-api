const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
  batch: {
    type: Number,
    required: true,
    unique: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
  },
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  mayContain: {
    type: Array,
  },
  nutrients: {
    proteins: {
      type: Number,
    },
    fats: {
      type: Number,
    },
    carbohydrates: {
      type: Number,
    },
    sugar: {
      type: Number,
    },
    calories: {
      type: Number,
    },
  },
  weight: {
    type: Number,
    required: true,
  },

});

module.exports = mongoose.model('product', productShema);
