import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import RelatedProducts from '../Components/RelatedProducts';
import { assets as frontAssets } from '../assets/frontend_assets/assets.js';

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const navigate = useNavigate();

  const fetchProductData = () => {
    const item = products.find((p) => p._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className="pt-14 text-center">Loading product...</div>;
  }

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size first!");
      return;
    }
    addToCart(productData._id, size);
    navigate('/Cart'); // Auto redirect to Cart for a smooth simple flow
  };

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer object-cover border border-gray-100 p-1' alt='' />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto object-cover' alt='' />
          </div>
        </div>

        {/* Product Details */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={frontAssets.star_icon} alt="" className="w-3.5" />
            <img src={frontAssets.star_icon} alt="" className="w-3.5" />
            <img src={frontAssets.star_icon} alt="" className="w-3.5" />
            <img src={frontAssets.star_icon} alt="" className="w-3.5" />
            <img src={frontAssets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2 text-gray-600 text-sm">(122 Reviews)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5 text-sm leading-relaxed'>{productData.description}</p>
          
          {/* Size Selection */}
          <div className='flex flex-col gap-4 my-8'>
            <p className="font-medium text-gray-700">Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button 
                  onClick={() => setSize(item)} 
                  key={index} 
                  className={`border px-5 py-2 text-sm bg-gray-50 ${item === size ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <button 
            onClick={handleAddToCart} 
            className='bg-black text-white px-10 py-3 text-sm active:bg-gray-700 w-full sm:w-auto'
          >
            ADD TO CART
          </button>
           
          <hr className='mt-8 sm:w-4/5' />
          
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
             <p>✓ 100% Original product.</p>
             <p>✓ Cash on delivery is available.</p>
             <p>✓ Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm text-gray-500 cursor-pointer'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual storefront where businesses and individuals can showcase their products, interact with customers, and process transactions without the need for a physical presence.</p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
         <RelatedProducts category={productData.category} subcategory={productData.subCategory} />
      </div>
    </div>
  );
}

export default Product;
