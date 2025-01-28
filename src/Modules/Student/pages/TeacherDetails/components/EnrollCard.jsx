import { useMemo, useState } from "react";
import ModalPackages from "./ModalPackages";
import ModalOops from "./ModalOops";
import { ModalUnits } from "./ModalUnits";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../../Redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useGetStudentCoursesQuery } from "../../../../../Redux/data/getDataApiSlice";

export default function EnrollCard() {
  const { teacher, subject, course } = useSelector((state) => state.courseInformation); 
const dispatch=useDispatch()
const navigate = useNavigate();
  const { t } = useTranslation();
  const [isModalOopsOpen, setIsModalOopsOpen] = useState(false);
  const [isModalPackagesOpen, setIsModalPackagesOpen] = useState(false);
  const [isModalUnitsOpen, setIsModalUnitsOpen] = useState(false);

      const cartItems = useSelector((state) => state.cart.items);
      console.log(course)
        const {data, isLoading, isError}= useGetStudentCoursesQuery()
        // console.log(data?.data);

        const isEnrolled = useMemo(() => {
          if (!isLoading && !isError && data) {
            const coursesEnrolled = data.data?.flatMap((course) => course?.items.map((item) => item.course));
            return coursesEnrolled?.includes(course.id);
          }
          return false; // Default to false if data is unavailable
        }, [data, isLoading, isError, course?.id]);
        console.log(isEnrolled)

        
  const handleButtonClick = () => {
    // setIsModalUnitsOpen(false);
    // setIsModalPackagesOpen(false);
    // setIsModalOopsOpen(true);

  };
  // Define CourseInfo object
  const CourseInfo = {
    teacherName: `${teacher?.first_name} ${teacher?.last_name}`,
    subjectName: subject?.name,
    courseName: course?.title,
    id: course?.id,
    courseImage: teacher?.photo,
    imagePath: teacher?.path,
    gradeName: subject?.grade_data?.grade_no,
    price: course?.price, // Price of the course or lesson
    enrolledLessons: "full course",
    type: "course", // Default to "course"
  };

  // Handle adding to cart
  const handleAddToCart = (type = "course", lessonId = null) => {
    const itemToAdd = {
      ...CourseInfo,
      type,
      lessonsId: type === "lesson" ? [lessonId] : [], // Set lessonsId for lessons
    };

    dispatch(addToCart(itemToAdd));
  };

  // Handle buying full course
  const handleBuyFullCourse = () => {
    handleAddToCart("course")
    navigate("/cart"); // Navigate to cart page
  };


  const isSelected = cartItems?.some(
    (item) => item.id === CourseInfo.id );
    console.log(isSelected)

  const handleUnitsPackages = () => {
    setIsModalPackagesOpen(false);
    setIsModalUnitsOpen(true);
  };
  const handleModalPackages = () => {
    setIsModalPackagesOpen(true);
  };
  return (
    <>
      <div className=" w-full md:min-w-[376px]  bg-slate-600 bg-opacity-25 border border-slate-700 rounded-lg flex flex-col justify-start items-start gap-2 p-4 shadow-[4px_4px_0px_0px_#F15C54] mb-6">
        <p className="text-base lg:text-lg font-semibold lg:leading-[27px] text-primary uppercase">
        {/* {t('course_title')} */}
        {course?.title}
        </p>
        <p className=" text-sm lg:text-base  lg:pt-3 font-normal lg:leading-[18.75px] text-[#FFFFFF66]">
        {/* {t('course_description')} */}
        {course?.notes}
        </p>
        <div className="flex flex-col items-start justify-start gap-4 pt-2 lg:pt-4">
          <div className="flex items-center justify-center gap-1 lg:gap-2  ">
            <img
              src="/images/TeacherDetails/Frame.svg"
              alt="Duration icon"
            />
            <p className="text-sm lg:text-base font-normal leading-[18.75px] text-white">
            {t('duration')}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/TeacherDetails/Frame (1).svg"
              alt="Sessions icon"
            />
            <p className="text-sm lg:text-base  font-normal leading-[18.75px] text-white">
            {t('session_type')}
            </p>
          </div>
{      !isEnrolled&&    <div className="flex items-center justify-center gap-3 lg:gap-5 min-w-full flex-wrap">
          <button
  disabled={isSelected}
  className={`rounded-md text-sm  lg:text-base p-2   text-white ${
    isSelected ? "bg-gray-400 cursor-not-allowed" : "buttonHover cursor-pointer"
  }`}
  onClick={handleBuyFullCourse}
>
                  {t('enroll_now')}
            </button>
            <button
              className="bg-white cursor-pointer text-primary rounded-md text-sm  lg:text-base p-2  hover:bg-primary hover:text-white duration-200 transition-all"
              onClick={() => handleAddToCart("course")} 
            >
              {isSelected?'already in cart': t('add_to_cart')} 
          
            </button>
          </div>}
        </div>
      </div>

      {isModalOopsOpen && !localStorage.getItem('Token') && <ModalOops setIsModalOopsOpen={setIsModalOopsOpen} />}
      {isModalPackagesOpen && (
        <ModalPackages
          setIsModalPackagesOpen={setIsModalPackagesOpen}
          handleUnitsPackages={handleUnitsPackages}
          handleButtonClick={handleButtonClick}
        />
      )}
      {isModalUnitsOpen && (
        <ModalUnits
          setIsModalUnitsOpen={setIsModalUnitsOpen}
          handleButtonClick={handleButtonClick}
        />
      )}
    </>
  );
}
