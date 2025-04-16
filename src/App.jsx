import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Staff Scheduling App</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className={`px-4 py-2 rounded ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-lg p-6`}>
          <h2 className="text-xl font-semibold mb-4">Welcome to Staff Scheduling</h2>
          <p className="mb-6">Manage your staff schedules, track time, and generate reports with ease.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature Cards */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg shadow`}>
              <h3 className="font-semibold mb-2">Shift Management</h3>
              <p className="text-sm">Create and manage staff shifts with an intuitive interface.</p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg shadow`}>
              <h3 className="font-semibold mb-2">Time Tracking</h3>
              <p className="text-sm">Track start and end times for all staff members.</p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg shadow`}>
              <h3 className="font-semibold mb-2">Reports</h3>
              <p className="text-sm">Generate comprehensive reports for payroll and analysis.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md mt-8`}>
        <div className="container mx-auto px-4 py-4 text-center">
          <p>© 2024 Staff Scheduling App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
