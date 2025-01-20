import React from "react";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { useGetTeacherCoursesQuery } from "../../../../../Redux/data/getDataApiSlice";

export default function CourseManagement({ data }) {
  const { t } = useTranslation(); // Initialize useTranslation
  // const {data,isLoading, isFetching,isError} = useGetTeacherCoursesQuery()

  return (
    <div className="w-full lg:w -[80%] bg-white rounded-[20px] py-4  hover:shadow-lg">
      <p className="text-xl md:text-3xl font-semibold text-center py-4 text-black">
        {t("courseManagement.title")} {/* Translated title */}
      </p>

      <div className="overflow-x-auto px-4">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("courseManagement.name")} {/* Translated column header */}
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("courseManagement.dob")} {/* Translated column header */}
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("courseManagement.enrollment")}{" "}
                {/* Translated column header */}
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("courseManagement.status")} {/* Translated column header */}
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                {t("courseManagement.actions")} {/* Translated column header */}
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
                  {course.dateof.split(" ")[0].split("")}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {course.enrollment || 0}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-green-700">
                  {course.status || "Active"}
                </td>
                <td className="whitespace-nowrap px-4 py-2  ">
                  <div className="h-5">
                    <div className="fixed text-primary text-2xl cursor-pointer hover:text-secondary group  ">
                      <TbEdit />

                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                        <div className="flex flex-col space-y-2 bg-white p-2 rounded-md shadow-lg border border-gray-200">
                          <Link
                            to={"courses/chooseunit"}
                            className="block w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
                          >
                            Edit
                          </Link>
                          <button
                          onClick={( eo) => {  console.log(eo.target);
                           }}
                            className="block w-full px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-300"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
