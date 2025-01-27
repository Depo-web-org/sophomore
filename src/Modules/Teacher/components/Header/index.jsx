import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import DropdownUser from "./DropdownUser";
import Logo from "/images/logos/logo.svg";
import { useGetProfileQuery } from "../../../../Redux/data/getDataApiSlice";
import i18n from "../../../../i18n";
import { useTranslation } from "react-i18next";


const Header = (props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);
  const {
    data,
    error: dataerror,
    isFetching,
    refetch,
    isLoading: dataLoading,
  } = useGetProfileQuery();
  console.log('data profile:', data?.data);
  const student = data?.data;
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    // change in Html
    document.documentElement.setAttribute("lang", newLanguage);
    document.documentElement.setAttribute(
      "dir",
      newLanguage === "ar" ? "rtl" : "ltr"
    );
    // change in i18n Lang
    i18n
      .changeLanguage(newLanguage)
      .then(() => localStorage.setItem("language", newLanguage));
  };

  const { i18n } = useTranslation();
  return (
    <header className="sticky top-0 z-[999] flex w-full bg- white drop-shadow-1 bg-white   ">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11 bge">
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
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="hidden lg:block">
          <p className="text-gradient text-xl lg:text-2xl font-bold ml-2">
            {pathname.length === 1
              ? t("sidebar.dashboard")
              : t(`sidebar.${pathname[1]}`)}
          </p>
        </div>
        {/* <!-- User Area --> */}
        <div className="flex items-center gap-3   ">
          <DropdownUser />

        </div>
        <button onClick={toggleLanguage}>
          {i18n.language === "en" ? (
            <img
              src="/images/eg.png"
              alt="Arabic"
              className="size-5 rounded-full mx-1"
            />
          ) : (
            <img
              src="/images/en.png"
              alt="English"
              className="size-5 rounded-full mx-1"
            />
          )}
        </button>
        {/* <!-- User Area --> */}
      </div>
    </header>
  );
};

export default Header;
