import React, { useState } from 'react';
import Title from '../Components/Title';

  function Login() {
  const [currentState, setCurrentState] = useState('Login');
  const [show,setShow] = useState(false);

  const[formData,setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className="pt-14 flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="text-2xl mb-4 text-center">
        <Title text1={currentState === 'Login' ? 'LOGIN' : 'SIGN'} text2={currentState === 'Login' ? 'HERE' : 'UP'} />
      </div>
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full sm:max-w-sm gap-4">
        {currentState === 'Sign Up' && (
          <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Name" required />
        )}
        <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email" required />
        <input value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Password" required />
        
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          {currentState === 'Login' ? (
             <p className="cursor-pointer text-gray-600 hover:text-black">Forgot your password?</p>
          ) : (
             <p></p>
          )}

          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer text-black hover:underline">Create account</p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-black hover:underline">Login Here</p>
          )}
        </div>
        
        <button className="bg-black text-white font-light px-8 py-2 mt-4 focus:outline-none">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>

        {
          show && (
            <div className="mt-4 rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-700 shadow-sm">
              <p className="mb-1 font-medium text-black">Name: <span className="font-normal text-gray-700">{formData.name}</span></p>
              <p className="mb-1 font-medium text-black">Email: <span className="font-normal text-gray-700 break-all">{formData.email}</span></p>
              <p className="font-medium text-black">Password: <span className="font-normal text-gray-700">{formData.password}</span></p>
            </div>
          )
        }
      </form>
    </div>
  );
}

export default Login;
