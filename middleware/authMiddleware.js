// middleware/authMiddleware.js
const isAuthenticated = (req, res, next) => {
    // Check if user is authenticated
    if (req.session.isAuthenticated) {
        // User is authenticated, allow access to the next middleware or route handler
        next();
    } else {
        // User is not authenticated, redirect to login page
        res.redirect('/login.html');
    }
};

module.exports = isAuthenticated;
