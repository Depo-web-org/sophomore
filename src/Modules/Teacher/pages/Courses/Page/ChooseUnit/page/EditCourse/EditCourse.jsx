import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  useGetAllSchoolInformationQuery,
  useGetTeacherCoursesQuery,
} from "../../../../../../../../Redux/data/getDataApiSlice";
import { useEditTeacherCourseMutation } from "../../../../../../../../Redux/data/postDataApiSlice";
import { LoadingComponents } from "../../../../../../../../App";
import GoBack from "../../../../components/GoBack";

const EditCourse = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const { EditCourseID } = useParams();
const [statusOfCourse, setStatusOfCourse] = useState(false)

  const { data: schoolsData = {}, isLoading, isError } = useGetTeacherCoursesQuery();
  const [editTeacherCourse, { isLoading: courseLoading, isError: courseError }] = useEditTeacherCourseMutation();
  const { data: ALLschoolsData } = useGetAllSchoolInformationQuery();
  
  const selectedCourse = schoolsData?.data?.find(
    (course) => course.id === EditCourseID
  );
  const [isCourseFinished, setIsCourseFinished] = useState(false); 

  useEffect(() => {
    if (selectedCourse) {
      if (selectedCourse.status == 1) {
        setIsCourseFinished(true);
      } else {
        setIsCourseFinished(false); 
      }
      setStatusOfCourse(true);
    } else {
      setStatusOfCourse(false); 
    }
  }, [selectedCourse]); // 
  const [selectedSchoolType, setSelectedSchoolType] = useState(
    selectedCourse?.school || ""
  );
  const [selectedGrade, setSelectedGrade] = useState(
    selectedCourse?.grade || ""
  );
  const [selectedSubject, setSelectedSubject] = useState(
    selectedCourse?.subject || ""
  );

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

  // Handle form submission
  const handleFormSubmit = async (data) => {
    try {
      const formData = {
        id: EditCourseID,
        title: data.title,
        notes: data.orderNotes,
        school: selectedSchoolType,
        grade: selectedGrade,
        subject: selectedSubject,
        status: isCourseFinished ? 1 : 0, // 1 = finished, 0 = not finished
      };
      const response = await editTeacherCourse(formData).unwrap();
      console.log(response);
      if (response.code == 0) {
        reset();
        navigate(`/teacherPanel`);
      } else {
        setErrorMessage(response.data);
      }
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  if (isLoading) {
    return <LoadingComponents/>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!selectedCourse) {
    return <div>No course found with the provided ID.</div>;
  }

  return ( 
    <div className="lg:ms-5 h-auto  ">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="w-full lg:w-1/2 sm:mx-auto lg:mx-0">
        <GoBack  title={location.pathname.split('/')[3]=== 'editUnit' ? "Edit Lessons" :t("actions.updateCourse") }/>
          {/* <p className="block text-2xl lg:text-3xl font-semibold">
            {t("actions.updateCourse")}
          </p> */}
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
            <div className="mb-4">
              <label
                htmlFor="schoolType"
                className="text-gray-400 font-semibold text-sm lg:text-md block"
              >
                {t("application.selectSchoolType")}
              </label>
              <select
                id="schoolType"
                value={selectedSchoolType}
                onChange={(e) => {
                  const schoolId = e.target.value;
                  setSelectedSchoolType(schoolId);
                  setSelectedGrade("");
                  setSelectedSubject("");
                }}
                className="w-full py-2 px-3 border rounded-lg text-sm text-gray-500 font-medium focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">{t("application.selectSchoolType")}</option>
                {ALLschoolsData?.data?.map((school) => (
                  <option key={school.id} value={school.id}>
                    {i18n.language === "ar" ? school.name_ar : school.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown for Grade */}
            <div className="mb-4">
              <label
                htmlFor="grade"
                className="text-gray-400 font-semibold text-sm lg:text-md block"
              >
                {t("application.selectGrade")}
              </label>
              <select
                id="grade"
                value={selectedGrade}
                onChange={(e) => {
                  const gradeId = e.target.value;
                  setSelectedGrade(gradeId);
                  // setSelectedSubject("");
                }}
                className="w-full py-2 px-3 border rounded-lg text-sm text-gray-500 font-medium  focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">{t("application.selectGrade")}</option>
                {ALLschoolsData?.data
                  ?.find((school) => school.id === selectedSchoolType)
                  ?.grades?.map((grade) => (
                    <option key={grade.id} value={grade.id}>
                      {i18n.language === "ar" ? grade.name_ar : grade.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* Dropdown for Subject */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="text-gray-400 font-semibold text-sm lg:text-md block"
              >
                {t("application.selectSubject")}
              </label>
              <select
                id="subject"
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setValue("subject", e.target.value);
                }}
                className="w-full py-2 px-3 border rounded-lg text-sm text-gray-500 font-medium  focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">{t("application.selectSubject")}</option>
                {ALLschoolsData?.data
                  ?.find((school) => school.id === selectedSchoolType)
                  ?.grades?.find((grade) => grade.id === selectedGrade)
                  ?.subjects?.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                      {i18n.language === "ar" ? subject.name_ar : subject.name}
                    </option>
                  ))}
              </select>
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

{/* 
          <div className=" flex justify-start items-center">
              <p className="flex  justify-center gap-2">
                <span className="font-medium "> {t("courseManagement.statusOfAddCourse")}
                </span>
                <input type="checkbox" onChange={() => setStatusOfCourse(!statusOfCourse)} />
              </p>
            </div> */}


<div className="flex justify-start items-start gap-4 flex-col">
  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="courseStatus"
      value="notFinished"
      checked={!isCourseFinished}
      onChange={() => setIsCourseFinished(false)}
    />
    <span className="font-medium">{t("courseManagement.statusOfAddCourse")}</span>
  </label>
  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="courseStatus"
      value="finished"
      checked={isCourseFinished}
      onChange={() => setIsCourseFinished(true)}
    />
    <span className="font-medium">{t("courseManagement.statusOfCourseFinished")}</span>
  </label>
</div>








          <div className="flex flex-col gap-y-2">
            {errorMessage && (
              <p className="text-red-500 text-sm w-full block">
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
  );
};

export default EditCourse;