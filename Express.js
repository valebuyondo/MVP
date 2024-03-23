const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asset-tracker'
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route handler for adding an asset
app.post('/api/assets', (req, res) => {
    const { name, description } = req.body;

    // Insert data into the assets table
    const sql = `INSERT INTO assets (name, description) VALUES (?, ?)`;
    connection.query(sql, [name, description], (err, result) => {
        if (err) {
            console.error('Error adding asset:', err);
            return res.status(500).send('Error adding asset');
        }
        console.log('Asset added successfully');
        res.status(200).send('Asset added successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
