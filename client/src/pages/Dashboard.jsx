/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-black text-white p-5">
        <div className="text-2xl font-bold mb-8">Property Taxes</div>
        <nav>
          <ul>
            <Link to='/NewProperty'>
            <li className="mb-4">
              <button className="w-full text-left py-2 px-4 rounded-lg bg-orange-500 hover:bg-orange-600">New Property</button>
            </li>
            </Link>
            <li className="mb-4">
              <button className="w-full text-left py-2 px-4">Projects</button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left py-2 px-4">Houses</button>
            </li>
            <Link to='/Calendar'>
            <li className="mb-4">
              <button className="w-full text-left py-2 px-4">Calendar</button>
            </li>
            </Link>
            <li className="mb-4">
              <button className="w-full text-left py-2 px-4">Users</button>
            </li>
            <li>
              <button className="w-full text-left py-2 px-4">Log Out</button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Property Taxes Management System</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for anything..."
              className="px-4 py-2 rounded-lg border border-gray-300"
            />
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
              N

            </div>
          </div>
        </header>

        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-gray-700">Total Houses</h2>
            <p className="text-2xl font-bold">5000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-gray-700">Total of Paid</h2>
            <p className="text-2xl font-bold">95/100</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-gray-700">Unpaid Houses</h2>
            <p className="text-2xl font-bold">5/100</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-gray-700">Total Income</h2>
            <p className="text-2xl font-bold">$1.3 million</p>
          </div>
        </section>

        {/* Project Summary Section */}
        {/* <section className="bg-white p-8 rounded-lg shadow-lg mb-8 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Project Summary</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Project Manager</th>
                <th className="py-2">Due Date</th>
                <th className="py-2">Status</th>
                <th className="py-2">Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Nalsa web development</td>
                <td className="py-2">Om prakash Sao</td>
                <td className="py-2">May 25, 2023</td>
                <td className="py-2 text-green-500">Completed</td>
                <td className="py-2">60%</td>
              </tr>
              <tr>
                <td className="py-2">Datascale AI app</td>
                <td className="py-2">Nelsian mando</td>
                <td className="py-2">Jun 20, 2023</td>
                <td className="py-2 text-red-500">Delayed</td>
                <td className="py-2">30%</td>
              </tr>
              <tr>
                <td className="py-2">Truvelify prtya</td>
                <td className="py-2">Tomas malan</td>
                <td className="py-2">Jul 13, 2023</td>
                <td className="py-2 text-yellow-500">At risk</td>
                <td className="py-2">45%</td>
              </tr>
            </tbody>
          </table>
        </section> */}
      </main>
    </div>
  );
};

export default Dashboard;
