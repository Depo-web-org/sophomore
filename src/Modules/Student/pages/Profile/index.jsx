import { HiUserCircle, HiClipboardList } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./profile.css";
import LogoutModal from "./components/Security/LogoutModal";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import useFetch from "../../../../Hooks/UseFetch";
import { useTranslation } from "react-i18next";

function SideBarProfile(props) {
  const { t} = useTranslation();

  return (
    <div
      className={`${props.Active}  flex flex-col bg-[#111827] border-r border-gray-500  z-10 gap-2 justify-start overflow-hidden absolute items-start h-full px-2`}
    >
      <MdOutlineKeyboardDoubleArrowLeft
        onClick={() =>
          props.setActive(props.Active === "open" ? "close" : "open")
        }
        className={` mb-3 ms-auto  w-7 h-7 text-gray-500 transition-transform duration-300 ${
          props.Active === "open" ?  "" :"rotate-180" 
        }`}
      />

      <div className="flex flex-col gap-2 justify-between h-full w-48">
        <div className="flex flex-col gap-2 justify-start   ">


          <NavLink
            to="myprofile"
            className={({ isActive }) =>
              `tab group p-3 w-full flex items-center gap-3 rounded-lg transition-all duration-500 ${
                isActive
                  ? "text-black bg-white  "
                  : "text-white hover:bg-white hover:text-black "
              }`
            }
          >
            <HiUserCircle className="w-6 h-6" />
            <span className="text-sm sm:text-lg">{t("navbar_profile.profile")}</span>
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
            <span className="text-sm sm:text-lg">{t("navbar_profile.security")}</span>
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
            <span className="text-sm sm:text-lg  ">{t("navbar_profile.subscriptions")}</span>
          </NavLink>



        </div>
        <div
          onClick={() => props.setOpseModel(true)}
          className={`tab text-white mb-44 group p-2 w-full flex items-center gap-4 rounded-lg transition-all duration-500`}
        >
          <RiLogoutBoxLine className="w-6 h-6" />
          <button>{t("navbar_profile.logout")}</button>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  const {  i18n} = useTranslation();

  const [Active, setActive] = useState("close");
  const [OpseModel, setOpseModel] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 640px)").matches;
      setActive(isLargeScreen ?  "close" :"open" );
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
      {OpseModel && <LogoutModal setOpseModel={setOpseModel} />}

      <div className={`w-4/5 ml-auto lg:pl-8 xl:pl-0  ${i18n.language ===  "ar" ?  "ms-auto" :"me-auto"}`}>
        <Outlet />
      </div>
    </div>
  );
}
