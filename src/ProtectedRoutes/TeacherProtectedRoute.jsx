import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const TeacherProtectedRoute = ({ children }) => {
  const Token= localStorage.getItem('Token');

  const {  user } = useSelector((state) => state.auth);
  const {role}=useSelector((state)=>state.role)|| user.role;
  if (!Token) {
    // Redirect to login if not authenticated
    return <Navigate to="/register" />;
  }

  if (role !== "teacher") {
    // Redirect to register page if not a teacher
    return <Navigate to="/NotFoundPage" />;
  }else
  // Render child routes if authenticated and authorized as a teacher
  return children;
};

export default TeacherProtectedRoute;
