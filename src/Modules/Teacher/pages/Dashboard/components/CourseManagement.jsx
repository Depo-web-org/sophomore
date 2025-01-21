import React from "react";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function CourseManagement({ data }) {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="w-full lg:w-[80%] bg-white rounded-[20px] py-4 hover:shadow-lg">
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
                {t("courseManagement.enrollment")} {/* Translated column header */}
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
                  {course.dateof.split(" ")[0]}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {course.enrollment || 0}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-green-700">
                  {course.status === 1 ? "Active" : "Not Active"}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <div className="relative text-primary text-2xl cursor-pointer group">
                    <TbEdit />

                    <ul className="hidden absolute -end-0 z-50 bg-white border border-gray-300 w-[130px] rounded-lg group-hover:block">
                      <li className="flex items-center justify-between px-2 py-1 text-start text-sm transition-all duration-150 hover:text-base cursor-pointer">
                        <Link
                          to={`courses/EditCourse/${course.id}`}
                          className="block w-full px-4 py-2 text-center text-sm text-white bg-primary rounded-md hover:bg-opacity-90 transition-colors duration-300"
                        >
                          {t("actions.edit")} {/* Translated action */}
                        </Link>
                      </li>
                      <li className="flex items-center justify-between px-2 py-1 text-start text-sm transition-all duration-150 hover:text-base cursor-pointer">
                        <Link
                          to={`/teacherPanel/courses/EditLessons/lesson/${course.id}`}
                          className="block w-full px-4 py-2 text-center text-sm text-white bg-primary rounded-md hover:bg-opacity-90 transition-colors duration-300"
                        >
                          {t("actions.editLessons")} {/* Translated action */}
                        </Link>
                      </li>
                      <li className="flex items-center justify-between px-2 py-1 text-start text-sm transition-all duration-150 hover:text-base cursor-pointer">
                        <button
                          onClick={(e) => {
                            console.log("Delete button clicked");
                          }}
                          className="block w-full px-4 py-2 text-sm text-white bg-secondary  rounded-md hover:bg-opacity-80 transition-colors duration-300"
                        >
                          {t("actions.delete")} {/* Translated action */}
                        </button>
                      </li>
                      <li className="flex items-center justify-between px-2 py-1 text-start border-b text-sm transition-all duration-150 hover:text-base cursor-pointer">
                        <button
                          to={`/teacherPanel/courses/${course.id}`}
                          onClick={(e) => {
                            console.log("Delete button clicked");
                          }}
                          className="block w-full px-4 py-2 text-sm text-white bg-green-700 rounded-md hover:bg-opacity-80 transition-colors duration-300"
                        >
                          {t("actions.addLesson")} {/* Translated action */}
                        </button>
                      </li>
                    </ul>
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