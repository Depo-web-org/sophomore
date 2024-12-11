import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "/logos/logo.svg";
import { HiHome } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

const menuItems = [
  {
    label: "Dashboard",
    to: "/teacherPanel",
    icon: <HiHome className="mb-1 text-2xl" />,
  },
  {
    label: "Courses",
    to: "/Courses",
    icon: <FaBook className="mb-1 text-2xl" />,
  },
  {
    label: "Students",
    to: "/Students",
    icon: <IoIosPeople className="mb-1 text-2xl" />,
  },
  {
    label: "Profile",
    to: "/profile",
    icon: <IoPersonSharp className="mb-1 text-2xl" />,
  },
];

function SideBarHeader() {
  return (
    <div className="  flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <NavLink to="/" className=" py-3 flex items-center justify-center">
        <img src={Logo} alt="Logo" />
        <p className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent text-xl lg:text-2xl font-bold ml-2">
          Sophomore
        </p>
      </NavLink>
    </div>
  );
}



const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5
         flex-col overflow-y-hidden bg-white duration-300 ease-linear 
          lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
    >
      {/* <!-- SIDEBAR HEADER which Have logo --> */}
      <SideBarHeader/>
      {/* <!-- SIDEBAR HEADER which Have logo --> */}

      {/* Items  */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear  mt-1">
        {/* <!-- Sidebar Menu --> */}


        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6 ">


          <div>
            <ul className="mb-6 flex flex-col gap-5">
            {menuItems.map((item, index) => (
        <li key={index}>
        <Link
          to={item.to}
          className={`group  relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium  duration-300 ease-in-out  ${
            pathname.includes(item.to.slice(1))
              ? "bg-primary text-white"
              : "text-[#4B5563] "
          }
          `}
        >
          {item.icon}
          {item.label}
        </Link>
    </li>
))}
            </ul>
          </div>



        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
