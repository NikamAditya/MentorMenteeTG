import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const demoUsers = [
  {
    email: "student1@gmail.com",
    password: "123",
    uid: "1",
    type: "0"
  },
  {
    email: "student2@gmail.com",
    password: "123",
    uid: "1",
    type: "0"
  },
  {
    email: "student3@gmail.com",
    password: "123",
    uid: "1",
    type: "1"
  }
];

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = demoUsers.find(user => user.email === email && user.password === password);
    if (user) {
      const { uid, type } = user;
      if (uid === "1" && type === "0") {
        navigate('/dashboard');
      } else if (uid === "1" && type === "1") {
        navigate('/registration');
      } else {
        console.log('Login successful for another user type');
      }
    } else {
      setError('Invalid email or password');
    }
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
          <form onSubmit={handleLogin}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
                placeholder=" "
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
              type="submit"
              className="w-full py-2.5 bg-blue-800 text-white font-bold rounded-md hover:bg-blue-500"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-orange-600">
              Don't have an account?{' '}
              <a className="text-black font-bold hover:underline">
                Create your account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
