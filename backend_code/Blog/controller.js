const express = require('express');
const router = express.Router();
const Blog = require('./blogModel');

//  Create a Blog
router.post('', async (req, res) => {
    try {
        const { title, metaDescription, longDescription, tags, status } = req.body;

        const existingBlog = await Blog.findOne({ title });
        if (existingBlog) {
            return res.status(400).json({
                success: false,
                message: 'A blog with this title already exists'
            });
        }

        const blog = new Blog({ title, metaDescription, longDescription, tags, status });
        await blog.save();

        res.status(201).json({
            success: true,
            message: 'Blog created successfully',
            result: blog
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

//  Get All Blogs
router.get('', async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            status,
            search,
            sortBy = 'createdAt',
            sortOrder = 'desc'
        } = req.query;

        const filter = {};
        if (status) filter.status = status;
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { metaDescription: { $regex: search, $options: 'i' } },
                { longDescription: { $regex: search, $options: 'i' } }
            ];
        }

        const sort = {};
        sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

        const skip = (page - 1) * limit;
        const blogs = await Blog.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(parseInt(limit));

        const totalBlogs = await Blog.countDocuments(filter);
        const totalPages = Math.ceil(totalBlogs / limit);

        const responseData = {
            blogs,
            pagination: {
                currentPage: parseInt(page),
                totalPages,
                totalBlogs,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            }
        };

        res.status(200).json({
            success: true,
            message: 'Blogs fetched successfully',
            data: responseData
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

//  Get a Single Blog by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

        res.status(200).json({ success: true, result: blog });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

//  Update Blog
router.put('/:id', async (req, res) => {
    try {
        const { title, metaDescription, longDescription, tags, status } = req.body;
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, metaDescription, longDescription, tags, status },
            { new: true, runValidators: true }
        );

        if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

        res.status(200).json({
            success: true,
            message: 'Blog updated successfully',
            result: blog
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Delete Blog
router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

        res.status(200).json({ success: true, message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;