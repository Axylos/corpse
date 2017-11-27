const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');

const env = process.env.NODE_ENV || 'development';

module.exports = (app) => {
  app.use(express.static(`${config.rootPath}/public`));
  app.use(logger('dev'));
  app.use(methodOverride());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
