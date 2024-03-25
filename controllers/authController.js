// controllers/authController.js
const db = require('../Config/database');

exports.login = (req, res) => {
    const { username, password } = req.body;
    // Authenticate user against database
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
        if (err) {
            console.error('Error authenticating user:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (result.length === 1) {
            res.status(200).json({ success: true });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
};
