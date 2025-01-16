import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "/images/logos/logo.svg";

const SideBarHeader = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 ">
      <Link
        to="/teacherPanel"
        className="py-3 flex items-center justify-center"
      >
        <img src={Logo} alt="Logo" />
        <p className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent text-xl lg:text-2xl font-bold ml-2">
          Sophomore
        </p>
      </Link>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="block lg:hidden text-gray-500 hover:text-gray-700"
      >
        <IoCloseSharp className=" text-primary text-2xl " />
      </button>
    </div>
  );
};

export default SideBarHeader;
