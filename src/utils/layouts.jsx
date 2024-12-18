import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import Sidebar from "../Modules/Teacher/components/Sidebar";
import Header from "../Modules/Teacher/components/Header";
import NavbarTeacher from "../Components/NavBarTeacher/NavbarTeacher";
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



 

// PublicLayout.js
const NavTeacher = () => {
  return (
    <>
      <NavbarTeacher/>
      <Outlet />
      <Footer />
    </>
  );
};








export { AuthLayout, DashboardLayout, PublicLayout,NavTeacher };
