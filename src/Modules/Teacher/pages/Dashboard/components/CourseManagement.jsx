import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDeleteTeacherCourseMutation } from "../../../../../Redux/data/postDataApiSlice";
import { useGetTeacherCoursesQuery } from "../../../../../Redux/data/getDataApiSlice";
import { ImSpinner9 } from "react-icons/im";

export default function CourseManagement({ data }) {
  const [deleteModal, setDeleteModal] = useState(false); 
  const [selectedCourseId, setSelectedCourseId] = useState(null); 
  const [openMenuId, setOpenMenuId] = useState(null); 
  const { t } = useTranslation();
  const [deleteTeacherCourse, { isLoading, isError }] = useDeleteTeacherCourseMutation();
  const { refetch } = useGetTeacherCoursesQuery();

  const deleteCourse = async (id) => {
    const formData = {
      id,
    };
    const response = await deleteTeacherCourse(formData).unwrap();
    if (response.code === 0) {
      refetch();
    }
    setDeleteModal(false); 
  };

  
  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id); 
  };

  return (
    <div className="w-full bg-white rounded-[20px] py-4 hover:shadow-lg">
      <p className="text-xl md:text-3xl font-semibold text-center py-4 text-black">
        {t("courseManagement.title")}
      </p>

      <div className="px-4 ">
        {data?.data.length === 0 ? (
          <p className="whitespace-nowrap px-4 py-2 text-gray-900 text-center font-bold text-xl wf">
            {t("courseManagement.empty")}
          </p>
        ) : (
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                  {t("courseManagement.name")}
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                  {t("courseManagement.dob")}
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                  {t("courseManagement.enrollment")}
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                  {t("courseManagement.status")}
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-start font-medium text-[#6B7280]">
                  {t("courseManagement.actions")}
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
                  <td className={`whitespace-nowrap px-4 py-2 ${course.status === "1" ? "text-emerald-700":"text-red-700" } `}>
                    {course.status === "1" ?   t("courseManagement.statusOfCourseFinished"):t("courseManagement.statusOfAddCourse")  }
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="relative text-primary text-2xl cursor-pointer group">
                      {/* Action Icon */}
                      <TbEdit onClick={() => toggleMenu(course.id)} />

                      {/* Action Menu */}
                      {openMenuId === course.id && (
                        <ul className="absolute -end-0 z-[100] bg-white border border-gray-300 w-[130px] rounded-lg ">
                          <li className="flex items-center justify-between px-2 py-1 text-start text-sm transition-all duration-150 hover:text-base cursor-pointer">
                            <Link
                              to={`courses/EditCourse/${course.id}`}
                              className="block w-full px-4 py-2 text-center text-sm text-white bg-primary rounded-md hover:bg-opacity-90 transition-colors duration-300"
                            >
                              {t("actions.edit")}
                            </Link>
                          </li>
                          <li className="flex items-center justify-between px-2 py-1 text-start text-sm transition-all duration-150 hover:text-base cursor-pointer">
                            <Link
                              to={`courses/EditLessons/course/${course.id}`}
                              className="block w-full px-4 py-2 text-center text-sm text-white bg-primary rounded-md hover:bg-opacity-90 transition-colors duration-300"
                            >
                              {t("actions.editLessons")}
                            </Link>
                          </li>
                          <li className="flex items-center justify-between px-2 py-1 text-start text-sm transition-all duration-150 hover:text-base cursor-pointer">
                            <button
                              onClick={() => {
                                setSelectedCourseId(course.id); // Set the selected course ID
                                setDeleteModal(true); // Open the modal
                                setOpenMenuId(null); // Close the menu
                              }}
                              className="block w-full px-4 py-2 text-sm text-white bg-secondary rounded-md hover:bg-opacity-80 transition-colors duration-300"
                            >
                              {t("actions.delete")}
                            </button>
                          </li>
                          <li className="flex items-center justify-between px-2 py-1 text-start border-b text-sm transition-all duration-150 hover:text-base cursor-pointer">
                            {/* teacherPanel/courses/50*/}
                            <Link
                              to={`/teacherPanel/courses/${course.id}`}
                              className="block w-full px-4 py-2 text-sm text-white bg-green-700 rounded-md hover:bg-opacity-80 transition-colors duration-300"
                            >
                              {t("actions.addLesson")}
                            </Link>

                            {/* <button
                              onClick={() => {
                                console.log("Add Lesson button clicked");
                                setOpenMenuId(null); // Close the menu
                              }}
                              className="block w-full px-4 py-2 text-sm text-white bg-green-700 rounded-md hover:bg-opacity-80 transition-colors duration-300"
                            >
                              {t("actions.addLesson")}
                            </button> */}
                          </li>
                        </ul>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Render the modal conditionally */}
      {deleteModal && (
        <DeleteCourseModal
          isLoading={isLoading}
          setDeleteModal={setDeleteModal}
          deleteCourse={() => deleteCourse(selectedCourseId)}
          t={t}
        />
      )}
    </div>
  );
}

const DeleteCourseModal = ({ setDeleteModal, deleteCourse, t, isLoading }) => {
  return (
    <div
      onClick={() => setDeleteModal(false)} // Close modal when clicking outside
      className="px-8 bg-slate-600 bg-opacity-50 fixed inset-0 flex items-center justify-center z-[9999]"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
        className="scale-in-center bg-slate-900 w-[500px] px-8 py-4 rounded-2xl border-r-4 border-b-4 border-primary"
      >
        <div className="w-full text-center">
          {/* Top text modal */}
          <div>
            <p className="text-2xl font-semibold pt-4 text-white">
              {t("deleteModal.title")}
            </p>
            <p className="mt-3 text-gray-500">
              {t("deleteModal.description")}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={deleteCourse} // Call the delete function
              type="button"
              className="my-7 w-full inline-flex justify-center items-center rounded-3xl bg-primary text-center px-2 py-2 text-md font-semibold text-white transition-all duration-300"
            >
              {isLoading ? (
                <ImSpinner9 className="animate-spin text-3xl text-secondary" />
              ) : (
                t("deleteModal.confirmButton")
              )}
            </button>

            <button
              onClick={() => setDeleteModal(false)} // Close modal
              type="button"
              className="my-7 w-full rounded-3xl hover:bg-secondary border border-gray-500 hover:border-secondary px-2 py-2 text-md font-semibold text-white transition-all duration-300"
            >
              {t("deleteModal.cancelButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};