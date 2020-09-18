const multer = require('multer');
const { resolve } = require('path');
const crypto = require('crypto');

const oneKilobyte = 1024;
const oneMegabyte = oneKilobyte ** 2;
const twoMegabytes = oneMegabyte * 2;

module.exports = {
  storage: multer.diskStorage({
    destination(req, file, cb) {
      return cb(null, resolve('tmp', 'uploads'));
    },
    filename(req, file, cb) {
      const hash = crypto.randomBytes(10).toString('hex');
      const filename = `${hash}-${file.originalname}`;
      return cb(null, filename);
    },
  }),
  fileFilter(req, file, cb) {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    const invalidFileType = !(allowedMimeTypes.includes(file.mimetype));
    if (invalidFileType) {
      const allowedMimeTypesClone = [...allowedMimeTypes];
      const lastMimeType = allowedMimeTypesClone.pop();
      let allowedMimeTypesText = allowedMimeTypesClone.join(', ').trim();
      allowedMimeTypesText += ` and ${lastMimeType}`;

      const error = new Error(
        `Invalid file type. The file types allowed are as follows: ${allowedMimeTypesText}`,
      );
      return cb(error);
    }

    return cb(null, true);
  },
  limits: {
    fileSize: twoMegabytes,
  },
};
