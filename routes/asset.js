const express = require('express');
const router = express.Router();
const Asset = require('../models/Asset'); // Import the Asset model
const mongoose = require('mongoose');

// Define asset schema
const assetSchema = new mongoose.Schema({
  assetName: {
    type: String,
    required: true
  },
  assetDescription: String,
  // Add more fields as needed
});

module.exports = Asset;


// POST route to add an asset
router.post('/add', async (req, res) => {
  try {
    // Create a new asset instance with data from request body
    const newAsset = new Asset({
      assetName: req.body.assetName,
      assetDescription: req.body.assetDescription
    });

    // Save the asset to the database
    await newAsset.save();

    // Respond with success message
    res.status(201).json({ message: 'Asset added successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error adding asset:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
