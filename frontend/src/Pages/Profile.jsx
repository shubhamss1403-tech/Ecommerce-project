import React from 'react';
import Title from '../Components/Title';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="pt-14 min-h-[60vh]">
      <div className="text-2xl mb-3">
        <Title text1={'MY'} text2={'PROFILE'} />
      </div>
      <div className="flex flex-col gap-4 mt-6 max-w-sm">
        <div className="p-4 border border-gray-200 rounded">
          <p className="text-gray-500 text-sm mb-1">Full Name</p>
          <p className="text-lg font-medium text-gray-800">Demo User</p>
        </div>
        <div className="p-4 border border-gray-200 rounded">
          <p className="text-gray-500 text-sm mb-1">Email Address</p>
          <p className="text-lg font-medium text-gray-800">user@example.com</p>
        </div>
        <button 
          onClick={() => navigate('/Login')} 
          className="bg-black text-white px-8 py-2 mt-4 w-fit focus:outline-none"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default Profile;
