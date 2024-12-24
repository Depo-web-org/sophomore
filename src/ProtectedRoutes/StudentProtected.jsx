import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentProtectedRoute = () => {
  const { token, user } = useSelector((state) => state.auth);

  if (!token) {
    // Redirect to register if not authenticated
    return <Navigate to="/register" />;
  }

  if (user?.role !== "student") {
    // Redirect to register page if not a student
    return <Navigate to="/register" />;
  }

  // Render child routes if authenticated and authorized as a student
  return <Outlet />;
};

export default StudentProtectedRoute;
