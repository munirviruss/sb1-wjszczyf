import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Package, Users } from 'lucide-react';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <Link to="/admin" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold">Admin Panel</span>
          </Link>
        </div>
        <nav className="mt-8">
          <Link to="/admin" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
            <LayoutDashboard className="h-5 w-5 mr-2" />
            Dashboard
          </Link>
          <Link to="/admin/products" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
            <Package className="h-5 w-5 mr-2" />
            Products
          </Link>
          <Link to="/admin/orders" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Orders
          </Link>
          <Link to="/admin/customers" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
            <Users className="h-5 w-5 mr-2" />
            Customers
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;