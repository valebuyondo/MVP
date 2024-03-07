const Asset = require('../models/Asset');

exports.getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAsset = async (req, res) => {
  const asset = new Asset({
    name: req.body.name,
    description: req.body.description
  });

  try {
    const newAsset = await asset.save();
    res.status(201).json(newAsset);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAssetById = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (!asset) return res.status(404).json({ message: 'Asset not found' });
    res.json(asset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAsset = async (req, res) => {
  try {
    const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description
    }, { new: true });
    if (!updatedAsset) return res.status(404).json({ message: 'Asset not found' });
    res.json(updatedAsset);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAsset = async (req, res) => {
  try {
    const deletedAsset = await Asset.findByIdAndDelete(req.params.id);
    if (!deletedAsset) return res.status(404).json({ message: 'Asset not found' });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
