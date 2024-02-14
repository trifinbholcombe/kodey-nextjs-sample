import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-cover bg-[url('/path/to/your/background/image.jpg')]">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            {/* Placeholder for your logo */}
            <img src="/path/to/your/logo.png" alt="Logo" className="h-14 w-14" />
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;