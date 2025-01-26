import { useTranslation } from "react-i18next";
import LearningCard from "./LearningCard";
import { useSelector } from "react-redux";

export default function Courses() {
  const { t } = useTranslation(); // Initialize the translation hook
  const { data, status, error } = useSelector((state) => state.studentCourses);
  console.log(data?.data[0].items);
  const coursesData = data?.data[0]?.items; // Accessing courses data

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col gap-4 ">
        <p className="text-2xl font-semibold text-white py-8">
          {t("courses.not_finished_yet")}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {coursesData?.map((course) => (
            <LearningCard
              key={course.id} // Using course.id as key
              course={course}
              image={course.course_data_object?.image || "/images/MyLearning/subject1.webp"} // Make sure you adjust this according to the available image data in your coursesData
              path={`/mylearning/course/${course?.course_data_object.title}`}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 py-2 border-t border-gray-500">
        <p className="text-2xl font-semibold text-white py-8">
          {t("courses.finished_courses")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coursesData?.map((course) => (
            <LearningCard
              key={course.id} // Using course.id as key
              course={course}
              image={course.course_data?.image || "/images/MyLearning/subject1.webp"} // Make sure you adjust this according to the available image data in your coursesData
              path={`/mylearning/course/${course.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
