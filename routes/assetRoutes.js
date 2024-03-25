// routes/assetRoutes.js

const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');
const authController = require('../controllers/authController');

// Routes for asset CRUD operations
router.post('/', assetController.createAsset);
router.get('/', assetController.getAllAssets); // New route to fetch all assets
router.get('/:id', assetController.getAssetById);
router.put('/:id', assetController.updateAsset);
router.delete('/:id', assetController.deleteAsset);
router.post('/login', authController.login);
module.exports = router;
