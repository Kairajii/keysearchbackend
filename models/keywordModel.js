
const mongoose = require('mongoose');

const keywordSchema = new mongoose.Schema({
  keyword: { type: String, unique: true },
  searchVolume: { type: Number, default: 0 },
});

module.exports = mongoose.model('Keyword', keywordSchema);
