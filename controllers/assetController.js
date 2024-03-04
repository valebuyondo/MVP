let assets = [];

exports.getAllAssets = (req, res) => {
  res.json(assets);
};

exports.createAsset = (req, res) => {
  const { name, description } = req.body;
  const newAsset = { id: assets.length + 1, name, description };
  assets.push(newAsset);
  res.status(201).json(newAsset);
};

exports.getAssetById = (req, res) => {
  const assetId = parseInt(req.params.id);
  const asset = assets.find(asset => asset.id === assetId);
  if (asset) {
    res.json(asset);
  } else {
    res.status(404).json({ message: 'Asset not found' });
  }
};

exports.updateAsset = (req, res) => {
  const assetId = parseInt(req.params.id);
  const { name, description } = req.body;
  const assetIndex = assets.findIndex(asset => asset.id === assetId);
  if (assetIndex !== -1) {
    assets[assetIndex] = { id: assetId, name, description };
    res.json(assets[assetIndex]);
  } else {
    res.status(404).json({ message: 'Asset not found' });
  }
};

exports.deleteAsset = (req, res) => {
  const assetId = parseInt(req.params.id);
  const assetIndex = assets.findIndex(asset => asset.id === assetId);
  if (assetIndex !== -1) {
    assets.splice(assetIndex, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: 'Asset not found' });
  }
};

