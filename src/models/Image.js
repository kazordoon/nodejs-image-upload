const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name: String,
  size: Number,
  url: String
}, { timestamps: true });

module.exports = mongoose.model('Image', ImageSchema);