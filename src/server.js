// Dependencies
require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const { resolve } = require('path');
const app = express();

// Database connection
require('./config/database');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/files', express.static(resolve('tmp', 'uploads')));
app.use('/assets', express.static(resolve('assets')));
app.use(routes);

// Assign settings
app.set('view engine', 'ejs');
app.set('views', resolve('src', 'views'));
app.set('PORT', process.env.PORT || 3333);

// Turn on the server
app.listen(app.get('PORT'), () => {
  console.log(`Server running on *:${app.get('PORT')}`);
});