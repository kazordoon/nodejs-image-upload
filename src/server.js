require('dotenv').config();
require('./config/database');

const app = require('./app')

app.startServer()
