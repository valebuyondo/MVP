const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/asset-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
