'use client'
import { useEffect, useState } from 'react'
import AddBlogForm from './add-blog-form'
import EditBlogForm from './edit-blog-form'
import axios from 'axios'
import loader from "@/common/assets/icons/loader.svg"
import Image from 'next/image'
import toast from 'react-hot-toast'
import parse from 'html-react-parser';

export default function Blogs() {
    const [showAddForm, setShowAddForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [selectedBlog, setSelectedBlog] = useState(null)
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //  Pagination State
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalBlogs: 0,
        hasNextPage: false,
        hasPrevPage: false
    })

    //==================  Add Blog API ======================//
    const handleAddBlog = async (payload) => {
        try {
            const result = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`,
                payload,
                { headers: { "Content-Type": "application/json" } }
            );
            if (result.status === 201) {
                toast.success(result.data.message)
                setShowAddForm(false);
                handleGetBlogs(pagination.currentPage);
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to add blog")
        }
    }

    //==================  Get Blogs API ======================//
    const handleGetBlogs = async (page = 1) => {
        setIsLoading(true)
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?page=${page}`,
                { headers: { "Content-Type": "application/json" } }
            );
            setBlogs(response?.data?.data?.blogs || []);
            setPagination(response?.data?.data?.pagination || {});
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        handleGetBlogs()
    }, [])

    // ====================== Delete Blog =====================//
    const handleDeleteBlog = async (id) => {
        try {
            const result = await axios.delete(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`,
                { headers: { "Content-Type": "application/json" } }
            );
            if (result.status === 200) {
                toast.success(result?.data?.message);
                handleGetBlogs(pagination.currentPage);
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to delete blog")
        }
    }

    //==================  Edit Blog API ======================//
    const handleEditBlog = async (payload) => {
        try {
            const result = await axios.put(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${selectedBlog._id}`,
                payload,
                { headers: { "Content-Type": "application/json" } }
            );
            if (result.status === 200) {
                toast.success(result.data.message || 'Blog updated successfully')
                setShowEditForm(false);
                setSelectedBlog(null);
                handleGetBlogs(pagination.currentPage);
            }
        } catch (error) {
            console.log(error)
            toast.error('Failed to update blog')
        }
    }

    const handleEdit = (item) => {
        setSelectedBlog(item)
        setShowEditForm(true)
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="!text-[26px] font-bold text-gray-900 pb-2">Blogs</h1>
                    <p className="text-gray-600">Manage your blog posts</p>
                </div>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="pp-theme-btn w-fit wow fadeInUp flex gap-3"
                >
                    Add Blog
                </button>
            </div>

            {/* Add Blog Form Modal */}
            {showAddForm && (
                <AddBlogForm
                    onClose={() => setShowAddForm(false)}
                    onSubmit={handleAddBlog}
                />
            )}

            {/* Edit Blog Form Modal */}
            {showEditForm && selectedBlog && (
                <EditBlogForm
                    onClose={() => {
                        setShowEditForm(false)
                        setSelectedBlog(null)
                    }}
                    onSubmit={handleEditBlog}
                    blogData={selectedBlog}
                />
            )}

            {/* Blogs Table */}
            <div className="bg-white rounded-lg shadow-sm border">
                <div className="px-6 py-4 border-b">
                    <h2 className="!text-[22px] font-semibold text-gray-900">All Blogs</h2>
                </div>
                <div className="overflow-x-auto">
                    {isLoading ? (
                        <Image src={loader} alt="" className='mx-auto w-[80px] h-[80px] block' />
                    ) : (
                        <>
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tags</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {blogs?.map((blog) => (
                                        <tr key={blog._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                                            </td>
                                           
                                            <td className="px-6 py-4">
                                                <div className="flex flex-wrap gap-1">
                                                    {blog.tags.map((tag, index) => (
                                                        <span
                                                            key={index}
                                                            className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${blog.status === 'Published'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {blog.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(blog.createdAt).toISOString().split("T")[0]}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button
                                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                                    onClick={() => handleEdit(blog)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteBlog(blog._id)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/*  Pagination Controls */}
                            <div className="flex justify-between items-center px-6 py-4 border-t">
                                <p className="text-sm text-gray-600">
                                    Showing page {pagination.currentPage} of {pagination.totalPages} | Total Blogs: {pagination.totalBlogs}
                                </p>
                                <div className="flex gap-2">
                                    <button
                                        disabled={!pagination.hasPrevPage}
                                        onClick={() => handleGetBlogs(pagination.currentPage - 1)}
                                        className={`px-3 py-1 border rounded ${!pagination.hasPrevPage ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        Prev
                                    </button>
                                    <button
                                        disabled={!pagination.hasNextPage}
                                        onClick={() => handleGetBlogs(pagination.currentPage + 1)}
                                        className={`px-3 py-1 border rounded ${!pagination.hasNextPage ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
