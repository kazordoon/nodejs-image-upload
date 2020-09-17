const { Router } = require('express');
const upload = require('./middlewares/upload');
const routes = Router();

const UploadController = require('./controllers/UploadController');

routes.get('/', UploadController.index);
routes.get('/files', UploadController.listAll);
routes.post('/', upload.single('img'), UploadController.store);

module.exports = routes;