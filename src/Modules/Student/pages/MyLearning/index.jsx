import { useDispatch, useSelector } from "react-redux";
import Courses from "./components/Courses";
import LearningHero from "./components/LearningHero";
import { useEffect } from "react";
import { fetchstudentCourses } from "../../../../Redux/data/studentCourses";

export default function MyLearning() {

  return (
    <>
      <LearningHero />
      <div className="min-h-screen w-full pt-8 container md:w-custom-md xl:w-custom-xl mx-auto 3">
        <Courses />
      </div>
    </>
  );
}