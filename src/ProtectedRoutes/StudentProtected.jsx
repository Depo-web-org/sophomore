import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const StudentProtectedRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);

  // Check if token exists in localStorage if it's not in Redux state
  const storedToken = localStorage.getItem("refresh_token");
  const isAuthenticated = token || storedToken;

  if (!isAuthenticated) {
    return <Navigate to="/register" />;
  }

  if (user?.role !== "consumer") {
    return <Navigate to="/register" />;
  }

  return children;
};

export default StudentProtectedRoute;
