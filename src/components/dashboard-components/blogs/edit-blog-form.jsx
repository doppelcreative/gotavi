'use client'
import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function EditBlogForm({ onClose, onSubmit, blogData }) {
  const [formData, setFormData] = useState({
    title: "",
    role: "",
    metaDescription:""
  })
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState('');
  const [description, setDescription] = useState('')

  // Pre-populate form with existing blog data
  useEffect(() => {
    if (blogData) {
      setFormData({
        title: blogData.title || "",
        role: blogData.role || "",
        metaDescription: blogData.metaDescription || ""
      })
      setTags(blogData.tags || [])
      setDescription(blogData.longDescription || '')
    }
  }, [blogData])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value)
  }

  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag()
    }
  }

  const addTag = () => {
    const trimmedTag = tagInput.trim()
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag])
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      ...formData,
      longDescription: description,
      tags: tags,
      shortDescription: "A beginner-friendly guide to Node.js and backend development.",
      status: "publish",
    }
    onSubmit(payload)
  }

  const handleClose = () => {
    setFormData({ title: '', role: '', metaDescription: '' })
    setTags([])
    setTagInput('')
    setDescription('')
    onClose()
  }

  return (
    <div className="!m-0 fixed inset-0 bg-[#000000ab] bg-opacity-50 flex items-center h-[100vh] justify-center z-[99]">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-[12px] border-b">
          <h2 className="!text-[22px] font-semibold text-gray-900">Edit Blog</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title 
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:text-black !text-black"
              placeholder="Enter blog title"
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Role 
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:text-black !text-black"
              placeholder="Enter blog Role"
              required
            />
          </div>

          {/* Tags Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="border border-gray-300 rounded-lg py-[7px] px-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
              {/* Existing Tags */}
              {
                tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )
              }
              
              {/* Tag Input */}
              <input
                type="text"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleTagInputKeyDown}
                className="w-full px-0 py-1 border-none outline-none text-sm !text-black focus:text-black"
                placeholder="Type and press Enter or comma to add tags"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Press Enter or comma to add a tag
            </p>
          </div>

           <div>
              <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description 
              </label>
            <textarea  
              onChange={handleInputChange} 
              value={formData.metaDescription} 
              name="metaDescription" 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none rounded-lg focus:text-black !text-black"></textarea>
          </div>

          {/* Long Description Field */}
          <div>
            <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700 mb-2">
              Long Description 
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

          {/* Form Actions */}
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
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
