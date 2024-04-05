const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const port = 3000;
const assetRoutes = require('./routes/assetRoutes');


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: 'your-secret-key', // Change this to a secure random string
  resave: false,
  saveUninitialized: true
}));

// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

// Define a route for the root URL ("/") to serve the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


// Routes
app.use('/routes/assetRoute', assetRoutes); // Correct route path

// Define a route for the root URL ("/") to serve the index.html file
app.get('/:page', (req, res) => {
  const page = req.params.page;
  const filePath = path.join(__dirname, 'views', page); // Construct the file path without '.html' extension
  res.sendFile(filePath);
});
// Serve static files from the 'styles' directory
app.use('/styles', express.static(path.join(__dirname, 'views', 'styles')));
app.use('/styles', express.static(path.join(__dirname, 'views', 'js')));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
