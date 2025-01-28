import React from "react";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";

import { useLocation } from "react-router-dom";
import { RiGraduationCapFill } from "react-icons/ri";
import { baseUrl } from "../../../../../App";
import { useGetTeacherSubscripersQuery } from "../../../../../Redux/data/getDataApiSlice";
import { BsCalendar2Check } from "react-icons/bs";
import StudentProfileSkeleton from "./StudentProfileSkeleton";
import { useTranslation } from "react-i18next";

export default function StudentProfile() {
  const location = useLocation();
  const {i18n}=useTranslation()
  const { student } = location.state || {};

    const {data:subscripers,isLoading:subLoading, isFetching:subFetching,isError:subError,refetch:subRefetch} = useGetTeacherSubscripersQuery()
  if (!student) {
    return <div>No student data available</div>;
  }
  if(subFetching){
    return(<StudentProfileSkeleton/>)
  }
const selectedStudent =subscripers?.data?.filter((selected)=>student.consumer===selected?.consumer)
console.log(i18n.language)
  return (
    <div className="w-full min-h-40 ">
      <div className="relative bg-gradient-to-l from-[#F15C54] from-10%  to-[#536CB3] to-90% w-full h-48  rounded-tl-lg rounded-tr-lg">
        {/* img */}
        <div className="absolute top-32 md:top-[102px] left-2 md:left-24 flex items-center justify-start gap-4">
          <img
            className="border-4 border-white  w-24 h-24 md:w-36 md:h-36  rounded-full object-cover"
            src={`${baseUrl}${student.consumer_data_object.path}${student.consumer_data_object.photo}`}
            alt="profile"
          />
          <p className="text-lg md:text-2xl font-semibold text-white text-nowrap">
            {student.consumer_data_object.first_name} {student.consumer_data_object.last_name}
          </p>
          <p className="bg-green-600 px-2 py-1 text-white font-normal text-xs md:text-sm rounded-full">
            {i18n.language==="ar"? "نشط": "active"}
          </p>
        </div>
      </div>
      <div className="bg-white min-h-32 flex flex-col md:flex-row items-center justify-start  ps-[8%] pt-20 md:pt-10 gap-8 ">
        <div className="flex items-center justify-center gap-1 text-[#4B5563]">
          <span className="mb-1 text-primary text-xl ">
            <IoMdMail />
          </span>
          <p>{student?.consumer_data_object?.email}</p>
        </div>
        <div className="flex items-center justify-center gap-1 text-[#4B5563]">
          <span className="mb-1 text-primary text-xl ">
            <MdLocalPhone />
          </span>
          <p>{student?.consumer_data_object?.phone_number==="undefined"? `${i18n.language==="ar"? "لم يضف بعد" :"Not added yet"}`:student?.consumer_data_object?.phone_number}</p>
        </div>
        {/* <div className="flex items-center justify-center gap-1 text-[#4B5563]">
          <span className="mb-1 text-primary text-xl ">
            <RiGraduationCapFill />
          </span>
          <p>{student.grade}</p>
        </div> */}
      </div>
      <div className="w-full flex flex-col gap-4 pt-8 ">
        <p className="text-2xl font-semibold text-[#4B5563]">Course </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {selectedStudent?.map((selected, index) => (
            <CoursesCard key={index} course={selected?.items[0]?.course_data_object} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CoursesCard({course}) {
  const location = useLocation();
  const { student } = location.state || {};
  console.log(course)
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
              {course.title}
            </p>
            <p className="text-base font-normal  text-[#4B5563]">
              {course.price} LE
            </p>
          </div>
          <div className="flex items-center justify-between pt-8">
            {/* <p className="text-base font-medium text-[#4B5563] flex items-baseline gap-1">
              <FaSchoolFlag className="text-2xl " />
              American
            </p> */}
            <p className="text-sm font-normal flex gap-2 items-center justify-center text-[#4B5563]">
            <BsCalendar2Check /> {course.dateof.split(" ")[0]} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
