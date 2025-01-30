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
import { useGetProfileQuery } from "../../Redux/data/getDataApiSlice";
import { baseUrl } from "../../App";
 
 
const Navbar = () => {
  const { t } = useTranslation(); 
  const [btnIsBumbed, setBtnIsBumbed] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const dispatch = useDispatch();
  // Get User Information 
    const cartItemsNum = useSelector((state) => state.cart.items.length);


// sapan27862@ahaks.com
    useEffect(() => {
      if (cartItemsNum=== 0) {
        return;
      }
      setBtnIsBumbed(true);
  
      const timer = setTimeout(() => {
        setBtnIsBumbed(false);
      }, 300);
  
      return () => {
        clearTimeout(timer);
      };
    }, [cartItemsNum]);

  // const { data, error:dataerror, isFetching, refetch, isLoading:dataLoading } = useGetProfileQuery();

  const UserInformation= JSON.parse(localStorage.getItem('USER'))
const student= UserInformation?.data;
// console.log(student)
  
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
      { icon: <IoHeartOutline />, link: "/wishlist" },
    ];
    if (Token && role === "student") {
      // Add protected items only if authenticated as a student
      items.push(
        { text: t("header.menu.my_learning"), link: "/mylearning" },
        
        { icon: <IoCartOutline />, link: "/cart" },
       
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
  }, [dispatch]);




 


  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
   // change in Html 
     document.documentElement.setAttribute("lang", newLanguage);
     document.documentElement.setAttribute("dir", newLanguage === "ar" ? "rtl" : "ltr");
   // change in i18n Lang
     i18n.changeLanguage(newLanguage)
     .then(() => localStorage.setItem("language", newLanguage))
 };


 const handleCartClick = () => {
  if (!user) {
    navigate("/auth/login"); // Redirect to login if not authenticated
  } else {
    navigate("/cart"); // Go to cart if authenticated
  }
};


  return (
    <nav className="z-[9999] fixed top-4 w-full px-4 md:px-0">
      <div className="bg-white/20 shadow-black/10 backdrop-blur-[5px] border border-white/20 container w-full md:w-custom-md xl:w-custom-xl transition-all duration-300 h-16 mx-auto shadow-sm rounded-full flex items-center justify-between">
       <div className=" flex justify-center items-center  ">
       <Link to={"/"}>
          <div className="flex justify-start items-center pt-1 lg:ms-5 w-full ">
            <img
              src={logo}
              alt="logo"
              className="h-12 lg:h-8 w-auto hover:rotate-[360deg] duration-1000"
            />
            <p
              style={{ textShadow: "0px 5px 6px rgba(0, 0, 0, 0.25)" }}
              className="hidden lg:block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent text-xl lg:text-2xl font-bold ml-2"
            >
                  {t("footer.brand")}
              {/* Sophomore        */}
            </p>
          </div>
        </Link>
        <button
  
        onClick={toggleLanguage}
       >
       {i18n.language === "en" ?  <img src="/images/eg.png" alt="Arabic"  className="size-5 rounded-full mx-1"/>  : <img src="/images/en.png" alt="English"  className="size-5 rounded-full mx-1"/>}
        </button>
        </div>
        
        

        <div className="hidden md:flex items-center ms-5">
          <div className="w-auto text-white flex items-center gap-[-5px]">
          <ul className="flex gap-x-4 lg:gap-x-7 font-semibold">
  {navItems.map((item, index) => (
    <li key={index + item.text + item.link}>
      <NavLink
        to={item.link}
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
        }}
        className="text-white text-sm lg:text-base flex items-center justify-center"
      >
        {item.link === "/cart" ? (
          <button
            onClick={handleCartClick}
            className={`flex items-center gap-1 ${btnIsBumbed && "bump"}`}
          >
            <div className="relative">
              <IoCartOutline className="text-base md:text-2xl " />
              {cartItemsNum !== 0 && (
                <span className={`font-semibold absolute size-[14px] bg-white text-secondary rounded-full text-center flex items-center justify-center text-xs bottom-4 -right-1`}>
                  {cartItemsNum}
                </span>
              )}
            </div>
          </button>
        ) : (
          <span className="text-base md:text-2xl">{item.icon}</span>
        )}
        {item.text}
      </NavLink>
    </li>
  ))}
</ul>

            {Token && role === "student" && (
              <Link
                to={"/profile"}
                className="ms-3    border-gray-300 shadow-inner relative"
              >
                <img
                 src={student?.photo? `${baseUrl}${student?.path}${student?.photo}`:"data:image/png;base64,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"}
                  alt="profile avatar"
                  className="size-8 object-cover rounded-full border"
                />
                <div  className="bg-green-400 size-3 absolute bottom-0 z-10 rounded-full "/>
              </Link>
            )}


            {!Token && (
              <button
                onClick={() => navigate("/register")}
                className="bg-primary py-2 px-8 rounded-full font-semibold hover:bg-secondary transition-all duration-200 ms-8 text-white"
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
            className="md:hidden absolute top-16 left-1/2 -translate-x-1/2  bg-white backdrop-blur-[5px] border border-white/20 shadow-md rounded-2xl mt-2 py-4 px-6 w-5/6 z-[9999]"
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
                className=" font-semibold text-primary flex items-end gap-2 relative "
              >
                <img
                  src={student?.photo? `${baseUrl}${student?.path}${student?.photo}`:"data:image/png;base64,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"}
                  alt="profile avatar"
                  className="size-8 object-cover rounded-full"
                />
              
                {t("header.menu.profile")}
                <div  className="bg-green-400 size-3 absolute bottom-0 z-10 rounded-full "/>

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