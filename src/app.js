const express = require('express');
const { resolve } = require('path');
const routes = require('./routes');

class App {
  constructor() {
    this.express = express();

    this.loadSettings();
    this.loadMiddlewares();
    this.loadRoutes();
  }

  loadSettings() {
    this.express.set('PORT', process.env.PORT || 3333);
    this.express.set('HOST', process.env.HOST || 'localhost');
  }

  loadMiddlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
  }

  loadRoutes() {
    this.express.use('/files', express.static(resolve('tmp', 'uploads')));
    this.express.use('/assets', express.static(resolve('assets')));
    this.express.use(routes);
  }

  startServer() {
    const HOST = this.express.get('HOST');
    const PORT = this.express.get('PORT');

    this.express.listen(PORT, HOST, () => {
      const serverAddress = `http://${HOST}:${PORT}`;
      console.log(`Server running on ${serverAddress}`);
    });
  }
}

module.exports = new App();
