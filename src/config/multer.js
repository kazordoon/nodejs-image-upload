const storageTypes = require('./storage');

const storage = storageTypes[process.env.STORAGE_TYPE] || storageTypes.local;

const oneKilobyte = 1024;
const oneMegabyte = oneKilobyte ** 2;
const twoMegabytes = oneMegabyte * 2;

module.exports = {
  storage,
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
