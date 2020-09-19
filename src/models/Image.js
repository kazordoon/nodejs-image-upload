const mongoose = require('mongoose');
const convertByteToMegabyte = require('../utils/convertByteToMegabyte');

const ImageSchema = new mongoose.Schema({
  name: String,
  size: String,
  url: String,
}, { timestamps: true });

ImageSchema.pre('save', function formatSize(done) {
  const imageSizeInMegabytes = convertByteToMegabyte(this.size);
  const formattedSize = `${imageSizeInMegabytes}MB`;
  this.size = formattedSize;

  done();
});

module.exports = mongoose.model('Image', ImageSchema);
