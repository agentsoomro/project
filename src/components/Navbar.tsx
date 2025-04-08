import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Home, Package, Table as TableTennis } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-gray-800 hover:text-gray-600">
              <TableTennis className="h-6 w-6 mr-2" />
              <span className="font-semibold text-xl">SmashMart</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/products" className="flex items-center text-gray-600 hover:text-gray-800">
              <Package className="h-6 w-6 mr-1" />
              <span>Equipment</span>
            </Link>
            <Link to="/cart" className="flex items-center text-gray-600 hover:text-gray-800">
              <ShoppingCart className="h-6 w-6 mr-1" />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}