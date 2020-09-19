const Image = require('../models/Image');

module.exports = {
  async index(req, res) {
    const images = await Image.find().sort();

    return res.json(images);
  },
  async store(req, res) {
    try {
      const { filename, size } = req.file;
      const url = `http://${process.env.HOST}:${process.env.PORT}/files/${filename}`;

      const image = await Image.create({
        name: filename,
        size,
        url,
      });

      return res.status(201).json(image);
    } catch (err) {
      return res.status(422).json({ error: 'Could not upload the image.' });
    }
  },
};
