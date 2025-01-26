import { useDispatch, useSelector } from "react-redux";
import Courses from "./components/Courses";
import LearningHero from "./components/LearningHero";
import { useEffect } from "react";
import { fetchstudentCourses } from "../../../../Redux/data/studentCourses";

export default function MyLearning() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchstudentCourses());
  }, [dispatch]);

  // Select data, status, and error from Redux store
  const { data, status, error } = useSelector((state) => state.studentCourses);
  console.log(data?.data);

  return (
    <>
      <LearningHero />
      <div className="min-h-screen w-full pt-8 container md:w-custom-md xl:w-custom-xl mx-auto 3">
        <Courses />
      </div>
    </>
  );
}