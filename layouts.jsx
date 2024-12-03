import { Outlet } from "react-router-dom";

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
      <Outlet />
    </>
  );
};

export { AuthLayout, DashboardLayout, PublicLayout };
