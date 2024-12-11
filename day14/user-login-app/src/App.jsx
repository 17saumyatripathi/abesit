import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './components/DashBoard';
import Logout from './components/logout';

const App = () => {
  const [data, setData] = useState(null); // This will store user data (e.g., name, email, etc.)

  // Handler function for logging out (resetting user data)
  const handleLogout = () => {
    setData(null); // Clear user data when logging out
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login regLogin={data} />} />
            <Route path="/register" element={<Register regData={setData} />} />
          </Route>
          <Route path="/dashboard" element={<DashBoard regDash={data} />} />
          <Route path="/logout" element={<Logout regLogout={handleLogout} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
