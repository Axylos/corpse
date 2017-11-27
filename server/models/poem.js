const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PoemSchema = new Schema({
  title: { type: String, default: '', trim: true },
});

module.exports = mongoose.model('Poem', PoemSchema);
