import logo from "../../../public/logos/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { useMemo, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { useAuth } from "../../ProtectedRoutes/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Access authentication state from context

  // Define nav items, some will be conditionally shown based on authentication
  const navItems = useMemo(() => {
    const items = [
      { text: `Home`, link: "/" },
      { text: `About Us`, link: "/about" },
      { text: `Contact Us`, link: "/contact" },
    ];

    if (isAuthenticated) {
      // Add protected items only if authenticated
      items.push(
        { text: "My Learning", link: "/mylearning" },
        { text: "Profile", link: "/profile" },
        { icon: <IoCartOutline />, link: "/cart" },
        { icon: <IoHeartOutline />, link: "/wishlist" }
      );
    }

    return items;
  }, [isAuthenticated]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="z-50 fixed top-4 w-full px-4 md:px-0">
      <div className="bg-white/20 shadow-black/10 backdrop-blur-[5px] border border-white/20 container w-full md:w-custom-md xl:w-custom-xl  transition-all duration-300 h-16 mx-auto shadow-sm rounded-full flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex justify-start items-center pt-1 ml-5 w-full">
            <img src={logo} alt="logo" className="h-8 w-auto" />
            <p className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent text-xl lg:text-2xl font-bold ml-2">
              Sophomore
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center mr-5">
          <div className="w-auto text-white flex items-center gap-[-5px]">
            <ul className="flex gap-x-[14px] lg:gap-x-7 font-semibold">
              {navItems.map((item, index) => (
                <li key={index + item.text + item.link}>
                  <NavLink
                    to={item.link}
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)" }}
                    className="text-white text-sm lg:text-base flex items-center justify-center "
                  >
                    <span className="text-base md:text-lg"> {item.icon}</span>
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            {!isAuthenticated && (
              <button
                onClick={() => navigate("/register")}
                className="bg-primary py-2 px-6 rounded-md font-semibold hover:bg-secondary transition-all duration-200 ml-8 text-white"
              >
                Login
              </button>
            )}
          </div>
        </div>
        <button onClick={toggleMenu} className="md:hidden mr-5 text-primary">
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 right-0 bg-white backdrop-blur-[5px] border border-white/20 shadow-md rounded-lg mt-2 py-4 px-6 w-5/6  ">
          <ul className="flex flex-col gap-y-4 font-semibold">
            {navItems.map((item, index) => (
              <li key={index + item.text + item.link}>
                <NavLink
                  to={item.link}
                  className="text-primary block"
                  onClick={toggleMenu}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
          {!isAuthenticated && (
            <button
              onClick={() => navigate("/register")}
              className="bg-primary py-2 px-6 rounded-md font-semibold hover:bg-secondary transition-all duration-200 text-white mt-4 w-full"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
