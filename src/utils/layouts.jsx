import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import Sidebar from "../pages/Teacher panel /components/Sidebar";
import Header from "../pages/Teacher panel /components/Header";

// AuthLayout.js
const AuthLayout = () => {
  return <Outlet />;
};

// DashboardLayout.js
const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="bg-[#F8F9FA]">
          <Outlet />
        </main>
      </div>
    </div>
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
