import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useGetTeacherSubscripersQuery } from "../../../../../Redux/data/getDataApiSlice";
import { timeAgo } from "../../../../../Helpers/timeAgo";
import { useTranslation } from "react-i18next";
import StudentDetailsSkeleton from "./StudentDetailsSkeleton";

export default function StudentDetails() {
  const { data: subscripers, isLoading: subLoading, isFetching: subFetching, isError: subError, refetch: subRefetch } = useGetTeacherSubscripersQuery();
  const students = subscripers?.data;

  const { i18n, t } = useTranslation(); 
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(""); 

  const filteredStudents = students?.filter((student) => {
    const fullName = `${student?.consumer_data_object?.first_name} ${student?.consumer_data_object?.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });
  if(subFetching){
    return(
      <StudentDetailsSkeleton/>
    )
  }

  return (
    <div className="bg-white rounded-2xl w-full p-6 ">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center w-full">
        <p className="text-xl font-semibold text-primary">{  `${i18n.language==="ar"? "تفاصيل الطﻻب" :"Student details"}`}</p>
        <div className="flex items-center flex-col md:flex-row justify-center md:justify-evenly w-full md:w-1/2 ">
          <div className="relative w-4/5 md:w-1/2">
            <input
              className="border-[1px] w-full bg-gray-100 rounded-lg outline-none ring-0 py-1 px-2 pl-10"
              type="search"
              placeholder={  `${i18n.language==="ar"? "بحث" :"search"}`}
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button
          onClick={()=>setSearchQuery("")}
           className="text-lg text-primary underline hover:underline-offset-0 hover:bg-slate-50 rounded-lg p-2 ">
         
            {  `${i18n.language==="ar"? "اظهار الكل" :"   View all"}`}
          </button>
        </div>
      </div>
      <div  className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-start text-sm text-gray-500 text-nowrap">
              <th className="py-4 px-6"> {  `${i18n.language==="ar"? "اسم الطالب " :"Student Name"}`}</th>
              <th className="py-4 px-6"> {  `${i18n.language==="ar"? "كود الطالب" :"Student ID"}`}</th>
              <th className="py-4 px-6"> {  `${i18n.language==="ar"? "تاريخ اﻵشتراك " :"Enrollment Date"}`}</th>
              <th className="py-4 px-6">{  `${i18n.language==="ar"? "الهاتف" :"Phone"}`}</th>
              <th className="py-4 px-6">{  `${i18n.language==="ar"? "أسم الكورس" :"Course Name "}`}</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents?.map((student, index) => {
              const lessons = student?.items[0].contents.length > 0 ? "full course" : student?.items[0]?.content_data_object?.title;
              return (
                <tr
                  onClick={() =>
                    navigate("/teacherPanel/students/studentprofile", {
                      state: { student },
                    })
                  }
                  key={student.id}
                  className={`${
                    index % 2 === 0 ? "bg-[#E6F1FD]" : "bg-[#C3CCE5]"
                  }  border-b-4 border-white text-nowrap `}
                >
                  <td className="py-4 px-6 flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    {student?.consumer_data_object?.first_name} {student?.consumer_data_object?.last_name}
                  </td>
                  <td className="py-4 px-6"># {student?.consumer_data_object?.id}</td>
                  <td className="py-4 px-6">{timeAgo(student?.dateof)[i18n.language]}</td>
                  <td className="py-4 px-6">{student?.consumer_data_object?.phone_number === "undefined" ? `${i18n.language==="ar"? "لم يضف بعد" :"Not added yet"}`  : student?.consumer_data_object?.phone_number}</td>
                  <td className="py-4 px-6 flex flex-wrap justify-center">
                     
               {student?.items[0].course_data_object?.title}
                    <span className="text-sm text-green-600 px-1">({lessons})</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
