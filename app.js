const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
const assetRoute = require('./routes/asset');
app.use('/assets', assetRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/asset-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

