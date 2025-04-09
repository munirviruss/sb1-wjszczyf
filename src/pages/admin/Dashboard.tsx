import React from 'react';
import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <DollarSign className="h-10 w-10 text-green-500" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Total Revenue</h2>
              <p className="text-2xl font-semibold text-gray-900">$12,345</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <ShoppingCart className="h-10 w-10 text-blue-500" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Total Orders</h2>
              <p className="text-2xl font-semibold text-gray-900">156</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Package className="h-10 w-10 text-purple-500" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Products</h2>
              <p className="text-2xl font-semibold text-gray-900">89</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Users className="h-10 w-10 text-orange-500" />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Customers</h2>
              <p className="text-2xl font-semibold text-gray-900">2,345</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Order ID</th>
                  <th className="text-left py-2">Customer</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">#12345</td>
                  <td className="py-2">John Doe</td>
                  <td className="py-2">$99.99</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Products</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Product"
                className="w-12 h-12 rounded object-cover"
              />
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Product Name</h3>
                <p className="text-sm text-gray-500">89 sales</p>
              </div>
              <span className="ml-auto font-medium text-gray-900">$99.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;