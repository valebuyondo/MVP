const mongoose = require('mongoose');
const Asset = require('./models/Asset');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/asset-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Seed data
    const assets = [
      { assetName: 'Asset 1', assetDescription: 'Description of Asset 1' },
      { assetName: 'Asset 2', assetDescription: 'Description of Asset 2' },
      // Add more assets as needed
    ];

    // Insert assets into database
    Asset.insertMany(assets)
      .then(() => console.log('Database seeded successfully'))
      .catch(err => console.error('Error seeding database:', err))
      .finally(() => mongoose.disconnect()); // Disconnect from MongoDB
  })
  .catch(err => console.error('Could not connect to MongoDB', err));
