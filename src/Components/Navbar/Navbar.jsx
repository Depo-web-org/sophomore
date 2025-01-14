import logo from "/images/logos/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useMemo, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInformation } from "../../Redux/ UserInformation/ UserInformationSlice";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
 
const Navbar = () => {
  const { t } = useTranslation(); 

  const dispatch = useDispatch();
  // Get User Information 
  const { data, status, error } = useSelector((state) => state.userInformation);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const Token= localStorage.getItem('Token');

  const { role } = useSelector((state) => state.role);

  const navItems = useMemo(() => {
    const items = [
      { text: t("header.menu.home"), link: "/" },
      { text: t("header.menu.about_us"), link: "/about" },
      { text: t("header.menu.contact_us"), link: "/contact" },
    ];
    if (Token && role === "student") {
      // Add protected items only if authenticated as a student
      items.push(
        { text: t("header.menu.my_learning"), link: "/mylearning" },
        { icon: <IoCartOutline />, link: "/cart" },
        { icon: <IoHeartOutline />, link: "/wishlist" }
      );
    } else if (Token && role !== "student") {
      items.push({ text: t("header.menu.dashboard"), link: "/teacherupload" });
    }
    return items;
  }, [Token, role,t]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUserInformation());
    }
  }, [dispatch, status]);




 


  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
   // change in Html 
     document.documentElement.setAttribute("lang", newLanguage);
     document.documentElement.setAttribute("dir", newLanguage === "ar" ? "rtl" : "ltr");
   // change in i18n Lang
     i18n.changeLanguage(newLanguage)
     .then(() => localStorage.setItem("language", newLanguage))
 };






  return (
    <nav className="z-[9999] fixed top-4 w-full px-4 md:px-0">
      <div className="bg-white/20 shadow-black/10 backdrop-blur-[5px] border border-white/20 container w-full md:w-custom-md xl:w-custom-xl transition-all duration-300 h-16 mx-auto shadow-sm rounded-full flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex justify-start items-center pt-1 lg:ml-5 w-full">
            <img
              src={logo}
              alt="logo"
              className="h-12 lg:h-8 w-auto hover:rotate-[360deg] duration-1000"
            />



            <p
              style={{ textShadow: "0px 5px 6px rgba(0, 0, 0, 0.25)" }}
              className="hidden lg:block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent text-xl lg:text-2xl font-bold ml-2"
            >
              Sophomore       

            </p>

        <button
        className="text-secondary ps-1 font-bold text-[24px] z-40 leading-[29.05px] "
        onClick={toggleLanguage}
       >
       {i18n.language === "en" ?  "  ع "  :"En"}
        </button>



          </div>
        </Link>

        <div className="hidden md:flex items-center mr-5">
          <div className="w-auto text-white flex items-center gap-[-5px]">
            <ul className="flex gap-x-[14px] lg:gap-x-7 font-semibold">
              {navItems.map((item, index) => (
                <li key={index + item.text + item.link}>
                  <NavLink
                    to={item.link}
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
                    }}
                    className="text-white text-sm lg:text-base flex items-center justify-center"
                  >
                    <span className="text-base md:text-2xl">{item.icon}</span>
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            {Token && role === "student" && (
              <Link
                to={"/profile"}
                className="ml-3 overflow-hidden rounded-full border border-gray-300 shadow-inner"
              >
                <img
                  src={data?.profile}
                  alt="profile avatar"
                  className="size-8 object-cover"
                />
              </Link>
            )}

            {!Token && (
              <button
                onClick={() => navigate("/register")}
                className="bg-primary py-2 px-8 rounded-full font-semibold hover:bg-secondary transition-all duration-200 ml-8 text-white"
              >
              {t("header.menu.login")}
              </button>
            )}
          </div>
        </div>
        <button
          onClick={(e) => {
            toggleMenu();
            e.stopPropagation();
          }}
          className="md:hidden mr-5 text-white"
        >
          {isMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 right-0 bg-white backdrop-blur-[5px] border border-white/20 shadow-md rounded-2xl mt-2 py-4 px-6 w-5/6 z-[9999]"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
          >
            <ul className="flex flex-col gap-4 font-semibold ">
              {navItems.map((item, index) => (
                <li key={index + item.text + item.link}>
                  <NavLink
                    onClick={toggleMenu}
                    to={item.link}
                    className="text-primary hover:text-secondary duration-150 transition-all block"
                  >
                                     <span className="text-base flex items-center gap-2">
                    {item.icon}{" "}
                    {item.link === "/cart"
                      ? t("header.menu.cart")
                      : item.link === "/wishlist"
                      ?  t("header.menu.wishlist")
                      : ""}
                  </span>
                  {item.text}
                </NavLink>
              </li>
            ))}
            {Token && role === "student" && (
              <NavLink
                to={"/profile"}
                onClick={toggleMenu}
                className=" font-semibold text-primary flex items-end gap-2"
              >
                <img
                   src={data?.profile}
                  alt="profile avatar"
                  className="size-8 object-cover rounded-full"
                />
                {t("header.menu.profile")}
              </NavLink>
            )}
          </ul>
          {!Token && (
            <button
              onClick={() => navigate("/register")}
              className="bg-primary py-2 px-6 rounded-md font-semibold hover:bg-secondary transition-all duration-200 text-white mt-4 w-full"
            >
              {t("header.menu.login")}
            </button>
          )}
        </div>
          {/* Overlay */}
          <div
            onClick={() => setIsMenuOpen(false)} 
            className="fixed inset-0 z-[9998]"
          ></div>
        </>
      )}
    </nav>
  );
};

export default Navbar;