const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Products = new Schema({
  name: String,
  price: String,
  type: String,
  image: String,
  quantity: String,
  createdAt:  { type: Date, default: Date.now },
  updatedAt:  { type: Date, default: Date.now },
});

module.exports = mongoose.model('Products', Products);
