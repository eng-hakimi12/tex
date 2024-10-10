import React from 'react';

const ComplaintPage = () => {
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Submit a Complaint</h1>
        
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Subject Input */}
          

          {/* Message Input */}
          <div className="mb-6">
            <label className="block text-gray-700">Complaint Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your complaint here..."
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintPage;
