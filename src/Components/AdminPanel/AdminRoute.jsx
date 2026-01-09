
import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');

  if (!token || !userStr) {
    return <Navigate to="/login" replace />;
  }

  try {
    const user = JSON.parse(userStr);
    // Check for admin role or property
    if (user.role !== 'admin' && user.isAdmin !== true) {
      console.warn('Access denied: User is not an admin', user);
      return <Navigate to="/" replace />; // Redirect non-admins to home
    }
  } catch (err) {
    console.error('Error parsing user data:', err);
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoute

