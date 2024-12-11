import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ regLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    regLogout(); // Clear user data
    navigate("/register"); // Redirect to register page after logout
  }, [regLogout, navigate]);

  return (
    <div>Logging out...</div>
  );
};

export default Logout;
