import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function EnrollCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-[376px] h-[406px] bg-slate-600 bg-opacity-25 border border-slate-700 rounded-lg flex flex-col justify-start items-start gap-2 p-4 shadow-[4px_4px_0px_0px_#F15C54]">
        <p className="text-[18px] font-semibold leading-[27px] text-primary">
          Grade 1 Math - Fundamentals of Numbers & Operations
        </p>
        <p className="text-[16px] pt-3 font-normal leading-[18.75px] text-[#FFFFFF66]">
          This course covers the essential concepts of mathematics for Grade 1
          students, focusing on basic arithmetic, problem-solving, and logical
          reasoning through engaging activities and interactive lessons.
        </p>
        <div className="flex flex-col items-start justify-start gap-4 pt-4">
          <div className="flex items-center justify-center gap-2">
            <img src="/TeacherDetails/Frame.svg" alt="Duration icon" />
            <p className="text-[16px] font-normal leading-[18.75px] text-white">
              Till the end of semester
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src="/TeacherDetails/Frame (1).svg" alt="Sessions icon" />
            <p className="text-[16px] font-normal leading-[18.75px] text-white">
              Recorded Sessions
            </p>
          </div>
          <div className="flex items-center justify-between gap-5 min-w-full">
            <button
              className="bg-primary cursor-pointer text-white rounded-md p-2 w-[160px]"
              onClick={handleButtonClick}
            >
              Enroll now
            </button>
            <button
              className="bg-white cursor-pointer text-primary rounded-md p-2 w-[160px]"
              onClick={handleButtonClick}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && <ModalOops setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

function ModalOops({ setIsModalOpen }) {
  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className="fixed inset-0 bg-slate-600 bg-opacity-50 flex items-center justify-center"
    >
      <div
        className="bg-slate-900 rounded-lg p-6 min-w-[327px] border-r-2 border-b-2 border-primary"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-end justify-end">
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-white hover:text-gray-400"
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <p className="mb-4 text-white text-2xl font-bold">Oops!</p>
          <span className="text-base font-normal leading-6 text-center text-[#72777A]">
            Please login to Continue
          </span>
          <button className="bg-primary text-white px-4 py-2 min-w-[279px] rounded-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function ModalPackages() {
  return (
    <div>
      <h1>Modal Packages</h1>
    </div>
  );
}
