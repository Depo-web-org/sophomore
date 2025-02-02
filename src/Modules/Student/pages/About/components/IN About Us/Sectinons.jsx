import { useEffect } from "react";
import Aos from "aos";
import { useTranslation } from "react-i18next";

export default function Sectinons() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section>
      {/* item 1 */}
      <div className="relative overflow-hidden">
        <img
          className="w-full min-h-96 object-cover"
          src="/images/About Us/header1.jpg"
          alt="img header1"
        />
        <div
          data-aos="fade-down"
          className="absolute inset-0 pt-28 lg:pt-[15%] px-[3%] lg:px-[24%] text-center text-white font-semibold "
        >
          <span className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
            {t("aboutUs.title")}
          </span>
          <p className="text-sm lg:text-lg pt-5 lg:pt-10 ">
            <span className=" bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
              {t("aboutUs.subtext")}
            </span>
            {t("aboutUs.description")}
          </p>
        </div>
      </div>

      {/* item 2 */}
      <div className="relative overflow-hidden italic ">
        <img
          className="w-full min-h-96 object-cover"
          src="/images/About Us/header2.svg"
          alt="img header2"
        />
        <div
          data-aos={i18n.language ===  "ar" ? "fade-left" :"fade-right"}
          className={`w-[85%] sm:w-[45%] ${ i18n.language ===  "ar" ?"ms-auto":"me-auto "} absolute inset-0 pt-[20%] sm:pt-[10%] pl-[5%] text-left text-white font-medium `}
        >
          <span
            className={` ${
              i18n.language === "ar" ? "flex justify-start p-5 " : ""
            } text-3xl lg:text-5xl bg-gradient-to-r from-sky-600 to-red-400 bg-clip-text text-transparent`}
          >
            {t("mission.title")}
          </span>
          <p
            className={`text-sm sm:text-lg pt-3 text-gray-400 ${
              i18n.language === "ar" ? "text-right ps-5" : ""
            } `}
          >
            {t("mission.description")}
          </p>
        </div>
      </div>

      {/* item 3 */}
      <div className="relative overflow-hidden">
        <img
          className="w-full min-h-96 object-cover"
          src="/images/About Us/header3.svg"
          alt="img header3"
        />
        <div
          data-aos={i18n.language ===  "ar" ? "fade-right":"fade-left"}
          className="w-[80%] sm:w-[45%] italic absolute inset-y-0 right-0 mt-[20%] sm:mt-[10%] pr-[5%] text-white font-medium"
        >
          <span
            className={`${
              i18n.language === "ar" ? "flex justify-start p-5 " : ""
            }  text-3xl lg:text-5xl bg-gradient-to-r from-red-500 to-sky-400 bg-clip-text text-transparent`}
          >
            {t("vision.title")}
          </span>
          <p className="text-sm sm:text-lg pt-3 text-gray-400">
            {t("vision.description")}
          </p>
        </div>
      </div>

      {/* item 4 */}
      <div className="relative overflow-hidden">
        <img
          className="w-full min-h-96 object-cover"
          src="/images/About Us/header4.svg"
          alt="img header4"
        />
        <div
          data-aos={i18n.language ===  "ar" ? "fade-left":"fade-right"}

          className={`italic w-full lg:w-[45%]  ${i18n.language ===  "ar" ? "ms-auto":""} absolute inset-0 pt-[23%] sm:pt-[10%] pl-[5%] text-left font-medium`}
        >
          <span
            className={`text-3xl lg:text-5xl bg-gradient-to-r from-sky-500 to-red-400 bg-clip-text text-transparent ${
              i18n.language === "ar" ? "flex justify-start ps-10 pb-5" : ""
            }`}
          >
            {t("coreValues.title")}
          </span>
          <p
            className={`text-sm sm:text-lg pt-3 text-gray-500 ${
              i18n.language === "ar" ? "rtl text-right p-8" : ""
            }`}
          >
            <span className="block">{t("coreValues.values.0")}</span>
            <span
              className={`pl-8 block ${i18n.language === "ar" ? "pr-8" : ""}`}
            >
              {t("coreValues.values.1")}
            </span>
            <span
              className={`pl-14 block ${i18n.language === "ar" ? "pr-14" : ""}`}
            >
              {t("coreValues.values.2")}
            </span>
            <span
              className={`pl-20 block ${i18n.language === "ar" ? "pr-20" : ""}`}
            >
              {t("coreValues.values.3")}
            </span>
            <span
              className={`pl-28 block ${i18n.language === "ar" ? "pr-24" : ""}`}
            >
              {t("coreValues.values.4")}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
