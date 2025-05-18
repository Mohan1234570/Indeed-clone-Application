import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("🔐 No token found");
    return <Navigate to="/" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();

    console.log("🔐 Token decoded:", decoded);
    console.log("🔐 Token expired:", isExpired);

    if (isExpired) {
      localStorage.removeItem("token");
      return <Navigate to="/" replace />;
    }

    return <Outlet />;
  } catch (err) {
    console.log("🔐 Invalid token error:", err);
    localStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
