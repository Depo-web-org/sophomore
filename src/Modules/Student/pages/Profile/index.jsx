import { HiUserCircle, HiClipboardList } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TiFlash } from "react-icons/ti";
import "./profile.css";
import OpseModels from "./components/Opse Models/OpseModel";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

function SideBarProfile(props) {
  return (
    <div
      className={`${props.Active}  flex flex-col bg-[#111827] w-1/5 border-r border-gray-500  z-10 gap-2 justify-start overflow-hidden   absolute items-start   h-full    px-2`}
    >
      <MdOutlineKeyboardDoubleArrowLeft
        onClick={() =>
          props.setActive(props.Active === "open" ? "close" : "open")
        }
        className={` lg:hidden mb-3 ms-auto  w-7 h-7 text-gray-500 transition-transform duration-300 ${
          props.Active === "open" ? "rotate-180" : ""
        }`}
      />

      <div className="flex flex-col gap-2 justify-between     ">
        <div className="flex flex-col gap-2 justify-start   ">
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
          onClick={() => props.setOpseModel(true)}
          className={`tab text-white mb-44 group p-2 w-full flex items-center gap-4 rounded-lg transition-all duration-500`}
        >
          <RiLogoutBoxLine className="w-6 h-6" />
          <button>Log out</button>
        </div>
      </div>
    </div>
  );
}

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
    <div className="mt-24   container md:w-custom-md  xl:w-custom-xl mx-auto relative flex  lg:gap-6  min-h-screen">
      <SideBarProfile
        Active={Active}
        setActive={setActive}
        setOpseModel={setOpseModel}
      ></SideBarProfile>
      {OpseModel && <OpseModels setOpseModel={setOpseModel} />}

      <div className="w-4/5 ml-auto lg:pl-8 xl:pl-0 ">
        <Outlet />
      </div>
    </div>
  );
}
