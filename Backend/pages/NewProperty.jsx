import React from 'react';

const AddPropertyForm = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">Add Property</h1>

      <form>
        {/* Div Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Owner Information</h2>
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter full name"
                  required
                />
              </div>

              {/* Mother's Name */}
              <div>
                <label className="block text-gray-700">Mother's Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter mother's name"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              {/* Passport Number (Optional) */}
              <div>
                <label className="block text-gray-700">Passport Number (Optional)</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter passport number"
                />
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-gray-700">Email (Optional)</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email address"
                />
              </div>

              {/* National ID (Optional) */}
              <div>
                <label className="block text-gray-700">National ID (Optional)</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter national ID"
                />
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Location Information</h2>
            <div className="space-y-4">
              {/* Region (Gobolka) */}
              <div>
                <label className="block text-gray-700">Region (Gobolka)</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="Banadir" // Always set to Banadir
                  readOnly
                />
              </div>

              {/* Choose District */}
              <div>
                <label className="block text-gray-700">Choose District</label>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>Choose district</option>
              <option value="Wadajir">Wadajir</option>
              <option value="Wabari">Wabari</option>
              <option value="Hamar Weyne">Hamar Weyne</option>
              <option value="Xamar Jajab">Xamar Jajab</option>
              <option value="Shangaani">Shangaani</option>
              <option value="Shibis">Shibis</option>
              <option value="Boondheere">Boondheere</option>
              <option value="Cabdicasiis">Cabdicasiis</option>
              <option value="Yaaqshiid">Yaaqshiid</option>
              <option value="Karaan">Karaan</option>
              <option value="Heliwa">Heliwa</option>
              <option value="Dayniile">Dayniile</option>
              <option value="Darusalam">Darusalam</option>
              <option value="Hodan">Hodan</option>
              <option value="Huriwa">Huriwa</option>
              <option value="Warta Nabada">Warta Nabada</option>
              <option value="Dharkeynley">Dharkeynley</option>
              <option value="Kaxda">Kaxda</option>
              <option value="Garasbaaley">Garasbaaley</option>
              <option value="Gubadleey">Gubadleey</option>
                  {/* Add other districts as needed */}
                </select>
              </div>

              {/* Waaxda (Open Input) */}
              <div>
                <label className="block text-gray-700">Waaxda</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter waaxda"
                  required
                />
              </div>

              {/* Xafada */}
              <div>
                <label className="block text-gray-700">Xafada</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter xafada"
                  required
                />
              </div>

              {/* Guri Number */}
              <div>
                <label className="block text-gray-700">Guri Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter guri number"
                  required
                />
              </div>

              {/* Property Description */}
              <div>
                <label className="block text-gray-700">Property Description</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe the property"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="w-full md:w-auto bg-slate-600 text-white py-2 px-6 rounded-lg hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Property
          </button>
        </div>
      </form>
    </div>

  );
};

export default AddPropertyForm;
