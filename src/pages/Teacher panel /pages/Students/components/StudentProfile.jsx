import React from "react";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";

import { useLocation } from "react-router-dom";

export default function StudentProfile() {
  const location = useLocation();
  const { student } = location.state || {};
  console.log(student);

  if (!student) {
    return <div>No student data available</div>;
  }

  return (
    <div className="w-full min-h-40">
      <div className="relative bg-gradient-to-l from-[#F15C54] from-10%  to-[#536CB3] to-90% w-full h-48  rounded-tl-lg rounded-tr-lg">
        {/* img */}
        <div className="absolute top-32 md:top-[102px] left-2 md:left-24 flex items-center justify-start gap-4">
          <img
            className="border-[6px] border-white  w-24 h-24 md:w-36 md:h-36 s rounded-full"
            src="https://s3-alpha-sig.figma.com/img/4eed/dea2/50b16a6f7edf69ea1cf19a2c703ed08d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oDK7YXd4KT3lW983wBE2sfdaMY1lKKN9og5T6hEZwh-hrAcSqNAkUpPiEYV5nIqit0P7qva1-r4vimS1QX-dXQrW5EcY6BK-JYT388wSGvEkPjINuTNW4KB6pyKQpnqwbN5WyLgjg5zIzLh~L~IWrgdPOq-PbTuQlwDLtIXnQsAgKgkB4iPBpz14GYH0gCHtZXCRQzWX9e-k8KTBKxG6QH-4Gyi-hs7rjnyCznDbTJDhwhq~ul9OoDW1W4pd~QXUfbA0a3oK13jfFSH-PSJFdYwT~q~xnO1K5SjtSqwblUm9I2Xt0pbfcEeK~Jht77~VQhpfaAX6MZ0N9ogC-HwbQg__"
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
          <IoMdMail />
          <p>{student.email}</p>
        </div>
        <div className="flex items-center justify-center gap-1 text-[#4B5563]">
          <MdLocalPhone />
          <p>{student.phone}</p>
        </div>
        <div className="flex items-center justify-center gap-1 text-[#4B5563]">
          <img src="/dashboard/grade.svg" alt="" className="w-5 h-5" />{" "}
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
            src="https://s3-alpha-sig.figma.com/img/2ea7/3fb8/a57668df10fd5bd8d75fd99351111818?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxaenovmVtLN4bW97IpM5AYZteoE9lmgfLcvtPUkgDo-ZuPN8xcZydC6S5U6GHThkDgadlENVu0uSuj1ZYA4AVIEzwN~0NXER26JJGLgXoZTeY5rb0spIxCqntu5Gr7r17eveavSviN-WMOqr6u9FmGtEiCg81tGSwd99oW9kPoN4wbylqBN-wJUu7SyZdntYd7GtYhGqNL9TViZKC6K4OmG1~738gMjyrUJNw5Mgi2mb~CgSZqLRn~hLLnimM7EwLmtks6BDEuhDmTTy3tVtdzcywx87AkQX6OK7w3uLAxzh2ht6wp555Sn7Cko9Eeb8MUHW0cVMuYSaykDb6xIRQ__"
            alt="learning card"
            className="w-full minh-[168px]  object-cover rounded-t-lg"
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
              <FaSchoolFlag />
              American{" "}
            </p>
            <p className="text-base font-normal  text-[#4B5563]">4 units </p>
          </div>
        </div>
      </div>
    </div>
  );
}
