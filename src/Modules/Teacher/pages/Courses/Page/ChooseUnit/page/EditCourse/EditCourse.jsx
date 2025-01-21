import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUpdateTeacherCourseContentMutation } from "../../../../../../../../Redux/data/postDataApiSlice";
import {
  useGetAllSchoolInformationQuery,
  useGetTeacherCoursesQuery,
} from "../../../../../../../../Redux/data/getDataApiSlice";

const EditCourse = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const { EditCourseID } = useParams();

  const { data: schoolsData = {}, isLoading, isError } = useGetTeacherCoursesQuery();
  const [UpdateTeacherCourseContent, { isLoading: courseLoading, isError: courseError }] = useUpdateTeacherCourseContentMutation();
  const { data: ALLschoolsData } = useGetAllSchoolInformationQuery();

  const selectedCourse = schoolsData?.data.filter((id) => id.id === EditCourseID)[0];

  // إدارة الحالة للقوائم المنسدلة
  const [selectedSchoolType, setSelectedSchoolType] = useState(selectedCourse?.school || "");
  const [selectedGrade, setSelectedGrade] = useState(selectedCourse?.grade || "");
  const [selectedSubject, setSelectedSubject] = useState(selectedCourse?.subject || "");

  
  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

 
  useEffect(() => {
    if (selectedCourse) {
      setValue("title", selectedCourse.title);
      setValue("orderNotes", selectedCourse.notes);
      setSelectedSchoolType(selectedCourse.school);
      setSelectedGrade(selectedCourse.grade);
      setSelectedSubject(selectedCourse.subject);
    }
  }, [selectedCourse, setValue]);

  // submit function
  const handleFormSubmit = async (data) => {
    try {
      const formData = {
        id: EditCourseID,
        title: data.title,
        notes: data.orderNotes,
        school: selectedSchoolType,  
        grade: selectedGrade,  
        subject: selectedSubject,   
      };

      console.log("ALL DATA : ", formData);

      const response = await UpdateTeacherCourseContent(formData).unwrap();
      console.log(response);
      if (response.code == 0) {
        reset();

        navigate(`/teacherPanel/courses/${response.data}`);
      }
      if (response.code !== 0) {
        setErrorMessage(response.data);
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError  ) {
    return <div>Error fetching data</div>;
  }
  if (!schoolsData) {
    return <div>No course found with the provided ID.</div>;
  }

  return (
    <>
      <div className="lg:ms-5 h-auto ">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="w-full lg:w-1/2 sm:mx-auto lg:mx-0">
            <p className="block text-2xl lg:text-3xl font-semibold">
              {t("application.addNewCourse")}
            </p>
          </div>

          <div
            id="options"
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-auto tracking-wide my-4"
          >
            {/* Form Section */}
            <div className="">
              <div>
                <label
                  htmlFor="UserEmail"
                  className="block text-sm font-medium text-gray-400"
                >
                  {t("application.title")}
                </label>
                <input
                  type="text"
                  id="title"
                  defaultValue={selectedCourse.title}
                  {...register("title", {
                    required: t("application.titleRequired"),
                  })}
                  className={`border-2 py-2.5 mt-1 w-full text-gray-600 font-semibold placeholder:font-normal rounded-md shadow-sm sm:text-sm p-2 focus-within:outline-gray-200 bg-[#EFEFEF] ${
                    errors.title ? "border-red-500" : "border-[#EFEFEF]"
                  }`}
                  placeholder={t("application.titlePlaceholder")}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>

              <div className="my-4">
                <label
                  htmlFor="OrderNotes"
                  className="block text-sm font-medium text-gray-400"
                >
                  {t("application.orderNotes")}
                </label>
                <textarea
                  id="OrderNotes"
                  defaultValue={selectedCourse.notes}
                  {...register("orderNotes", {
                    required: t("application.orderNotesRequired"),
                  })}
                  className={`border-2 mt-2 w-full rounded-lg h-[7.5rem] shadow-sm sm:text-sm p-2 text-gray-600 font-semibold placeholder:font-normal focus-within:outline-gray-200 bg-[#EFEFEF] ${
                    errors.orderNotes ? "border-red-500" : "border-[#EFEFEF]"
                  }`}
                  rows="4"
                  placeholder={t("application.orderNotesPlaceholder")}
                ></textarea>
                {errors.orderNotes && (
                  <p className="text-red-500 text-sm">
                    {errors.orderNotes.message}
                  </p>
                )}
              </div>
            </div>

            {/* School and Grade Selection */}
            <div className="h-full">
              {/* School Type Dropdown */}
              <div>
                <label
                  htmlFor="schoolType"
                  className="text-gray-400 font-semibold text-sm lg:text-md"
                >
                  {t("application.selectSchoolType")}
                </label>
                <select
                  id="schoolType"
                  className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border focus:outline-none"
                  value={selectedSchoolType}
                  onChange={(e) => setSelectedSchoolType(e.target.value)}
                >
                  <option value="">{t("application.selectSchoolType")}</option>
                  <option value={selectedCourse.school}> {selectedCourse.school}</option>
                </select>
              </div>

              {/* Grades Dropdown */}
              <div>
                <label
                  htmlFor="grade"
                  className="text-gray-400 font-semibold text-sm lg:text-md"
                >
                  {t("application.selectGrade")}
                </label>
                <select
                  id="grade"
                  className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border focus:outline-none"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                >
                  <option value="">{t("application.selectGrade")}</option>
                  <option value={selectedCourse.grade}>{selectedCourse.grade}</option>
                </select>
              </div>

              {/* Subjects Dropdown */}
              <div>
                <label
                  htmlFor="subject"
                  className="text-gray-400 font-semibold text-sm lg:text-md"
                >
                  {t("application.selectSubject")}
                </label>
                <select
                  id="subject"
                  className="my-2 py-2 w-full rounded-lg text-sm lg:text-md font-medium text-gray-400 border focus:outline-none"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  {...register("subject", {
                    required: t("application.fieldRequired"),
                  })}
                >
                  <option value="">{t("application.selectSubject")}</option>
                  <option value={selectedCourse.subject}>{selectedCourse.subject}</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            <div className=" flex flex-col gap-y-2">
              {errorMessage && (
                <p className="text-red-500 text-sm  w-full block">
                  {errorMessage}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full lg:w-1/2 lg:mt-5 rounded bg-primary px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
              >
                {t("application.continue")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};



export default EditCourse;