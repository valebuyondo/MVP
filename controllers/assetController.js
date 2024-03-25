// controllers/assetController.js
const db = require('../Config/database');


// Create a new asset
exports.createAsset = (req, res) => {
  const { name, description } = req.body;
  db.query('INSERT INTO assets (name, description) VALUES (?, ?)', [name, description], (err, result) => {
    if (err) {
      console.error('Error adding asset:', err);
      res.status(500).json({ error: 'Error adding asset' }); // Send error response
      return;
    }
    res.status(201).json({ message: 'Asset added successfully' }); // Send success response
  });
};



exports.getAllAssets = (req, res) => {
  db.query('SELECT * FROM assets', (err, results) => {
    if (err) {
      console.error('Error fetching assets:', err);
      res.status(500).json({ error: 'Error fetching assets' });
      return;
    }
    res.status(200).json(results);
  });
};
// Get asset by ID
exports.getAssetById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM assets WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error fetching asset:', err);
      res.status(500).json({ error: 'Error fetching asset' });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: 'Asset not found' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Update asset by ID
exports.updateAsset = (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;
  db.query('UPDATE assets SET name = ?, description = ? WHERE id = ?', [name, description, id], (err, result) => {
    if (err) {
      console.error('Error updating asset:', err);
      res.status(500).json({ error: 'Error updating asset' });
      return;
    }
    res.status(200).json({ message: 'Asset updated successfully' });
  });
};

// Delete asset by ID
exports.deleteAsset = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM assets WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting asset:', err);
      res.status(500).json({ error: 'Error deleting asset' });
      return;
    }
    res.status(200).json({ message: 'Asset deleted successfully' });
  });
};


