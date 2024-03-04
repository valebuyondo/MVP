const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
const assetRoute = require('./routes/asset');
app.use('/assets', assetRoute);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
