import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Butterfly Timo Boll ALC',
    description: 'Professional grade table tennis blade with Arylate-Carbon technology',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1599171571332-f5f6e4c9a9a6?w=500',
    category: 'Rackets'
  },
  {
    id: '2',
    name: 'DHS 3-Star Balls',
    description: 'Competition-grade 40+ plastic balls, ITTF approved',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1611251135345-18c56206b863?w=500',
    category: 'Balls'
  },
  {
    id: '3',
    name: 'STIGA Advantage Pro',
    description: 'Tournament-ready table tennis table with premium features',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=500',
    category: 'Tables'
  },
  {
    id: '4',
    name: 'Yasaka Mark V Rubber',
    description: 'Professional table tennis rubber with excellent spin and speed',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1599171571332-f5f6e4c9a9a6?w=500',
    category: 'Rackets'
  },
  {
    id: '5',
    name: 'Pro Training Robot',
    description: 'Advanced training robot with programmable shot patterns',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500',
    category: 'Training'
  },
  {
    id: '6',
    name: 'Premium Sports Bag',
    description: 'Spacious bag designed specifically for table tennis equipment',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: 'Accessories'
  }
];

export default function Products() {
  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Table Tennis Equipment</h1>
      
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">All</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Rackets</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Balls</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Tables</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Accessories</button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}