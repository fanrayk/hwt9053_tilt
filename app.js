const express = require('express');
const bodyParser = require('body-parser');
const tiltRoutes = require('./routes/tiltRoutes');

const app = express();

// 中間件
app.use(bodyParser.json());

// 掛載路由
app.use('/api', tiltRoutes);

module.exports = app;