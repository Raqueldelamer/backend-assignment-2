// routes/products.js
const Router = require("express").Router;
const Product = require("../models/Product");  // Import the Product model
const productRoutes = Router();

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