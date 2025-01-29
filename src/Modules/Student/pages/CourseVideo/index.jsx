import React, { useEffect } from "react";
import CourseInfos from "./components/CourseInfos/CourseInfos";
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function EnrolledCourse() {
  const{state}=useLocation()
  const navigate = useNavigate();
  const {lessonID, courseID}= useParams();

  // useEffect(() => {
  //   // Navigate to the first lesson automatically when entering the course page
  //   navigate(`/mylearning/course/${courseID}/lesson/${lessonID}`);
  // }, [courseID, navigate]);

  return (
    <div className="min-h-screen  w-full pt-24 container md:w-custom-md xl:w-custom-xl mx-auto 3 ">
      <div className="flex flex-1  flex-col lg:flex-row ">
        <div className="w-full flex justify-center lg:w-2/3   ">
       <Outlet/>
       </div>
       <div className="lg:w-1/3 w-full ">
       <LessonsPaginator/>
       </div>
      </div>
    </div>
  );
}

const LessonsPaginator = () => {
  const { state: lessonsNum } = useLocation(); 
  const { t } = useTranslation();
  const ReversedLesson = lessonsNum.reverse();

  return (
    <div className=" rounded-lg p-2 lg:p-6 w-full  mb-10 hover:shadow-[6px_6px_0px_0px_#F15C54] duration-150 transition-all shadow-[4px_4px_0px_0px_#F15C54]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-white">{t("choose_lesson")}</h1>
      </div>

      <div className=" space-y-4">
        {lessonsNum?.map((lesson, index) => {
          return(
          <NavLink
            key={lesson.id}
            to={`lesson/${lesson.id}`}
            state={lessonsNum }
            className="flex items-center gap-2 bg-slate-900 rounded-lg px-2 lg:px-4 py-2 text-white hover:bg-slate-700  flex-wrap "
          >
            <p className=" text-base ">Lesson {index + 1}: </p>
            <p className=" text-sm ">{lesson.title}</p>
          </NavLink>)
        })}
      </div>

    </div>
  );
};
