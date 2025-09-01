import React from 'react'

export default function DashboardPage() {
  const stats = [
    { title: 'Total Sales', value: '$45,231', change: '+20.1%', icon: '💰' },
    { title: 'Orders', value: '2,350', change: '+180.1%', icon: '📦' },
    { title: 'Customers', value: '1,234', change: '+19%', icon: '👥' },
    { title: 'Revenue', value: '$12,234', change: '+201', icon: '📈' },
  ]


  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="text-2xl">{stat.icon}</div>
            </div>
            <div className="mt-4">
              <span className="text-sm text-green-600">{stat.change}</span>
              <span className="text-sm text-gray-500"> from last month</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
