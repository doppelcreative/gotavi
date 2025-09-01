const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            unique: true
        },
        category: {
            type: String,
        },
        productDescription: {
            type: String,
        },
        price: {
            type: Number,
        },
        status: {
            type: String,
            enum: ['active', 'inactive', 'out of stock'],
            default: 'active'
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        sector: {
            type: String
        },
        companyName: {
            type: String
        }
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
