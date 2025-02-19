import React, { useState } from "react";
import logo from "/images/logos/logo.svg";
import { Link } from "react-router-dom";
import "../../Components/Navbar/Navbar";
import { IoExitOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import LogoutModal from "../../Modules/Student/pages/Profile/components/Security/LogoutModal";

const NavbarTeacher = () => {
    const { i18n, t } = useTranslation(); // Get the i18n instance and t function
    const [LogOutState, setLogOutState] = useState(false);
  const isRTL = i18n.language === "ar"; // Check if the current language is Arabic

  return (
   <>
    <nav className="z-50 fixed top-4 w-full px-4 md:px-0 ">
      <div className="flex justify-between  items-center bg-white/20 shadow-black/10  backdrop-blur-[5px] border border-white/20 container w-full md:w-custom-md xl:w-custom-xl  transition-all duration-300 h-16 mx-auto shadow-sm rounded-full  ">
        <Link to={"/"}>
          <div className="pt-2 lg:ml-5 w-full flex">
            <img src={logo} alt="logo" className=" h-12 lg:h-8 w-auto" />
            <p className=" hidden lg:block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent text-xl lg:text-2xl font-bold ml-2">
              Sophomore
            </p>
          </div>
        </Link>
         <div
                  onClick={() => setLogOutState(!LogOutState)}
                  className={` group p-2   flex items-center gap-2 rounded-lg transition-all duration-500 px-8 lg:px-12 text-white font-semibold text-lg`}
                >
                  <button>
                    <IoExitOutline className={`w-6 h-6 inline ${isRTL ? "rotate-0" : "rotate-180"}`} />
                    <span className="ms-3">
                      {t("sidebar.logout")} {/* Translated label */}
                    </span>
                  </button>
                </div>
      </div>
    </nav>
    <div className="bg-emerald-600">
        {LogOutState && <LogoutModal setOpseModel={setLogOutState} />}
      </div>
   </>
  );
};

export default NavbarTeacher;
