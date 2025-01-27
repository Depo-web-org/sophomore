import { useTranslation } from "react-i18next";
import LearningCard from "./LearningCard";
import { useSelector } from "react-redux";
import { useGetStudentCoursesQuery } from "../../../../../Redux/data/getDataApiSlice";

export default function Courses() {
  const { t } = useTranslation(); // Initialize the translation hook
  // const { data, status, error } = useSelector((state) => state.studentCourses);
  const {data, isLoading, isError}= useGetStudentCoursesQuery()
  console.log(data?.data);
  const ordersData = data?.data // Accessing courses data

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col gap-4 ">
        <p className="text-2xl font-semibold text-white py-8">
          My courses
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {ordersData?.map((order) =>
  order?.items?.map((item) => (
    <LearningCard
      key={item.id} // Using course.id as key
      course={item?.course_data_object}
      contents={item?.contents}
      image={item?.course_data_object?.image || "/images/MyLearning/subject1.webp"}
      path={`/mylearning/course/${item?.course_data_object.id}`}
    />
  ))
)
}
        </div>
      </div>

    </div>
  );
}


