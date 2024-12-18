import { useEffect, useRef } from "react";
import { Link,  useLocation } from "react-router-dom";

import { HiHome } from "react-icons/hi";
import { FaBook, FaLocationArrow } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoCloseSharp, IoPersonSharp } from "react-icons/io5";
import SideBarHeader from "./Components/SideBarHeader";


const menuItems = [
  {
    label: "Dashboard",
    to: "/teacherPanel",
    icon: <HiHome className="mb-1 text-2xl" />,
  },
  {
    label: "Courses",
    to: "/teacherPanel/courses",
    icon: <FaBook className="mb-1 text-2xl" />,
  },
  {
    label: "Students",
    to: "/teacherPanel/students",
    icon: <IoIosPeople className="mb-1 text-2xl" />,
  },
  {
    label: "Profile",
    to: "/teacherPanel/profile",
    icon: <IoPersonSharp className="mb-1 text-2xl" />,
  },
];



const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target)
      ) {
        return;
      }
      setSidebarOpen(false);
    };

    const triggerHandler = (e) => {
      if (trigger.current && trigger.current.contains(e.target)) {
        e.stopPropagation();
      }
    };

    document.addEventListener("click", clickHandler);
    document.addEventListener("click", triggerHandler, true);
    return () => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("click", triggerHandler, true);
    };
  }, [sidebarOpen, setSidebarOpen]);

  // Close if the Esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    
  <>
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-[9999] flex h-screen w-72.5
        flex-col overflow-y-hidden bg-white duration-300 ease-linear 
        lg:static lg:translate-x-0 
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`
        }
    >

      {/* Sidebar Header with Logo */}
      <SideBarHeader trigger={trigger} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar Items */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear mt-1">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <ul onClick={() => setSidebarOpen(false)}  className="mb-6 flex flex-col gap-5">
   
            {menuItems.map((item, index) => (
              
              <li key={index}>
               <Link
                    to={item.to}
                    className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium duration-300 ease-in-out ${
                    
                      pathname.slice("/teacherPanel".length).split("/")[1] ===  item.to.split('/')[2]  ? "bg-primary text-white"   : "text-mainGray"
                    }`}
                  >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </aside>
             <div  onClick={() => setSidebarOpen(false)} className={`absolute top-0 left-0 z-[9998]  ${sidebarOpen ? " w-full translate-x-0" : "-translate-x-full"     }   h-full `}> </div>
  </>
  );
};

export default Sidebar;
