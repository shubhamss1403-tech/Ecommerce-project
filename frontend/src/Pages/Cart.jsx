import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { products, currency, cartItems, delivery_fee } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  // Calculate totals safely
  let subtotal = 0;
  cartData.forEach((item) => {
    const productData = products.find((product) => product._id === item._id);
    if (productData) {
      subtotal += productData.price * item.quantity;
    }
  });

  return (
    <div className="pt-14 border-t">
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {cartData.length === 0 ? (
        <div className="my-10 text-center text-gray-500">
          <p className="text-xl">Your cart is empty.</p>
          <button 
            onClick={() => navigate('/Collection')} 
            className="mt-6 bg-black text-white px-8 py-3 text-sm hover:bg-gray-800"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <div>
          {/* Cart Items List */}
          <div className="mt-8">
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              if (!productData) return null;

              return (
                <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                  <div className="flex items-start gap-6">
                    <img className="w-16 sm:w-20 rounded" src={productData.image?.[0]} alt="" />
                    <div>
                      <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                      <div className="flex items-center gap-5 mt-2">
                        <p>{currency}{productData.price}</p>
                        <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quantity Display (Static for simplicity, but shows number) */}
                  <div className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center bg-gray-50">
                    {item.quantity}
                  </div>
                  
                  {/* Delete Icon (Text fallback for basic simplicity) */}
                  <p className="cursor-pointer text-gray-400 font-bold hover:text-red-500 text-center">X</p>
                </div>
              );
            })}
          </div>

          {/* Cart Totals Bottom Section */}
          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
              <div className="flex flex-col gap-2 mb-6 p-6 border bg-gray-50">
                <div className="text-xl sm:text-2xl mb-3">
                   <Title text1={'CART'} text2={'TOTALS'} />
                </div>
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>{currency}{subtotal}.00</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p>Delivery Fee</p>
                  <p>{currency}{delivery_fee}.00</p>
                </div>
                <hr className="my-2 border-gray-300" />
                <div className="flex justify-between font-bold text-lg mt-2">
                  <p>Total</p>
                  <p>{currency}{(subtotal + (delivery_fee || 0))}.00</p>
                </div>
              </div>
              
              <div className="w-full text-end">
                 <button 
                   onClick={() => navigate('/Placeorder')} 
                   className="bg-black text-white text-sm px-8 py-3 hover:bg-gray-800"
                 >
                   PROCEED TO CHECKOUT
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
