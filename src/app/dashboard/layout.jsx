'use client'
import React, { useState } from 'react'
import { Sidebar, DashboardHeader, MainContent } from '@/common/components/dashboard'
import { Toaster } from 'react-hot-toast';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      {/* Sidebar Component */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Dashboard Header Component */}
        <DashboardHeader setSidebarOpen={setSidebarOpen} />

        {/* Main Content Component */}
        <MainContent>
          {children}
        </MainContent>
      </div>
    </div>
  )
}
