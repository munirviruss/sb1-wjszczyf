import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to EcomCMS</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-xl text-gray-600 mb-8">
          Discover our amazing products and experience seamless shopping
        </p>
        <Link
          to="/products"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="Hero"
        className="mt-12 rounded-lg shadow-xl w-full max-w-4xl mx-auto"
      />
    </div>
  );
};

export default Home;