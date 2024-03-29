import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img src="/static/images/google.png" alt="Computer" width="500" height="500" />
      </div>
      <div className="w-1/2 bg-white p-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">ENLYT</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Login</button>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
          <div className="mt-4 text-sm">
            Don't have an account? <a href="/signup/page.tsx" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;