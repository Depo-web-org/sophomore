import React from "react";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";

import { useLocation } from "react-router-dom";
import { RiGraduationCapFill } from "react-icons/ri";

export default function StudentProfile() {
  const location = useLocation();
  const { student } = location.state || {};

  if (!student) {
    return <div>No student data available</div>;
  }

  return (
    <div className="w-full min-h-40">
      <div className="relative bg-gradient-to-l from-[#F15C54] from-10%  to-[#536CB3] to-90% w-full h-48  rounded-tl-lg rounded-tr-lg">
        {/* img */}
        <div className="absolute top-32 md:top-[102px] left-2 md:left-24 flex items-center justify-start gap-4">
          <img
            className="border-[6px] border-white  w-24 h-24 md:w-36 md:h-36 s rounded-full object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
          <p className="text-lg md:text-2xl font-semibold text-white">
            {student.name}{" "}
          </p>
          <p className="bg-green-600 px-2 py-1 text-white font-normal text-xs md:text-sm rounded-full">
            active
          </p>
        </div>
      </div>
      <div className="bg-white min-h-32 flex flex-col md:flex-row items-center justify-start  pl-[8%] pt-16 md:pt-5 gap-8 ">
        <div className="flex items-center justify-center gap-1 text-[#4B5563]">
          <span className="mb-1 text-primary text-xl ">
            <IoMdMail />
          </span>
          <p>{student.email}</p>
        </div>
        <div className="flex items-center justify-center gap-1 text-[#4B5563]">
          <span className="mb-1 text-primary text-xl ">
            <MdLocalPhone />
          </span>
          <p>{student.phone}</p>
        </div>
        <div className="flex items-center justify-center gap-1 text-[#4B5563]">
          <span className="mb-1 text-primary text-xl ">
            <RiGraduationCapFill />
          </span>
          <p>{student.grade}</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 pt-8 ">
        <p className="text-2xl font-semibold text-[#4B5563]">Courses </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          <CoursesCard />
        </div>
      </div>
    </div>
  );
}

function CoursesCard() {
  const location = useLocation();
  const { student } = location.state || {};
  return (
    <div>
      <div className="flex flex-col w-[auto]">
        <div className="relative w-full ">
          <img
            src="https://dev.depowebeg.com/sophomore//images/subjects/math.webp"
            alt="learning card"
            className="w-full min-h-[168px]  object-cover rounded-t-lg"
          />
        </div>
        <div className=" w-full p-2 bg-white min-h-10 rounded-b-lg">
          <div className="flex items-center justify-between">
            <p className="text-xl font-medium text-black">
              {student.courseName}
            </p>
            <p className="text-base font-normal  text-[#4B5563]">
              {student.grade}
            </p>
          </div>
          <div className="flex items-center justify-between pt-8">
            <p className="text-base font-medium text-[#4B5563] flex items-baseline gap-1">
              <FaSchoolFlag className="text-2xl " />
              American
            </p>
            <p className="text-base font-normal  text-[#4B5563]">4 units </p>
          </div>
        </div>
      </div>
    </div>
  );
}
