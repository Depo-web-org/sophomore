import { HiUserCircle, HiClipboardList } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { TiFlash } from "react-icons/ti";
import "./profile.css";
export default function Profile() {
  const [Active, setActive] = useState("close");

  return (
    <div className=" pt-24 container flex gap-8">
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
          <span>Profile</span>
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
          <span>security</span>
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
          <span>subscriptions</span>
        </NavLink>
      </div>

      <div className="py-8 w-[calc(100%-232px)]">
        <Outlet />
      </div>
    </div>
  );
}
