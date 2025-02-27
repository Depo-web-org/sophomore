import ContactFooter from "./ContactFooter";
import Social from "./Social";
import Pages from "./Pages";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <footer className="bg-dark">
        <div className="container w-full md:w-custom-md xl:w-custom-xl mx-auto px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <ContactFooter />

          <div
            className={`mt-16 border-t border-gray-100 pt-8  flex items-center justify-between flex-col gap-y-4 md:flex-row lg:mt-24 `}
          >
            <Pages />
            <Social />
          </div>
          <br />
          <hr />
        </div>

        <div
          className={`${
            i18n.language === "en"
              ? "flex-col sm:flex-row items-center justify-center "
              : "flex-row-reverse  justify-center"
          }  relative flex gap-2 py-5 text-gray-300 `}
        >
          <img src="/images/lOGO.svg" className="w-7 h-4" alt="logo" />
          <p className="text-center sm:text-left font-normal text-xs">
            {t("footer.rights-title")}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
