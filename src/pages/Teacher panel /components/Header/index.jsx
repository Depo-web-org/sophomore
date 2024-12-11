import { Link, useLocation } from "react-router-dom";
import LogoIcon from "/logos/logo.svg";
import DropdownUser from "./DropdownUser";
import { BsMenuUp } from "react-icons/bs";
import { RiMenu4Line, RiMenuLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

const Header = (props) => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 ">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden  ">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-[99999] block  bg-white p-1.5   lg:hidden"
          >
<HiMenu className=" text-primary text-2xl " />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden " to="/teacherPanel">
            <img src={LogoIcon} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block ">
          <p className="text-gradient  text-xl lg:text-2xl font-bold ml-2 capitalize">
            {pathname.length === 1 ? "Dashboard" : pathname[pathname.length - 1]}
          </p>
        </div>

        {/* <!-- User Area --> */}
        <div className="flex items-center gap-3  ">
          <DropdownUser />
        </div>
        {/* <!-- User Area --> */}
      </div>
    </header>
  );
};

export default Header;