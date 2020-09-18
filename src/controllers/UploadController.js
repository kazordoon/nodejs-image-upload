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
    try {
      const { filename: name, size } = req.file;
      const url = `http://${process.env.HOST}:${process.env.PORT}/files/${name}`;

      const image = await Image.create({
        name,
        size,
        url,
      });

      return res.json(image);
    } catch (err) {
      return res.json({ error: 'Could not upload the image.' });
    }
  },
};
