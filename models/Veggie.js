const mongoose = require('mongoose');

const veggieSchema = new mongoose.Schema({
  name: String,
  color: String,
  readyToEat: Boolean
});

module.exports = mongoose.model('Veggiee', veggieeSchema);