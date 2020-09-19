const { Router } = require('express');
const upload = require('./middlewares/upload');

const routes = Router();

const UploadController = require('./controllers/UploadController');

routes.get('/', UploadController.index);
routes.post('/', upload('img'), UploadController.store);
routes.delete('/:id', UploadController.destroy);

module.exports = routes;
