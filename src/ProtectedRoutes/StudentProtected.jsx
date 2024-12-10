import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/register" />;
  }

  // If authenticated, render children
  return children;
};

export default ProtectedRoute;
