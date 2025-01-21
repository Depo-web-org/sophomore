import React from "react";
import {
  StatisticCard,
  statisticsData,
} from "../../Dashboard/components/StatisticCard";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { useGetTeacherCoursesQuery } from "../../../../../Redux/data/getDataApiSlice";
import {timeAgo} from "../../../../../Helpers/timeAgo"


export default function CourseStatistics() {
  const { i18n, t } = useTranslation(); // Initialize useTranslation
    const {data,isLoading, isFetching,isError} = useGetTeacherCoursesQuery()
  
  return (
    <>
      <div className="grid grid-cols-1 gap-8 gap-y-4 w-full  ">

        {statisticsData.map((item, index) => (
          <StatisticCard
            style={
              "flex justify-start items-center gap-8 bg-white p-3 md:p-8 group hover:shadow-lg rounded-md "
            }
            key={index}
            image={item.image}
            title={`${i18n.language === "en" ? item.title : item.title_ar}`}
            stats={item.stats}
          />
        ))}
        
      </div>
      <AllCourses />
      <RecentlyUploaded data={data} />
    </>
  );
}

export function UploadCourse({ title, path, width }) {
  const { t } = useTranslation(); // Initialize useTranslation
  return (
    <Link
      to={path}
      className={`${width} bg-primary rounded-md px-4 py-2 lg:px-8 lg:py-2 hover:bg-secondary transition-all duration-300 font-semibold text-white text-center text-sm lg:text-base`}
    >
      {t(title)} {/* Translated title */}
    </Link>
  );
}

const AllCourses = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation

  const {data,isLoading, isFetching,isError} = useGetTeacherCoursesQuery()


  return (
    <div className="w-full  bg-white rounded-3xl  py-4" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-between pb-4 px-4">
        <p className="text-base md:text-lg lg:text-3xl font-semibold text-start py-4 text-black">
          {t("allCourses.title")} {/* Translated title */}
        </p>
        <div className="flex items-center">
          <UploadCourse
            title={"addNewCourse"} // Translation key
            path={"/teacherPanel/courses/addnewcourse"}
          />
        </div>
      </div>
      <div className="overflow-x-auto px-4 scrollbar-hide ">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("allCourses.courseName")} {/* Translated column header */}
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("allCourses.uploadDate")} {/* Translated column header */}
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("allCourses.enrollment")} {/* Translated column header */}
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("allCourses.status")} {/* Translated column header */}
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("allCourses.actions")} {/* Translated column header */}
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data?.data.map((course, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {course.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {course.dateof.split(' ')[0].split('')}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {course.enrollment|| 0}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-green-700">
                  {course.status || "Active"}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <Link
                    to={`EditLessons/course/${course.id}`}
                    className="text-primary text-2xl cursor-pointer"
                  >
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
};

const RecentlyUploaded = ({data}) => {
  console.log(data?.data)
  const recentCourses= data?.data.slice(0,3)
  console.log(recentCourses)

  const { t, i18n } = useTranslation(); // Initialize useTranslation
  // Array of objects representing course details
  


  return (
    <div className="w-full lg:w -3/5 bg-white rounded-3xl py-4" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="flex justify-between mx-5">
        <p className="text-lg lg:text-[28px] font-semibold text-start py-4 text-black">
          {t("recentlyUploaded.title")} {/* Translated title */}
        </p>
      </div>
      <div className="overflow-x-auto px-4 ">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("recentlyUploaded.courseName")} {/* Translated column header */}
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("allCourses.uploadDate")} {/* Translated column header */}
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 ">
            {recentCourses?.map((course, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {course.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-green-700">
              {timeAgo(course.dateof)[i18n.language]} 
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};