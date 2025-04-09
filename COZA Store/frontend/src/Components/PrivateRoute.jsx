import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem('token');
  
  if (!token) {
    toast.error('Please login first to access admin page');
    return <Navigate to="/login" />;
  }

  try {
    const decoded = jwtDecode(token);
    if (decoded.role !== 'admin') {
      toast.error('You do not have permission to access this page');
      return <Navigate to="/" />;
    }
  } catch (error) {
    toast.error('Session expired. Please login again');
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute; 