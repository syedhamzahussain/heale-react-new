import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode; // Ensuring children is of ReactNode type
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token'); // Or your authentication logic

  if (!isAuthenticated) {
    // Always return a React element
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>; // Ensure children are wrapped in a fragment if necessary
};

export default ProtectedRoute;
