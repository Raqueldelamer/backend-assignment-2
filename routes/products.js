// routes/products.js
const express = require('express');
const router = express.Router();
const Router = require("express").Router;
const Product = require("../models/Product");  // Import the Product model
const productRoutes = Router();

// create a new product
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all products or filter by category
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        const filter = category ? { category } : {};
        const products = await Product.find(filter);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a product by ID
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
        res.json({ message: 'Product deleted successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all products
productRoutes.get("/", async (req, res) => {
    try {
        const products = await Product.find();  // Fetch products
        res.json({
                
                "name": "Oster Classic",
                "description": "speed blender",
                "price": 24.99,
                "category": "blender"
            
        });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});


module.exports = productRoutes;
// module.exports = router;