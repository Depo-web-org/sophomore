import React from "react";
import logo from "../../../public/logos/logo.svg";
import { Link } from "react-router-dom";
import "../../Components/Navbar/Navbar";

const NavbarTeacher = () => {
  return (
    <nav className="z-50 fixed top-4 w-full px-4 md:px-0 ">
      <div className="flex justify-center items-center bg-white/20 shadow-black/10  backdrop-blur-[5px] border border-white/20 container w-full md:w-custom-md xl:w-custom-xl  transition-all duration-300 h-16 mx-auto shadow-sm rounded-full  ">
        <Link to={"/"}>
          <div className="pt-2 lg:ml-5 w-full flex">
            <img src={logo} alt="logo" className=" h-12 lg:h-8 w-auto" />
            <p className=" hidden lg:block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent text-xl lg:text-2xl font-bold ml-2">
              Sophomore
            </p>
          </div>
        </Link>
 
      </div>
    </nav>
  );
};

export default NavbarTeacher;
