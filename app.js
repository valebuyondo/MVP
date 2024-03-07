const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Import the 'path' module
const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const assetRoute = require('./routes/asset');
app.use('/assets', assetRoute);

// Define a route for the root URL ("/") to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/asset-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
