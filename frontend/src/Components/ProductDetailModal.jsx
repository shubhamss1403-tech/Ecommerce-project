import React from 'react';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={product.image[0]} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="mb-2">Price: {product.currency}{product.price}</p>
        <p className="text-gray-700 mb-2">{product.description}</p>
        {/* Add more product details here if needed */}
      </div>
    </div>
  );
};

export default ProductDetailModal;
