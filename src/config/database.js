const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(`Mongoose Error:\n${err}`));

module.exports = connection;
