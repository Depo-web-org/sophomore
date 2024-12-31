import React from "react";
import {
  StatisticCard,
  statisticsData,
} from "../../Dashboard/components/StatisticCard";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";

export default function CourseStatistics() {
  return (
    <>
      <div className="grid grid-cols-1   gap-8 w-full ">
        {statisticsData
          .filter((i) => i.title != "Completed Tasks")
          .map((item, index) => (
            <StatisticCard
              key={index}
              style={
                "flex justify-center md:justify-start  rounded-xl items-center gap-8 bg-white p-8 group hover:shadow-lg rounded-md"
              }
              image={item.image}
              title={item.title}
              stats={item.stats}
            />
          ))}
      </div>
      <AllCourses />
      <RecentlyUploaded />
    </>
  );
}

function UploadCourse(props) {
  return (
    <Link
      to="addnewcourse"
      className="bg-primary rounded-md px-4 py-1  lg:px-8 lg:py-2  hover:bg-secondary transition-all duration-300   font-semibold text-white text-center text-sm lg:text-base"
    >
      {props.Text}
    </Link>
  );
}

const AllCourses = () => {
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
  ];

  return (
    <div className="w-full lg:w-4/5  bg-white rounded-3xl py-4 ">
      <div className="flex  justify-between mx-5">
        <p className=" text-lg lg:text-[28px] font-semibold text-start py-4 text-black ">
          All Course
        </p>
        <div className="flex items-center">
          <UploadCourse Text={"Add A New Course"} />
        </div>
      </div>
      <div className="overflow-x-auto px-4 scrollbar-hide">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
          <thead className="ltr:text-left rtl:text-right  ">
            <tr className="">
              <th className="whitespace-nowrap   px-4 py-2 text-start font-medium text-[#6B7280]">
                Course Name
              </th>
              <th className="whitespace-nowrap  px-4 py-2 text-start font-medium text-[#6B7280]">
                Upload Date
              </th>
              <th className="whitespace-nowrap  px-4 py-2 text-start font-medium text-[#6B7280]">
                Enrollment
              </th>
              <th className="whitespace-nowrap  px-4 py-2 text-start font-medium text-[#6B7280]">
                status
              </th>
              <th className="whitespace-nowrap  px-4 py-2 text-start font-medium text-[#6B7280]">
                Actions
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
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <button>
                  <span className="text-primary  text-2xl cursor-pointer ">
                    <TbEdit />
                  </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RecentlyUploaded = () => {
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
  ];

  return (
    <div className=" w-full lg:w-3/5  bg-white rounded-3xl py-4 ">
      <div className="flex justify-between mx-5">
        <p className=" text-lg lg:text-[28px] font-semibold text-start py-4 text-black ">
          Recently Uploaded Courses
        </p>
      </div>
      <div className="overflow-x-auto px-4">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                Course Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                Status
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
