const multer = require('multer');
const crypto = require('crypto');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const { resolve } = require('path');

module.exports = {
  local: multer.diskStorage({
    destination(req, file, cb) {
      return cb(null, resolve('tmp', 'uploads'));
    },
    filename(req, file, cb) {
      const hash = crypto.randomBytes(10).toString('hex');
      const filename = `${hash}-${file.originalname}`;
      return cb(null, filename);
    },
  }),
  aws_s3: multerS3({
    s3: new aws.S3(),
    bucket: process.env.S3_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: process.env.S3_ACL,
    key: (req, file, cb) => {
      const hash = crypto.randomBytes(10).toString('hex');
      const filename = `${hash}-${file.originalname}`;
      return cb(null, filename);
    },
  }),

};
