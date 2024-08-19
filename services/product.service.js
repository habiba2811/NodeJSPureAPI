const Product = require('../models/product.model'); // Make sure 'Product' matches the model's exported name

// Get all products
function findAll() {
    return Product.find(); // Ensure you use the correct model name
}

// Get product by ID
function findById(id) {
    return Product.findById(id); // Ensure you use the correct model name
}

// Create a new product
function create(product) {
    const newProduct = new Product(product); // Ensure 'Product' is used here
    return newProduct.save();
}

// Update a product by ID
function update(id, productData) {
    return Product.findByIdAndUpdate(id, productData, { new: true }); // Ensure 'Product' is used here
}

// Delete a product by ID
function remove(id) {
    return Product.findByIdAndDelete(id); // Ensure 'Product' is used here
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};
