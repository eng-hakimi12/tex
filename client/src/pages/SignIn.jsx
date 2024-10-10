import React from 'react';

const SignIn = () => {
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        
        <form>
          {/* Email or Username */}
          <div className="mb-4">
            <label className="block text-gray-700">Email or Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email or username"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center">
          Don't have an account?{' '}
          <a href="/SingUp" className="text-slate-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
