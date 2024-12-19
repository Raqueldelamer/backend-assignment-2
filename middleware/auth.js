// middleware/auth.js
const jwt = require('jsonwebtoken');
require("dotenv").config();

const auth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
    return res
        .status(401)
        .json({ error: 'Access denied. No token provided.' });
    }
    try {
        console.log(process.env.JWT_SECRET);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
    res.status(400).json({ error: 'Invalid token.' });
    
    }
};

module.exports = auth;