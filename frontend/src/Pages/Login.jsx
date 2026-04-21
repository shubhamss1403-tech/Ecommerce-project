import React, { useState } from 'react';
import Title from '../Components/Title';

function Login() {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pt-14 flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="text-2xl mb-4 text-center">
        <Title text1={currentState === 'Login' ? 'LOGIN' : 'SIGN'} text2={currentState === 'Login' ? 'HERE' : 'UP'} />
      </div>
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full sm:max-w-sm gap-4">
        {currentState === 'Sign Up' && (
          <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Name" required />
        )}
        <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email" required />
        <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Password" required />
        
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
      </form>
    </div>
  );
}

export default Login;
