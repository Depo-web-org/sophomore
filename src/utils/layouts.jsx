import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

// AuthLayout.js
const AuthLayout = () => {
  return <Outlet />;
};

// DashboardLayout.js
const DashboardLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

// PublicLayout.js
const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export { AuthLayout, DashboardLayout, PublicLayout };
