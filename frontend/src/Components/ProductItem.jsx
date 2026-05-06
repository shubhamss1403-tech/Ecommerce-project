
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

function ProductItem({ id, image, name, price, onQuickView }) {
  const { currency } = useContext(ShopContext);

  return (
    <div className="text-gray-700 cursor-pointer group relative">
      <Link to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img className="ease-in-out transition hover:scale-110" src={image[0]} alt="" />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">{currency}{price}</p>
      </Link>
      {onQuickView && (
        <button
          className="absolute bottom-2 right-2 bg-black text-white text-xs px-3 py-1 rounded opacity-80 hover:opacity-100 transition"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onQuickView();
          }}
        >
          Quick View
        </button>
      )}
    </div>
  );
}

export default ProductItem;