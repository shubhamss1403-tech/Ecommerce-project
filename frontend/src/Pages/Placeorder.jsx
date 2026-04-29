import React from 'react';
import Title from '../Components/Title';
import { useNavigate } from 'react-router-dom';

function Placeorder() {
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate('/Orders'); 
  };

  return (
    <div className="pt-14 min-h-[60vh]">
      <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
        {/* Left Side: Delivery Information */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>
          <div className="flex gap-3">
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" required />
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" required />
          </div>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" required />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" required />
          <div className="flex gap-3">
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" required />
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" required />
          </div>
          <div className="flex gap-3">
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" required />
            <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" required />
          </div>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" required />
        </div>

        {/* Right Side: Totals and Payment */}
        <div className="mt-8 flex-1 max-w-[480px]">
           <div className="text-xl sm:text-2xl my-3">
             <Title text1={'PAYMENT'} text2={'METHOD'} />
           </div>
           <div className="flex flex-col gap-4 mt-6">
             {/* Payment Options */}
             <div className="flex items-center gap-3 border p-3 cursor-pointer border-gray-200 hover:border-black">
               <p className="text-gray-500 font-medium">STRIPE</p>
             </div>
             <div className="flex items-center gap-3 border p-3 cursor-pointer border-gray-200 hover:border-black">
               <p className="text-gray-500 font-medium">RAZORPAY</p>
             </div>
             <div className="flex items-center gap-3 border p-3 cursor-pointer border-green-500 bg-green-50">
               <p className="text-black font-semibold">CASH ON DELIVERY</p>
             </div>
           </div>

           <div className="w-full text-end mt-8">
             <button type="submit" className="bg-black text-white px-16 py-3 text-sm hover:bg-gray-800">
               PLACE ORDER
             </button>
           </div>
        </div>
      </form>
    </div>
  );
}

export default Placeorder;
