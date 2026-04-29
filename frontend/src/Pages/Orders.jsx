import React from 'react';
import Title from '../Components/Title';

function Orders() {
  return (
    <div className="pt-14 min-h-[60vh]">
      <div className="text-2xl mb-3">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div className="mt-8 flex flex-col gap-4">
        {/* Order 1 */}
        <div className="p-4 border border-gray-200 md:flex md:justify-between md:items-center">
          <div>
            <p className="font-medium text-gray-800">Men Round Neck Pure Cotton T-shirt</p>
            <div className="flex items-center gap-3 mt-1 text-gray-500 text-sm">
              <p className="text-black font-medium">$200</p>
              <p>Quantity: 1</p>
              <p>Size: M</p>
            </div>
            <p className="text-sm mt-3 text-gray-500">Date: <span className="text-black">21 Apr 2026</span></p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
              <p className="text-sm">Delivered</p>
            </div>
            <button className="border border-gray-300 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100">
              Track Order
            </button>
          </div>
        </div>

        {/* Order 2 */}
        <div className="p-4 border border-gray-200 md:flex md:justify-between md:items-center">
          <div>
            <p className="font-medium text-gray-800">Women Round Neck Cotton Top</p>
            <div className="flex items-center gap-3 mt-1 text-gray-500 text-sm">
              <p className="text-black font-medium">$100</p>
              <p>Quantity: 1</p>
              <p>Size: L</p>
            </div>
            <p className="text-sm mt-3 text-gray-500">Date: <span className="text-black">20 Apr 2026</span></p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <p className="min-w-2 h-2 rounded-full bg-blue-500"></p>
              <p className="text-sm">Shipped</p>
            </div>
            <button className="border border-gray-300 px-4 py-2 text-sm font-medium rounded hover:bg-gray-100">
              Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
