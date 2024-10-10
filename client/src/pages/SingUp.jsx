/* eslint-disable no-unused-vars */
// src/components/SignupForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className=" flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-black">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-slate-600 text-white font-medium rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-black mt-4">
          Already have an account?{' '}
          <Link to="/SignIn" className="text-slate-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
