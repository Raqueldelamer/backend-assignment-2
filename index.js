// index.js
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const auth = require('./middleware/auth');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

require("dotenv").config();

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

// Use the product and auth routes
app.use('/products', productRoutes);
app.use('/auth', authRoutes);

// Protect product routes
app.use('/products', auth, productRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});