import React from "react";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

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

export default function CourseManagement() {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="w-full lg:w -[80%] bg-white rounded-[20px] py-4 group hover:shadow-lg">
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
                  <Link
                    to={"courses/chooseunit"}
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
}