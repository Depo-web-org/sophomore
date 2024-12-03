import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

// AuthLayout.js
const AuthLayout = () => {
  return <Outlet />;
};

// DashboardLayout.js
const DashboardLayout = () => {
  return <Outlet />;
};

// PublicLayout.js
const PublicLayout = () => {
  return (
    <>
    <Navbar/>
      <Outlet />
    </>
  );
};

export { AuthLayout, DashboardLayout, PublicLayout };
