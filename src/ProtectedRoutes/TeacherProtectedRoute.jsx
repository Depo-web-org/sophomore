import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const TeacherProtectedRoute = () => {
  const { token, user } = useSelector((state) => state.auth);
  console.log(token, user);

  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/register" />;
  }

  if (user?.role !== "teacher") {
    // Redirect to register page if not a teacher
    return <Navigate to="/register" />;
  }

  // Render child routes if authenticated and authorized as a teacher
  return <Outlet />;
};

export default TeacherProtectedRoute;
