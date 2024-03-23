const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();
const port = 3000;
const mysql = require('mysql');
const assetRoutes = require('./routes/assetRoutes');
const connection = require('./Config/database');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'views')));

// Routes
const assetRoute = require('./routes/assetRoutes');
app.use('/assets', assetRoute);
//app.use('/assets', assetRoutes);
// Define a route for the root URL ("/") to serve the index.html file
app.get('/:page', (req, res) => {
  const page = req.params.page;
  const filePath = path.join(__dirname, 'views', page); // Construct the file path without '.html' extension
  res.sendFile(filePath);
});

// Connect to MongoDB
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'asset_tracker'
});
// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


