const Image = require('../models/Image');

module.exports = {
  index(req, res) {
    return res.render('index');
  },
  async listAll(req, res) {
    const images = await Image.find().sort();

    return res.json(images);
  },
  async store(req, res) {
    const { filename: name, size } = req.file;

    const image = await Image.create({
      name,
      size,
      url: `http://localhost:3333/files/${name}`
    });

    return res.json(image);
  }
}