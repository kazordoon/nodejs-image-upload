const fs = require('fs');
const { resolve } = require('path');
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
  async destroy(req, res) {
    try {
      const { id } = req.params;

      const image = await Image.findById(id);
      if (!image) {
        return res.status(404).json({ error: 'File not found.' });
      }

      const filePath = resolve('tmp', 'uploads', image.name);
      await fs.promises.unlink(filePath);
      await image.deleteOne();

      return res.sendStatus(204);
    } catch (err) {
      return res.status(422).json({ error: 'Could not delete the image.' });
    }
  },
};
