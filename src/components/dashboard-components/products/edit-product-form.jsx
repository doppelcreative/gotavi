"use client"
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function EditProductForm({ onClose, onSubmit, productData }) {
    const [formData, setFormData] = useState({
        productName: "",
        category: "",
        price: "",
        status: "active",
        startDate: "",
        endDate: "",
        sector: "",
        companyName: "",
    });

    const [description, setDescription] = useState("");

    // Pre-fill form when editing
    useEffect(() => {
        if (productData) {
            const formatDate = (dateString) => {
                if (!dateString) return "";
                return new Date(dateString).toISOString().split("T")[0]; // Convert to YYYY-MM-DD
            };
            setFormData({
                productName: productData.productName || "",
                category: productData.category || "",
                price: productData.price || "",
                status: productData.status || "active",
                startDate: formatDate(productData.startDate),
                endDate: formatDate(productData.endDate),
                sector: productData.sector || "",
                companyName: productData.companyName || "",
            });
            setDescription(productData.productDescription || "");
        }
    }, [productData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    console.log('product data', productData)

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            price: parseFloat(formData.price),
            productDescription: description,
        };
        onSubmit(payload);
    };

    const handleClose = () => {
        setFormData({
            productName: "",
            category: "",
            price: "",
            status: "active",
            startDate: "",
            endDate: "",
            sector: "",
            companyName: "",
        });
        setDescription("");
        onClose();
    };

    return (
        <div className="!m-0 fixed inset-0 bg-[#000000ab] bg-opacity-50 flex items-center h-[100vh] justify-center z-[99]">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-[12px] border-b">
                    <h2 className="!text-[22px] font-semibold text-gray-900">Edit Product</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
                    >
                        ×
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Product Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:text-black !text-black"
                            placeholder="Enter product name"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:text-black !text-black"
                            placeholder="Enter product category"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:text-black !text-black"
                            placeholder="Enter product price"
                            required
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Status
                        </label>
                        <div className="flex items-center space-x-6">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="status"
                                    value="active"
                                    checked={formData.status === "active"}
                                    onChange={handleInputChange}
                                    className="text-blue-600 focus:ring-blue-500"
                                />
                                <span>Active</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="status"
                                    value="inactive"
                                    checked={formData.status === "inactive"}
                                    onChange={handleInputChange}
                                    className="text-blue-600 focus:ring-blue-500"
                                />
                                <span>Inactive</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="status"
                                    value="out of stock"
                                    checked={formData.status === "out of stock"}
                                    onChange={handleInputChange}
                                    className="text-blue-600 focus:ring-blue-500"
                                />
                                <span>Out Of Stock </span>
                            </label>
                        </div>
                    </div>

                    {/* Start Date */}
                    <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:text-black !text-black"
                        />
                    </div>

                    {/* End Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            End Date
                        </label>
                        <input
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:text-black !text-black"
                        />
                    </div>

                    {/* Sector */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Sector
                        </label>
                        <input
                            type="text"
                            name="sector"
                            value={formData.sector}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:text-black !text-black"
                            placeholder="Enter sector"
                        />
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:text-black !text-black"
                            placeholder="Enter company name"
                        />
                    </div>

                    {/* Product Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Description
                        </label>
                        <ReactQuill 
                            value={description} 
                            onChange={setDescription} 
                            modules={{
                                toolbar: [
                                [{ header: [1, 2, 3, false] }],
                                ["bold", "italic", "underline", "strike"],
                                ["blockquote", "code-block"], // ✅ blockquote added
                                [{ list: "ordered" }, { list: "bullet" }],
                                [{ indent: "-1" }, { indent: "+1" }],
                                [{ align: [] }],
                                ["link", "image"],
                                ["clean"],
                                ],
                            }}
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="pp-theme-btn w-fit wow fadeInUp flex gap-3"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="pp-theme-btn w-fit wow fadeInUp flex gap-3"
                        >
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
