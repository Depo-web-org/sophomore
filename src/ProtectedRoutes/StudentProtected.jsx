import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logOut, setCredentials } from "../Redux/Auth/authSlice";
import { useRefreshTokenMutation } from "../Redux/Auth/authApiSlice";

const StudentProtectedRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [triggerRefreshToken] = useRefreshTokenMutation();
  const Token= localStorage.getItem('Token');

  useEffect(() => {
    const refreshAccessToken = async () => {
      if (isTokenExpired(Token)) {
        dispatch(logOut());
    };

    refreshAccessToken();
  }}, [Token, dispatch,]);


  if (!Token || user?.role !== "student") return <Navigate to="/register" />;

  return children;
};

export default StudentProtectedRoute;


const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const { exp } = JSON.parse(atob(token.split(".")[1]));
    return Date.now() >= exp * 1000;
  } catch (err) {
    console.error("Invalid token format:", err);
    return true;
  }
};
