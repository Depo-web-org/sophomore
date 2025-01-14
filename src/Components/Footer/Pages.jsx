import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "/images/logos/logo.svg";

export default function Pages() {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <>
      <div className="flex justify-center w-1/5 lg:justify-start items-center">
        <img src={logo} alt={t("footer.brand")} className="ml-5" />
      </div>
      <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
        <li>
          <Link to="/" className="text-white transition hover:opacity-75">
            {t("footer.menu.home")}
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white transition hover:opacity-75">
            {t("footer.menu.about_us")}
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white transition hover:opacity-75">
            {t("footer.menu.contact_us")}
          </Link>
        </li>
      </ul>
    </>
  );
}
