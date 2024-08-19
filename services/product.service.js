const Product = require('../models/product.model'); 

function findAll() {
    return Product.find(); 
}

// Get product by ID
function findById(id) {
    return Product.findById(id); 
}

// Create a new product
function create(product) {
    const newProduct = new Product(product); 
    return newProduct.save();
}

// Update a product by ID
function update(id, productData) {
    return Product.findByIdAndUpdate(id, productData, { new: true }); 
}

// Delete a product by ID
function remove(id) {
    return Product.findByIdAndDelete(id); 
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};
