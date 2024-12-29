import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/UseRole";

const StudentProtectedRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const {role}=useSelector((state)=>state.role)|| user.role;
  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/register" />;
  }
  if (role !== "consumer") {
    // Redirect to register page if not a Student
    return <Navigate to="/NotFoundPage" />;
  }else
  // Render child routes if authenticated and authorized as a Student
  return children;
};

export default StudentProtectedRoute;
