'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import loader from "@/common/assets/icons/loader.svg"
import Image from 'next/image'
import toast from 'react-hot-toast'
import parse from 'html-react-parser';
import AddProductForm from './add-product-form'
import EditProductForm from './edit-product-form'

export default function Products() {
    const [showAddForm, setShowAddForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalProducts: 0,
        hasNextPage: false,
        hasPrevPage: false
    })

    // ==================== Add Product ==================== //
    const handleAddProduct = async (payload) => {
        try {
            const result = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`,
                payload,
                { headers: { "Content-Type": "application/json" } }
            )
            if (result.status === 201) {
                toast.success(result.data.message || 'Product added successfully')
                setShowAddForm(false)
                handleGetProducts()
            }
        } catch (error) {
            console.log(error)
            toast.error('Failed to add product')
        }
    }

    // ==================== Get Products ==================== //
    const handleGetProducts = async (page = 1) => {
        setIsLoading(true)
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?page=${page}`,
                { headers: { "Content-Type": "application/json" } }
            )
            setProducts(response?.data?.data?.products || [])
            setPagination(response?.data?.data?.pagination || {})
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        handleGetProducts()
    }, [])

    // ==================== Delete Product ==================== //
    const handleDeleteProduct = async (id) => {
        try {
            const result = await axios.delete(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id}`,
                { headers: { "Content-Type": "application/json" } }
            )
            if (result.status === 200) {
                toast.success(result?.data?.message || 'Product deleted')
                handleGetProducts()
            }
        } catch (error) {
            console.log(error)
            toast.error('Failed to delete product')
        }
    }

    // ==================== Edit Product ==================== //
    const handleEditProduct = async (payload) => {
        try {
            const result = await axios.put(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${selectedProduct._id}`,
                payload,
                { headers: { "Content-Type": "application/json" } }
            )
            if (result.status === 200) {
                toast.success(result.data.message || 'Product updated successfully')
                setShowEditForm(false)
                setSelectedProduct(null)
                handleGetProducts()
            }
        } catch (error) {
            console.log(error)
            toast.error('Failed to update product')
        }
    }

    // Open edit modal
    const handleEdit = (item) => {
        setSelectedProduct(item)
        setShowEditForm(true)
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="!text-[26px] font-bold text-gray-900 pb-2">Products</h1>
                    <p className="text-gray-600">Manage your products</p>
                </div>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="pp-theme-btn w-fit wow fadeInUp flex gap-3"
                >
                    Add Product
                </button>
            </div>

            {/* Add Product Form */}
            {showAddForm && (
                <AddProductForm
                    onClose={() => setShowAddForm(false)}
                    onSubmit={handleAddProduct}
                />
            )}

            {/* Edit Product Form */}
            {showEditForm && selectedProduct && (
                <EditProductForm
                    onClose={() => {
                        setShowEditForm(false)
                        setSelectedProduct(null)
                    }}
                    onSubmit={handleEditProduct}
                    productData={selectedProduct}
                />
            )}

            {/* Products Table */}
            <div className="bg-white rounded-lg shadow-sm border">
                <div className="px-6 py-4 border-b">
                    <h2 className="!text-[22px] font-semibold text-gray-900">All Products</h2>
                </div>
                <div className="overflow-x-auto">
                    {isLoading ? (
                        <Image
                            src={loader}
                            alt="Loading"
                            className="mx-auto w-[80px] h-[80px] block"
                        />
                    ) : (
                        <>
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                       
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products?.map((product) => (
                                        <tr key={product._id || product.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                #{product.id || product._id?.slice(-5)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {product.name || product.productName}
                                            </td>
                                           
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${product.status?.toLowerCase() === "active"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                        }`}
                                                >
                                                    {product.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button
                                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                                    onClick={() => handleEdit(product)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteProduct(product._id)}
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
                                    Showing page {pagination.currentPage} of {pagination.totalPages} | Total Products: {pagination.totalProducts}
                                </p>
                                <div className="flex gap-2">
                                    <button
                                        disabled={!pagination.hasPrevPage}
                                        onClick={() => handleGetProducts(pagination.currentPage - 1)}
                                        className={`px-3 py-1 border rounded ${!pagination.hasPrevPage ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        Prev
                                    </button>
                                    <button
                                        disabled={!pagination.hasNextPage}
                                        onClick={() => handleGetProducts(pagination.currentPage + 1)}
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
