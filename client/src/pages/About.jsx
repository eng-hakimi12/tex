/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      

      {/* About Section */}
      <section id="about" className="flex-1 bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">About Our Property Tax Management System</h2>
          <p className="text-gray-600 text-lg mb-8">
            The Property Tax Management System is a comprehensive solution designed to streamline property tax payments and management. Our platform aims to simplify the process for property owners and government agencies, providing a secure and efficient way to handle tax-related transactions.
          </p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to create a seamless and transparent property tax management experience, ensuring that property owners can manage their taxes with ease and accuracy. We strive to reduce the complexity of tax payments while maintaining a high level of security and efficiency.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Secure and Reliable Transactions</li>
                <li>User-friendly Interface</li>
                <li>Real-time Tax Records and Payment History</li>
                <li>Dedicated Customer Support</li>
                <li>Compliance with Tax Regulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 p-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* First Card */}
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-700 mb-2">$47 billion</div>
            <p className="text-gray-700">Collects revenue for the City</p>
          </div>
          {/* Second Card */}
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-800 mb-2">$1.4 trillion</div>
            <p className="text-gray-700">Values approximately 1.1 million properties with a total market value of more than $1.4 trillion</p>
          </div>
          {/* Third Card */}
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-800 mb-2">$239.7 billion</div>
            <p className="text-gray-700">Advises on the City's pension system and deferred compensation plan</p>
          </div>
          {/* Fourth Card */}
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-800 mb-2">$1.1 billion</div>
            <p className="text-gray-700">Manages the City's treasury</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">The Department of Finance also:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Records and maintains public property records</li>
            <li>Adjudicates and collects parking tickets</li>
            <li>Through the Sheriff's Office, acts as the City's chief civil law enforcer</li>
            <li>Administers exemption and abatement programs for property owners and renters</li>
          </ul>
        </div>
      </div>
    </div>

      {/* Our Team Section */}
      <section id="team" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1726434007~exp=1726437607~hmac=032aea88433a23d9179a0b561eb1f73da9a48e79928ed9b257790a59e49560c3&w=740" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold"> Nuradiin Osman</h4>
              <p className="text-gray-600">Deleveloper</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img src="https://img.freepik.com/premium-photo/colorful-picture-man-with-blue-shirt-it_1221953-49273.jpg?w=740" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold">Abdulahi Ali</h4>
              <p className="text-gray-600"> Developer</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img src="https://img.freepik.com/premium-photo/colorful-picture-man-with-blue-shirt-it_1221953-49273.jpg?w=740" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold">Muscab </h4>
              <p className="text-gray-600">Deleveloper</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1726434007~exp=1726437607~hmac=032aea88433a23d9179a0b561eb1f73da9a48e79928ed9b257790a59e49560c3&w=740" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold">Abdi Hakiim </h4>
              <p className="text-gray-600">Deleveloper</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">Benefits of Paying Taxes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Public Services */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img src="https://img.freepik.com/premium-vector/public-service-blue-word-concept_106317-41256.jpg?w=740" alt="Public Services" className="w-full h-32 object-cover mb-4 rounded-lg" />
          <h2 className="text-xl font-semibold mb-2">Public Services</h2>
          <p className="text-gray-700">Taxes fund essential public services like law enforcement, public transportation, and more.</p>
        </div>

        {/* Infrastructure Development */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img src="https://img.freepik.com/free-vector/concept-modern-city-construction-buildings_81522-702.jpg?t=st=1726497128~exp=1726500728~hmac=53dede5d34ea69a7a17604de6e6527a719cc538701be2a0cecdc14bb35be7863&w=740" alt="Infrastructure" className="w-full h-32 object-cover mb-4 rounded-lg" />
          <h2 className="text-xl font-semibold mb-2">Infrastructure Development</h2>
          <p className="text-gray-700">Taxes help build and maintain infrastructure such as roads, bridges, and public buildings.</p>
        </div>

        {/* Healthcare */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img src="https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg?t=st=1726497151~exp=1726500751~hmac=ec5cb608a95b9751412f4ad309dee40f33af39a15ad3eb454326e0084af9eae0&w=740" alt="Healthcare" className="w-full h-32 object-cover mb-4 rounded-lg" />
          <h2 className="text-xl font-semibold mb-2">Healthcare</h2>
          <p className="text-gray-700">Funding from taxes supports healthcare services, providing access to medical care for all citizens.</p>
        </div>

        {/* Education */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img src="https://img.freepik.com/premium-photo/graduation-high-school-university-concept-kids-education_919955-11280.jpg?w=740" alt="Education" className="w-full h-32 object-cover mb-4 rounded-lg" />
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p className="text-gray-700">Taxes support public education systems, ensuring that everyone has access to quality education.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg space-y-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Paying taxes helps fund essential public services like healthcare, education, and infrastructure, ensuring a better quality of life for everyone.</h1>

      {/* Section 1: Horizontal - Image on the Left, Text on the Right */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <img
          src="https://img.freepik.com/free-vector/tax-icons-set_1284-11435.jpg?t=st=1726498340~exp=1726501940~hmac=3727ec1c4e2a29be2c40127271b5c26941acd58ecef8b1b8a0a0addc9b056cd3&w=740"
          alt="Feature 1"
          className="w-full md:w-1/2 h-48 object-cover rounded-lg shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Feature 1: Benefits of Paying Taxes</h2>
          <p className="text-gray-700">Taxes contribute to the growth and stability of the economy, providing resources for social welfare programs and national development.</p>
        </div>
      </div>

      {/* Section 2: Horizontal - Text on the Left, Image on the Right */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Feature 2: Dynamic Layout</h2>
          <p className="text-gray-700">Combine vertical and horizontal elements to create a dynamic and engaging layout for your users.</p>
        </div>
        <img
          src="https://img.freepik.com/premium-photo/flat-vector-isolated-shield-check-mark-with-word-security-concept-as-vector-design-feat_980716-632774.jpg?w=740"
          alt="Feature 2"
          className="w-full md:w-1/2 h-48 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Section 3: Vertical - Image with Text Overlay */}
      <div className="relative w-full h-64">
        <img
          src="https://img.freepik.com/premium-photo/artistic-closeup-man39s-eyes-reflecting-city-lights_46342-1763.jpg?w=740"
          alt="Overlay Feature"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <h2 className="text-white text-2xl font-bold">Overlay Feature: Visual Impact</h2>
        </div>
      </div>

      {/* Section 4: Horizontal - Image Gallery with Text Below */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center">
          <img
            src="https://img.freepik.com/free-vector/realistic-sports-balls-bat-other-equipment-vector-big-set_1150-40626.jpg?t=st=1726497779~exp=1726501379~hmac=87d8db047b6095dbb60e877ee8aab6acb257bd6d2422be524b8e9b965d4ff115&w=740"
            alt="Gallery 1"
            className="w-full h-32 object-cover rounded-lg shadow-md mb-2"
          />
          <p className="text-gray-700">Sports Challenges</p>
        </div>
        <div className="text-center">
          <img
            src="https://img.freepik.com/premium-photo/graduation-cap-banner_1063985-25223.jpg?w=740"
            alt="Gallery 2"
            className="w-full h-32 object-cover rounded-lg shadow-md mb-2"
          />
          <p className="text-gray-700">Free Educations</p>
        </div>
        <div className="text-center">
          <img
            src="https://img.freepik.com/premium-vector/african-businessman-flying-rocket-up_61103-482.jpg?w=740"
            alt="Gallery 3"
            className="w-full h-32 object-cover rounded-lg shadow-md mb-2"
          />
          <p className="text-gray-700">Start Up Business</p>
        </div>

        
      </div>
      
    </div>
    
    </div>
    

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <p className="text-center text-gray-600 mb-4">Have any questions or need support? Feel free to reach out to us!</p>
          <p className="text-center text-blue-800">Email: <a href="mailto:support@propertytaxsystem.com" className="hover:underline">support@propertytaxsystem.com</a></p>
          <p className="text-center text-blue-800">Phone: +123-456-7890</p>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Property Tax Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
