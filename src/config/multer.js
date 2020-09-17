const multer = require('multer');
const { resolve } = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, resolve('tmp', 'uploads'));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
      const allowedMimes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/gif'
      ];

      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type'));
      }
    }
  })
}