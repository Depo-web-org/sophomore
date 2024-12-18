import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated || role !== "student") {
    // If not authenticated, redirect to login page
    return <Navigate to="/register" />;
  }

  // If authenticated, render children
  return children;
};
export const TeacherProtectedRoute = ({ children }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated || role !== "teacher") {
    return <Navigate to="/register" />;
  }

  return children;
};
export default ProtectedRoute;
