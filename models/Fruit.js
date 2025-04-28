const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
  name: String,
  color: String,
  readyToEat: Boolean
});

module.exports = mongoose.model('fruit', fruitSchema);