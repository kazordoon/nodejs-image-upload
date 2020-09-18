const multer = require('multer');
const multerConfig = require('../config/multer');

module.exports = (fieldName) => (req, res, next) => {
  const upload = multer(multerConfig);

  upload.single(fieldName)(req, res, (err) => {
    if (err) {
      return res.json({ error: err.message });
    }

    return next();
  });
};
