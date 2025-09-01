const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            default: 'Admin'
        },
        metaDescription: {
            type: String,
        },
        longDescription: {
            type: String,
            required: true
        },
        tags: {
            type: [mongoose.Schema.Types.Mixed],
            default: []
        },
        status: {
            type: String,
            enum: ['pending', 'publish'],
            default: 'pending'
        }
    },
    { timestamps: true }
);

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;
