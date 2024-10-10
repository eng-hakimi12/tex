/* eslint-disable no-unused-vars */
import React from 'react';

const Home = () => {
  return (
    <div  className="min-h-screen flex flex-col">
     

      {/* Hero Section */}
      <section id="home" className="flex-1 bg-gray-100 flex flex-col items-center justify-center text-center py-20">
        <div className="container mx-auto px-4 brightness-90 sm:w-[900px] sm:h-80 h-96 sm:justify-center sm:ml-[25%] bg-[url(https://img.freepik.com/free-photo/house-isolated-field_1303-23772.jpg?t=st=1726397514~exp=1726401114~hmac=b9da1cdd20a121f80f057ca99a5607cdd00b4f016547575e60efe8f644b227c1&w=740)] bg-no-repeat">
          <h2 className="text-4xl text- font-semibold mb-4 sm:mr-[20%] mt-9">Efficient and Reliable Property Tax Management</h2>
          <p className="text-lg text-white mb-8 sm:mr-[15%]">
            Streamline your property tax payments with our user-friendly management system.
          </p>
          <a href="#about" className="bg-slate-800 text-white px-6 py-3 rounded-full hover:bg-slate-900 mr-[20%] ">
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">About Our System</h3>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <p className="text-gray-600">
                Our Property Tax Management System is designed to make the process of paying and managing property taxes simpler and more efficient. With easy-to-use features and a secure platform, we ensure that your tax payments are handled smoothly.
              </p>
            </div>
            <div className="w-full md:w-1/2   ">
              <img className='w-[80%]' src="https://img.freepik.com/premium-vector/construction-architect-concept-man-protective-hat-near-blueprint-engineer-builder-think-about-house-building-architecture-engineering-cartoon-flat-vector-illustration_118813-16679.jpg?w=740" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Easy Payments</h4>
              <p className="text-gray-600">Pay your property taxes online with a simple and secure payment process.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Tax Records</h4>
              <p className="text-gray-600">Access your payment history and tax records anytime.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Secure Platform</h4>
              <p className="text-gray-600">Your data is safe with our advanced security measures.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Impact of Tax Revenue on Society</h1>
      
      <div className="space-y-8">
        
        {/* Education Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://img.freepik.com/premium-photo/gold-coins-book-finance-education-concept_562859-5818.jpg?w=740"
            alt="Education"
            className="w-full md:w-1/3 h-32 object-cover rounded-lg shadow-md"
          />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p className="text-gray-700">
              Over <span className="font-bold"> $1500 </span> in tax revenue has been used to establish <span className="font-bold">50 new schools</span>. Quality education is now accessible to thousands, improving literacy and future opportunities.
            </p>
          </div>
        </div>

        {/* Infrastructure Development Section */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://img.freepik.com/free-vector/concept-modern-city-construction-buildings_81522-702.jpg?t=st=1726546015~exp=1726549615~hmac=abf05d77e47e167c8a5fea6c47d031b893ace00830f5ad095a82152748ae1fb6&w=740"
            alt="Infrastructure Development"
            className="w-full md:w-1/3 h-32 object-cover rounded-lg shadow-md"
          />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">Infrastructure</h2>
            <p className="text-gray-700">
              An investment of <span className="font-bold">$2 million</span> has improved roads, bridges, and public transport, connecting rural and urban areas, and enhancing economic growth.
            </p>
          </div>
        </div>

        {/* Sports and Recreation Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://img.freepik.com/premium-vector/isometric-illustration-various-sports-equipment-accessories-green-field_1294240-89913.jpg?w=740"
            alt="Sports and Recreation"
            className="w-full md:w-1/3 h-32 object-cover rounded-lg shadow-md"
          />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">Sports and Recreation</h2>
            <p className="text-gray-700">
              <span className="font-bold">$1000</span> was allocated to build <span className="font-bold">10 sports complexes</span>, promoting health and community engagement through sports.
            </p>
          </div>
        </div>

        {/* Healthcare Section */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg?t=st=1726546165~exp=1726549765~hmac=f560105e9653346b5587aaad356205029adc564476be1da7465decee6badbfef&w=740"
            alt="Healthcare"
            className="w-full md:w-1/3 h-32 object-cover rounded-lg shadow-md"
          />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">Healthcare</h2>
            <p className="text-gray-700">
              With <span className="font-bold">$10,000 </span> funding, <span className="font-bold">20 new healthcare centers</span> were established, improving access to essential medical services in underserved areas.
            </p>
          </div>
        </div>

        {/* Social Welfare Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://img.freepik.com/premium-photo/world-environment-day-with-global-community-teamwork-group-volunteers-joins-hand-together-concept-volunteer-charity-work-people-joining-cooperation-success-sustainable-development-goal_562859-5085.jpg?w=740"
            alt="Social Welfare"
            className="w-full md:w-1/3 h-32 object-cover rounded-lg shadow-md"
          />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">Social Welfare</h2>
            <p className="text-gray-700">
              Tax revenue supports social welfare programs, including affordable housing and community projects, fostering a more inclusive society.
            </p>
          </div>
        </div>
      </div>
    </div>


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
          <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
          <p className="text-gray-600">For any inquiries, please contact us at <a href="mailto:support@propertytaxsystem.com" className="text-blue-800 hover:underline">support@example.com</a>.</p>
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

export default Home;
