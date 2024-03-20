// models/Asset.js
const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  // Add other fields as needed
});

module.exports = mongoose.model('Asset', assetSchema);