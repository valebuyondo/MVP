const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mysql = require('mysql');
const assetRoutes = require('./routes/assetRoutes'); // Correct file path


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));
// Serve static files from the 'styles' directory
app.use('/styles', express.static(path.join(__dirname, 'views', 'styles')));
app.use('/styles', express.static(path.join(__dirname, 'views', 'js')));

// Routes
app.use('/routes/assetRoute', assetRoutes); // Correct route path

// Define a route for the root URL ("/") to serve the index.html file
app.get('/:page', (req, res) => {
  const page = req.params.page;
  const filePath = path.join(__dirname, 'views', page); // Construct the file path without '.html' extension
  res.sendFile(filePath);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
