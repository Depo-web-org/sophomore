import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useRole from "../Hooks/UseRole";
import { logOut, setCredentials } from "../Redux/Auth/authSlice";
import { apiSlice } from "../Redux/api/apiSclice";

const StudentProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.role) || user.role;

  // Manage loading and error states
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!token && !isRefreshing) {
      // Trigger refresh token only if no token is available
      const refreshToken = async () => {
        setIsRefreshing(true);
        setHasError(false);

        try {
          // Trigger the refresh token logic automatically handled by `apiSlice`
          const refreshResponse = await dispatch(
            apiSlice.endpoints.refreshToken.initiate()
          );

          if (refreshResponse?.data) {
            // Update the token and user in the store if refresh is successful
            dispatch(
              setCredentials({
                token: refreshResponse.data.token,
                user: refreshResponse.data.user,
              })
            );
          } else {
            // If refresh fails, log out
            dispatch(logOut());
            setHasError(true);
          }
        } catch (error) {
          // If there is an error during refresh
          dispatch(logOut());
          setHasError(true);
        } finally {
          setIsRefreshing(false);
        }
      };

      refreshToken();
    }
  }, [token, isRefreshing, dispatch]);

  if (isRefreshing) {
    // If refreshing, show a loading state
    return <div>Refreshing token...</div>;
  }

  if (hasError) {
    // If there was an error refreshing, redirect to login
    return <Navigate to="/register" />;
  }

  if (!token) {
    // If no token is available after refresh attempt, redirect to login
    return <Navigate to="/register" />;
  }

  if (role !== "consumer") {
    // Redirect if the user is not a student
    return <Navigate to="/NotFoundPage" />;
  }

  // If everything is fine, render child routes
  return children;
};

export default StudentProtectedRoute;
