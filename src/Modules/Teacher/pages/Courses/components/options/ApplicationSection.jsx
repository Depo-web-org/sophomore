import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetAllSchoolInformationQuery } from "../../../../../../Redux/data/getDataApiSlice";
import { useAddTeacherCourseMutation } from "../../../../../../Redux/data/postDataApiSlice";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";

const ApplicationSection = () => {
  const { t, i18n } = useTranslation();
  // console.log(i18n.language)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [statusOfCourse, setStatusOfCourse] = useState(false);
  const [isCourseFinished, setIsCourseFinished] = useState(false);
  const {
    data: schoolsData = {},
    isLoading,
    isError,
  } = useGetAllSchoolInformationQuery();
  const [addTeacherCourse, { isLoading: courseLoading, isError: courseError }] =
    useAddTeacherCourseMutation();

  const [selectedSchoolType, setSelectedSchoolType] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [uploadImage, setUploadImage] = useState(null);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadImage(file);
      setValue("image", file);
    }
  };

  const handleFormSubmit = async (data) => {
    try {
      const formData = {
        title: data.title,
        notes: data.orderNotes,
        school: selectedSchoolType ? selectedSchoolType.id : null,
        grade: selectedGrade ? selectedGrade.id : null,
        subject: data.subject,
        status: isCourseFinished ? 1 : 0, // 1 = finished, 0 = not finished,
        price: data.CoursesPrice,
      };

      const response = await addTeacherCourse(formData).unwrap();

      if (response.code === 0) {
        reset();
        navigate(`/teacherPanel/courses/${response.data}`);
      } else {
        if(response.data==="Duplicate data entry ( 'teacher course')" ){
          toast.error(`${i18n.language==='ar' ? "تم أضافه الكورس من قبل":"Course already exists"}`)
        }
      }

      setUploadImage(null);
    } catch (error) {
      // console.error("Error adding course:", error);
    }
  };

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <div className="lg:ms-5 h-auto  ">
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
          { i18n.language === 'ar'? "وصف الكورس" : "  Course Description" }

                </label>
                <textarea
                  id="OrderNotes"
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


              {/* price    Full Courses pr*/}
              <div className="my-4">
                <label
                  htmlFor="CoursesPrice"
                  className="block text-sm font-medium text-gray-400"
                >
                {
                  i18n.language === 'ar'? "سعر الكورس كامل" : " Full Courses price"
                }
                 
                </label>
                <input
                  type="number"
                  id="CoursesPrice"
                  {...register("CoursesPrice", {
                    required: t("application.priceRequiredFull"),
                  })}
                  className={`border-2 mt-2 w-full rounded-lg shadow-sm sm:text-sm p-2 text-gray-600 font-semibold placeholder:font-normal focus-within:outline-gray-200 bg-[#EFEFEF] ${
                    errors.CoursesPrice ? "border-red-500" : "border-[#EFEFEF]"
                  }`}
                  rows="4"
                  placeholder={t("application.priceFull") }
                ></input> 
                {errors.CoursesPrice && (
                  <p className="text-red-500 text-sm">
                    {errors.CoursesPrice.message}
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
                  onChange={(e) => {
                    const selectedSchool = schoolsData.data.find(
                      (school) => school.id === e.target.value
                    );
                    setSelectedSchoolType(selectedSchool);
                    setSelectedGrade(null); // Reset selected grade
                  }}
                >
                  <option value="">{t("application.selectSchoolType")}</option>
                  {schoolsData?.data?.map((school) => (
                    <option key={school.id} value={school.id}>
                      {i18n.language === "ar" ? school.name_ar : school.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Grades Dropdown */}
              {selectedSchoolType && (
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
                    onChange={(e) => {
                      const selectedGrade = selectedSchoolType.grades.find(
                        (grade) => grade.id === e.target.value
                      );
                      setSelectedGrade(selectedGrade);
                    }}
                  >
                    <option value="">{t("application.selectGrade")}</option>
                    {selectedSchoolType.grades?.map((grade) => (
                      <option key={grade.id} value={grade.id}>
                        {i18n.language === "ar" ? grade.name_ar : grade.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Subjects Dropdown */}
              {selectedGrade && (
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
                    {...register("subject", {
                      required: t("application.fieldRequired"),
                    })}
                  >
                    <option value="">{t("application.selectSubject")}</option>
                    {selectedGrade.subjects?.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {i18n.language === "ar"
                          ? subject.name_ar
                          : subject.name}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-start items-start gap-4 flex-col">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="courseStatus"
                  value="notFinished"
                  checked={!isCourseFinished}
                  onChange={() => setIsCourseFinished(false)}
                />
                <span className="font-medium">
                  {t("courseManagement.statusOfAddCourse")}
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="courseStatus"
                  value="finished"
                  checked={isCourseFinished}
                  onChange={() => setIsCourseFinished(true)}
                />
                <span className="font-medium">
                  {t("courseManagement.statusOfCourseFinished")}
                </span>
              </label>
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
                disabled={courseLoading}
                className={`w-full lg:w-1/2 lg:mt-5 rounded flex items-center justify-center ${courseLoading ? "bg-white":"bg-primary"} px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300`}
              >
                 {courseLoading ? (
                              <ImSpinner9 className="animate-spin text-3xl text-secondary text-center" />
                            ) : (
                              t("application.continue")
                            )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplicationSection;
