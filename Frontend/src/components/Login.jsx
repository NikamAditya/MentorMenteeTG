import React from 'react'
import { useNavigate } from 'react-router-dom';
import RegistrationPage from './Registrationpage';

const login = () => {
  
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  const handleRegistration = () =>{
    navigate('/registration');
  };


  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200">
      {/* Image section */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
        <img
          src="/src/assets/logo.png" 
          alt="Logo"
          className="w-full h-auto max-w-xs md:max-w-md"
        />
        <p className="mt-4 text-center text-lg font-bold">
          Vasantdada Patil College of Engineering & Visual Arts
        </p>
      </div>
    
      {/* Login form section */}
      <div className="md:w-1/2 flex justify-center items-center p-4">
        <div className="bg-white border border-blue-200 rounded-md p-8 shadow-lg w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">LOGIN</h1>
          <form>
            <div className="my-4">
              <label
                htmlFor="email"
                className="block text-s dark:text-black-800 mb-1"
              >
                Email-Id
              </label>
              <input
                type="email"
                id="email"
                className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
                placeholder=" "
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="password"
                className="block text-sm text-black-500 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
                placeholder=" "
              />
            </div>
            <button onClick={handleLogin}
              type="submit"
              className="w-full py-2.5 bg-blue-800 text-white font-bold rounded-md hover:bg-blue-500"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-orange-600">
              Don't have an account?{' '}
              <a onClick={handleRegistration} className="text-black font-bold hover:underline">
                Create your account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;