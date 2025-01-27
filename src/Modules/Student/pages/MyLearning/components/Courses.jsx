import { useTranslation } from "react-i18next";
import LearningCard from "./LearningCard";
import { useSelector } from "react-redux";
import { useGetStudentCoursesQuery } from "../../../../../Redux/data/getDataApiSlice";
import CoursesSkeleton from "./Skeleton";
import { useParams } from "react-router-dom";

export default function Courses() {
  const { t } = useTranslation(); // Initialize the translation hook
  // const { data, status, error } = useSelector((state) => state.studentCourses);
  const params=window.location.pathname
  console.log(params)
  const {data, isLoading, isError}= useGetStudentCoursesQuery()
  console.log(data?.data);
  const ordersData = data?.data // Accessing courses data
  if (isLoading){
    return(
      <CoursesSkeleton/>
    )
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col gap-4 ">
        {
          params !=='/' &&<p className="text-2xl font-semibold text-white py-8">
          My courses
        </p>
        }
        
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {ordersData?.map((order) =>
  order.items.map((item) => {
    const contents= item?.contents.length>0?item?.contents:[item?.content_data_object];
    return(
    
    <LearningCard
      key={item.id} // Using course.id as key
      course={item?.course_data_object}
      contents={contents}
      image={item?.course_data_object?.image || "/images/MyLearning/subject1.webp"}
      path={`/mylearning/course/${item?.course_data_object.id}/lesson/${contents[0]?.id}`}
    />
  )})
)
}
        </div>
      </div>

    </div>
  );
}


