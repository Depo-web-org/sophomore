import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context for auth
const AuthContext = createContext();

// AuthProvider to wrap around your App and provide auth state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate checking authentication (this can be replaced with actual backend logic later)
  useEffect(() => {
    // For now, let's assume the user is not authenticated
    const user = localStorage.getItem("user"); // Or use some other method to check
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify({}));
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// A hook to use the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
