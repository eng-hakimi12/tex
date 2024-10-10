import React from 'react';

// Bilaha iyo maalmaha sanadka
const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 }, // Waxaad beddeli kartaa si uu u noqdo 29 haddii uu sanadka yahay sanad 366 ah
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 },
];

const Calendar = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">Sanadka Oo Dhan</h1>

      {/* Calendar Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {months.map((month, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-50">
            {/* Month Name */}
            <h2 className="text-xl font-semibold mb-4 text-center">{month.name}</h2>
            {/* Days */}
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: month.days }, (_, i) => (
                <div
                  key={i}
                  className="w-full p-2 text-center border rounded-lg bg-white shadow-sm"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
