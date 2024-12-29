import { HiUserCircle, HiClipboardList } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TiFlash } from "react-icons/ti";
import "./profile.css";
import OpseModels from "./components/Opse Models/OpseModel";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Profile() {
  const [Active, setActive] = useState("close");
  const [OpseModel, setOpseModel] = useState(false);

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
    <div className="pt-24  container md:w-custom-md xl:w-custom-xl mx-auto relative flex gap-6 overflow-x-hidden ">
      <div
        className={`${Active} flex flex-col bg-[#111827] z-50 gap-2 justify-start overflow-hidden items-start border-r h-screen border-gray-500 px-2`}
      >
        <MdOutlineKeyboardDoubleArrowLeft
          onClick={() => setActive(Active === "open" ? "close" : "open")}
          className={` lg:hidden mb-3 ms-auto w-7 h-7 text-gray-500 transition-transform duration-300 ${
            Active === "open" ? "rotate-180" : ""
          }`}
        />

        <div className="flex flex-col gap-2 justify-between h-full">
          <div className="flex flex-col gap-2 justify-start">
            <NavLink
              to="myprofile"
              className={({ isActive }) =>
                `tab group p-3 w-full flex items-center gap-3 rounded-lg transition-all duration-500 ${
                  isActive
                    ? "text-black bg-white"
                    : "text-white hover:bg-white hover:text-black"
                }`
              }
            >
              <HiUserCircle className="w-6 h-6" />
              <span className="text-sm sm:text-lg">Profile</span>
            </NavLink>

            <NavLink
              to="security"
              className={({ isActive }) =>
                `tab group p-3 w-full flex items-center gap-3 rounded-lg transition-all duration-500 ${
                  isActive
                    ? "text-black bg-white"
                    : "text-white hover:bg-white hover:text-black"
                }`
              }
            >
              <HiClipboardList className="w-6 h-6" />
              <span className="text-sm sm:text-lg">Security</span>
            </NavLink>

            <NavLink
              to="subscriptions"
              className={({ isActive }) =>
                `tab group p-3 w-full flex items-center gap-3 rounded-lg transition-all duration-500 ${
                  isActive
                    ? "text-black bg-white"
                    : "text-white hover:bg-white hover:text-black"
                }`
              }
            >
              <FaRegHeart className="w-6 h-6" />
              <span className="text-sm sm:text-lg">Subscriptions</span>
            </NavLink>
          </div>
          <div
            onClick={() => setOpseModel(true)}
            className={`tab text-white mb-44 group p-2 w-full flex items-center gap-4 rounded-lg transition-all duration-500`}
          >
            <RiLogoutBoxLine className="w-6 h-6" />
            <button>Log out</button>
          </div>
        </div>
      </div>

      {OpseModel && <OpseModels setOpseModel={setOpseModel} />}

      <div className="pb-8 w-full absolute pl-14 lg:pl-[255px]  ">
        <Outlet />
      </div>
    </div>
  );
}
