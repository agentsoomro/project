import React from 'react';
import { Table as TableTennis, Truck, Medal, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=1600" 
            alt="Table Tennis"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <TableTennis className="mx-auto h-20 w-20 text-white mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            SmashMart: Table Tennis Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Your Premier Destination for Professional Table Tennis Equipment
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1599171571332-f5f6e4c9a9a6?w=500" 
              alt="Table Tennis Rackets"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Rackets</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1611251135345-18c56206b863?w=500" 
              alt="Table Tennis Balls"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Balls</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1534158914592-062992fbe900?w=500" 
              alt="Tables"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Tables</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500" 
              alt="Accessories"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Accessories</h3>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Medal className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Premium Quality</h3>
              <p className="mt-2 text-gray-600">Professional-grade equipment from top brands</p>
            </div>
            <div className="text-center">
              <Truck className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Fast Shipping</h3>
              <p className="mt-2 text-gray-600">Quick delivery worldwide</p>
            </div>
            <div className="text-center">
              <Headphones className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Expert Support</h3>
              <p className="mt-2 text-gray-600">Get advice from table tennis professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}