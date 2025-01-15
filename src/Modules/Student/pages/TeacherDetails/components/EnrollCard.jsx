import { useState } from "react";
import ModalPackages from "./ModalPackages";
import ModalOops from "./ModalOops";
import { ModalUnits } from "./ModalUnits";
import { useTranslation } from "react-i18next";

export default function EnrollCard() {
  const { t } = useTranslation();
  const [isModalOopsOpen, setIsModalOopsOpen] = useState(false);
  const [isModalPackagesOpen, setIsModalPackagesOpen] = useState(false);
  const [isModalUnitsOpen, setIsModalUnitsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalUnitsOpen(false);
    setIsModalPackagesOpen(false);
    setIsModalOopsOpen(true);
  };

  const handleUnitsPackages = () => {
    setIsModalPackagesOpen(false);
    setIsModalUnitsOpen(true);
  };
  const handleModalPackages = () => {
    setIsModalPackagesOpen(true);
  };

  return (
    <>
      <div className=" md:min-w-[376px] lg:min-h-[406px] bg-slate-600 bg-opacity-25 border border-slate-700 rounded-lg flex flex-col justify-start items-start gap-2 p-4 shadow-[4px_4px_0px_0px_#F15C54] mb-6">
        <p className="text-base lg:text-lg font-semibold lg:leading-[27px] text-primary">
        {t('course_title')}
        </p>
        <p className=" text-sm lg:text-base  lg:pt-3 font-normal lg:leading-[18.75px] text-[#FFFFFF66]">
        {t('course_description')}
        </p>
        <div className="flex flex-col items-start justify-start gap-4 pt-2 lg:pt-4">
          <div className="flex items-center justify-center gap-1 lg:gap-2  ">
            <img
              src="/images/TeacherDetails/Frame.svg"
              alt="Duration icon"
            />
            <p className="text-sm lg:text-base font-normal leading-[18.75px] text-white">
            {t('duration')}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/TeacherDetails/Frame (1).svg"
              alt="Sessions icon"
            />
            <p className="text-sm lg:text-base font-normal leading-[18.75px] text-white">
            {t('session_type')}
            </p>
          </div>
          <div className="flex items-center justify-between gap-5 min-w-full">
            <button
              className="buttonHover cursor-pointer text-white rounded-md p-2 w-[120px] md:w-[160px] "
              onClick={handleModalPackages}
            >
                  {t('enroll_now')}
            </button>
            <button
              className="bg-white cursor-pointer text-primary rounded-md p-2 w-[120px] md:w-[160px]"
              onClick={handleButtonClick}
            >
             {t('add_to_cart')}
            </button>
          </div>
        </div>
      </div>

      {isModalOopsOpen && <ModalOops setIsModalOopsOpen={setIsModalOopsOpen} />}
      {isModalPackagesOpen && (
        <ModalPackages
          setIsModalPackagesOpen={setIsModalPackagesOpen}
          handleUnitsPackages={handleUnitsPackages}
          handleButtonClick={handleButtonClick}
        />
      )}
      {isModalUnitsOpen && (
        <ModalUnits
          setIsModalUnitsOpen={setIsModalUnitsOpen}
          handleButtonClick={handleButtonClick}
        />
      )}
    </>
  );
}
