'use client'
import React from 'react'

export default function DashboardHeader({ setSidebarOpen }) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between h-16 px-6">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
        >
          ☰
        </button>
        
        
      </div>
    </header>
  )
}
