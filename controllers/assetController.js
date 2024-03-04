const mongoose = require('mongoose');
const Joi = require('joi');

// Define asset schema
const assetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  description: {
    type: String,
    maxlength: 1024
  }
});

const Asset = mongoose.model('Asset', assetSchema);

exports.getAllAssets = async (req, res) => {
  const assets = await Asset.find();
  res.json(assets);
};

exports.createAsset = async (req, res) => {
  // Validate input
  const { error } = validateAsset(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create asset
  let asset = new Asset({
    name: req.body.name,
    description: req.body.description
  });
  asset = await asset.save();

  res.status(201).json(asset);
};

exports.getAssetById = async (req, res) => {
  const asset = await Asset.findById(req.params.id);
  if (!asset) return res.status(404).json({ message: 'Asset not found' });

  res.json(asset);
};

exports.updateAsset = async (req, res) => {
  // Validate input
  const { error } = validateAsset(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update asset
  const asset = await Asset.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description
  }, { new: true });

  if (!asset) return res.status(404).json({ message: 'Asset not found' });

  res.json(asset);
};

exports.deleteAsset = async (req, res) => {
  const asset = await Asset.findByIdAndRemove(req.params.id);
  if (!asset) return res.status(404).json({ message: 'Asset not found' });

  res.sendStatus(204);
};

function validateAsset(asset) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    description: Joi.string().max(1024)
  });

  return schema.validate(asset);
}

