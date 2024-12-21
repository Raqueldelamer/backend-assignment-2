// index.js
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

require("dotenv").config();
// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// environment variable connecting to MongoDB
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
    .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Use the product, auth, and user routes
app.use('/products', auth, productRoutes);
app.use('/auth', authRoutes);
app.use('/users', auth, userRoutes);

// Use the error handling middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});