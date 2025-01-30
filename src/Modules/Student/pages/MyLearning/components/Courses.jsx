import { useTranslation } from "react-i18next";
import LearningCard from "./LearningCard";
import { useSelector } from "react-redux";
import { useGetStudentCoursesQuery } from "../../../../../Redux/data/getDataApiSlice";
import CoursesSkeleton from "./Skeleton";
import { useParams } from "react-router-dom";



export const parseJSONSafely = (jsonString) => {
  try {
    if (typeof jsonString !== "string") return jsonString; 
    // eslint-disable-next-line no-control-regex
    const cleanedString = jsonString.replace(/[\u0000-\u001F\u007F]/g, ""); 
    return JSON.parse(cleanedString);
  } catch (error) {
    console.error("خطأ في تحليل JSON:", error);
    return null; // تجنب كسر التطبيق في حالة حدوث خطأ
  }
};

export default function Courses() {
  const { t, i18n } = useTranslation();
  const params = window.location.pathname;
  const { data, isLoading, isError } = useGetStudentCoursesQuery();
  const ordersData = data?.data;

  if (isLoading) {
    return <CoursesSkeleton />;
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col gap-4">
        {params !== "/" && (
          <p className="text-2xl font-semibold text-white py-4 lg:py-8">
            {i18n.language === "ar" ? " دروسي " : " My courses"}
          </p>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {params !== "/"
            ? ordersData?.map((order) =>
                order?.items?.map((item) => {
                  const contentDataObject = parseJSONSafely(item?.content_data);
                  const contents =
                    item?.contents.length > 0
                      ? item?.contents
                      : [contentDataObject];

                  return (
                    <LearningCard
                      key={item.id}
                      course={item?.course_data_object}
                      contents={contents}
                      image={
                        item?.course_data_object?.image ||
                        "/images/MyLearning/subject1.webp"
                      }
                      path={`/mylearning/course/${item?.course_data_object?.id}/lesson/${contents[0]?.id}`}
                    />
                  );
                })
              )
            : ordersData
                ?.slice(0, 2)
                ?.map((order) =>
                  order.items.map((item) => {
                    const contentDataObject = parseJSONSafely(
                      item?.content_data
                    );
                    const contents =
                      item?.contents.length > 0
                        ? item?.contents
                        : [contentDataObject];

                    if (contents[0] === null) {
                      return null;
                    }

                    return (
                      <LearningCard
                        key={item.id}
                        course={item?.course_data_object}
                        contents={contents}
                        image={
                          item?.course_data_object?.image ||
                          "/images/MyLearning/subject1.webp"
                        }
                        path={`/mylearning/course/${item?.course_data_object?.id}/lesson/${contents[0]?.id}`}
                      />
                    );
                  })
                )}
        </div>
      </div>
    </div>
  );
}
