import React from "react";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function CourseManagement() {
  // Array of objects representing course details
  const courses = [
    {
      name: "Introduction to math",
      dob: "Jan 12 , 2024",
      enrollment: "500",
      status: "Active",
    },
    {
      name: "Introduction to math",
      dob: "Jan 12 , 2024",
      enrollment: "500",
      status: "Active",
    },
    {
      name: "Introduction to math",
      dob: "Jan 12 , 2024",
      enrollment: "500",
      status: "Active",
    },
  ];

  return (
    <div className="w-full lg:w-[80%] bg-white rounded-[20px] py-4 group hover:shadow-lg  ">
      <p className="text-xl md:text-3xl font-semibold text-center py-4 text-black">
        Course Management
      </p>

      <div className="overflow-x-auto px-4">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                Date of Birth
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                enrollment
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                status
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                Actions{" "}
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {courses.map((course, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {course.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {course.dob}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {course.enrollment}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-green-700">
                  {course.status}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 ">
                  <Link to={"courses/chooseunit"} 
                  className="text-primary  text-2xl cursor-pointer ">  
                    <TbEdit />                                  
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
