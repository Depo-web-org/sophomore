import { RiDeleteBin6Line } from "react-icons/ri";
import courseSVG from "/images/Cart/Course.svg";
import { ImBin } from "react-icons/im";
import { useTranslation } from "react-i18next";

const CourseCard = ({ course }) => {
  const { i18n} = useTranslation(); 
  return (
    <>
      <div className={`bg-dark my-1 ${i18n.language === "en" ? "lg:rounded-ee-full lg:rounded-tt-full lg:rounded-r-full" :"lg:rounded-ss-full lg:rounded-bb-full lg:rounded-l-full"} py-3 shadow-sm shadow-gray-600 flex items-center  `}>
        <div className="container w-full md:w-custom-md  mx-auto flex  justify-between  ">
          {/* Div which have SVG and Course information */}
          <div className="flex  gap-x-3 items-center ">
            <div>
              <img src={courseSVG} alt="Grade" className="w-14 md:w-20" />
            </div>
            <div className="text-white ">
              <p className=" text-lg  md:text-xl lg:text-2xl font-medium">
                {course.subject}
              </p>
              <p className="font-medium  text-sm lg:text-base">
                {course.teacher}
              </p>
              <span className="text-gray-300 text-sm sm:text-base">
                {course.grade}
              </span>
            </div>
          </div>
          {/* Price and Delete */}
          <div className="flex flex-col items-center justify-between ">
            <span className="text-white text-base lg:text-xl font-medium block bg-primary px-2 rounded-full">
              {course.price} EGP
            </span>
            <span
              onClick={() => console.log(course)}
              className="text-secondary text-2xl md:text-3xl mb-3 cursor-pointer"
            >
              <RiDeleteBin6Line />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
