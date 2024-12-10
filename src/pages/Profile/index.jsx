import { HiUserCircle, HiClipboardList } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { TiFlash } from "react-icons/ti";
import "./profile.css";
import { MdOutlineLogout } from "react-icons/md";
export default function Profile() {
  const [Active, setActive] = useState("close");

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 640px)").matches;
      setActive(isLargeScreen ? "open" : "close");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pt-24 container flex gap-6">
      <div
        className={`${Active} flex flex-col justify-start overflow-hidden items-start border-r h-screen border-gray-200`}
      >
        <TiFlash
          onClick={() => setActive(Active === "open" ? "close" : "open")}
          className={`mb-3 ms-auto w-7 h-7 text-red-500 custom-rotate-x `}
        />

        <NavLink
          to="myprofile"
          className={({ isActive }) =>
            `tab p-3 flex items-center gap-3 border-b border-transparent rounded-t-lg transition-all duration-300 ${
              isActive
                ? "text-primary border-blue-900 bg-secondaryBg"
                : "text-gray-500"
            } hover:text-primary hover:border-blue-900 hover:bg-secondaryBg`
          }
        >
          <HiUserCircle className="w-6 h-6" />
          <span className="text-sm sm:text-lg">Profile</span>
        </NavLink>

        <NavLink
          to="security"
          className={({ isActive }) =>
            `tab p-3 flex items-center gap-3 border-b border-transparent rounded-t-lg transition-all duration-300 ${
              isActive
                ? "text-primary border-blue-900 bg-secondaryBg"
                : "text-gray-500"
            } hover:text-primary hover:border-blue-900 hover:bg-secondaryBg`
          }
        >
          <HiClipboardList className="w-6 h-6" />
          <span className="text-sm sm:text-lg">Security</span>
        </NavLink>

        <NavLink
          to="subscriptions"
          className={({ isActive }) =>
            `tab p-3 flex items-center gap-3 border-b border-transparent rounded-t-lg transition-all duration-300 ${
              isActive
                ? "text-primary border-blue-900 bg-secondaryBg"
                : "text-gray-500"
            } hover:text-primary hover:border-blue-900 hover:bg-secondaryBg`
          }
        >
          <FaRegHeart className="w-6 h-6" />
          <span className="text-sm sm:text-lg">Subscriptions</span>
        </NavLink>

        <NavLink
          to="myprofile"
          className={({ isActive }) =>
            `relative top-72 lg:top-96 p-3 flex items-center gap-3 border-b border-transparent rounded-t-lg transition-all duration-300 ${
              isActive
                ? "text-primary border-blue-900 bg-secondaryBg"
                : "text-gray-500"
            } hover:text-primary hover:border-blue-900 hover:bg-secondaryBg`
          }
        >
          <MdOutlineLogout className="w-6 h-6" />
          <span>Logout</span>
        </NavLink>
      </div>

      <div className="pb-8 w-[calc(100%-30px)] lg:w-[calc(100%-232px)] ">
        <Outlet />
      </div>
    </div>
  );
}
