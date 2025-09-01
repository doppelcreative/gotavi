const express = require('express');
const router = express.Router();
const Product = require('./productModal');

// Create Product
router.post('', async (req, res) => {
    try {
        const {
            productName,
            category,
            productDescription,
            price,
            status,
            startDate,
            endDate,
            sector,
            companyName
        } = req.body;

        const existingProduct = await Product.findOne({ productName });
        if (existingProduct) {
            return res.status(400).json({
                success: false,
                message: 'A product with this name already exists',
            });
        }

        // Create new product
        const product = new Product({
            productName,
            category,
            productDescription,
            price,
            status,
            startDate,
            endDate,
            sector,
            companyName,
        });

        await product.save();

        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            result: product,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Get All Products 
router.get('', async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            search,
            sortBy = 'createdAt',
            sortOrder = 'desc',
        } = req.query;

        const filter = {};
        if (search) {
            filter.$or = [
                { productName: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
                { productDescription: { $regex: search, $options: 'i' } },
                { sector: { $regex: search, $options: 'i' } },
                { companyName: { $regex: search, $options: 'i' } },
                { status: { $regex: search, $options: 'i' } },
            ];
        }

        const sort = {};
        sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

        const skip = (page - 1) * limit;
        const products = await Product.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(parseInt(limit));

        const totalProducts = await Product.countDocuments(filter);
        const totalPages = Math.ceil(totalProducts / limit);

        res.status(200).json({
            success: true,
            message: 'Products fetched successfully',
            data: {
                products,
                pagination: {
                    currentPage: parseInt(page),
                    totalPages,
                    totalProducts,
                    hasNextPage: page < totalPages,
                    hasPrevPage: page > 1,
                },
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Get Single Product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product)
            return res
                .status(404)
                .json({ success: false, message: 'Product not found' });

        res.status(200).json({ success: true, result: product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Update Product
router.put('/:id', async (req, res) => {
    try {
        const {
            productName,
            category,
            productDescription,
            price,
            status,
            startDate,
            endDate,
            sector,
            companyName,
        } = req.body;

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                productName,
                category,
                productDescription,
                price,
                status,
                startDate,
                endDate,
                sector,
                companyName,
            },
            { new: true, runValidators: true }
        );

        if (!product)
            return res
                .status(404)
                .json({ success: false, message: 'Product not found' });

        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            result: product,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Delete Product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product)
            return res
                .status(404)
                .json({ success: false, message: 'Product not found' });

        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
