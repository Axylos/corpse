const express = require('express');
const config = require('./config/config');
const mongoose = require('mongoose');
const Poem = require('./models/poem.js');

const db = mongoose.connect(config.db, { useMongoClient: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('db connection success'));

const app = express();

app.get('/', (req, res) => {
  Poem.find()
    .then((p) => {
      console.log('found a poem');
      res.status(200).send(`Hello you, ${JSON.stringify(p)}`);
    })
    .catch((err) => {
      console.log(`err: ${err}`);
      res.status(200).send(err);
    });
});

module.exports = app;
