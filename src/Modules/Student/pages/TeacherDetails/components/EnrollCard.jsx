import { useState } from "react";
import ModalPackages from "./ModalPackages";
import ModalOops from "./ModalOops";
import { ModalUnits } from "./ModalUnits";

export default function EnrollCard() {
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
        <p className="text-[18px] font-semibold leading-[27px] text-primary">
          Grade 1 Math - Fundamentals of Numbers & Operations
        </p>
        <p className="text-base pt-3 font-normal leading-[18.75px] text-[#FFFFFF66]">
          This course covers the essential concepts of mathematics for Grade 1
          students, focusing on basic arithmetic, problem-solving, and logical
          reasoning through engaging activities and interactive lessons.
        </p>
        <div className="flex flex-col items-start justify-start gap-4 pt-4">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/TeacherDetails/Frame.svg"
              alt="Duration icon"
            />
            <p className="text-base font-normal leading-[18.75px] text-white">
              Till the end of semester
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/TeacherDetails/Frame (1).svg"
              alt="Sessions icon"
            />
            <p className="text-base font-normal leading-[18.75px] text-white">
              Recorded Sessions
            </p>
          </div>
          <div className="flex items-center justify-between gap-5 min-w-full">
            <button
              className="bg-primary cursor-pointer text-white rounded-md p-2 w-[120px] md:w-[160px] "
              onClick={handleModalPackages}
            >
              Enroll now
            </button>
            <button
              className="bg-white cursor-pointer text-primary rounded-md p-2 w-[120px] md:w-[160px]"
              onClick={handleButtonClick}
            >
              Add to cart
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
