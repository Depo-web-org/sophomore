import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../../../Redux/wishlist/wishlistSlice";
import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard";
import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";
import { useGetSubjectTeachersQuery } from "../../../../Redux/data/getDataApiSlice";
import { baseUrl } from "../../../../App";
import { useTranslation } from "react-i18next";

const Teachers = () => {
  const { schoolName, gradeName, subjectName } = useParams();
  const { data, isLoading } = useGetSubjectTeachersQuery(subjectName);
  const teachersData = data?.data?.providers;
  const subjectData = data?.data?.subject;
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const handleToggleWishlist = (teacher) => {
    const isSelected = wishlist?.some(
      (item) => item.id === teacher.id && item.subjectID === subjectData.id
    );
    if (isSelected) {
      dispatch(removeFromWishlist({ id: teacher.id, subjectID: subjectData.id }));
    } else {
      dispatch(
        addToWishlist({
          id: teacher.id,
          first_name: teacher.first_name,
          grade: subjectData?.grade_data?.grade_no,
          subject: subjectData?.name,
          subjectID: subjectData?.id,
          path: teacher?.path,
          photo: teacher?.photo,
          isSelected: true,
        })
      );
    }
  };
  console.log(teachersData)
  return (
    <section className="min-h-screen py-24 lg:py-32 container w-full md:w-custom-md xl:w-custom-xl mx-auto ">
      {/* <Breadcrumbs /> */}
{
  teachersData ? <>
  <h2 className="text-white text-lg lg:text-4xl font-semibold pb-4 md:pb-10 xl:pb-20">
        {i18n.language === "ar" ? "أي مدرس تريد ؟" : "  Which Teacher do you want?"}
      </h2>
      <div className="grid grid-cols-6 w-full lg:grid-cols-12 gap-4 items-center justify-center">
        {isLoading ? (
          <div className="col-span-12 w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          teachersData?.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              name={teacher.first_name}
              subject={subjectData.name}
              subjectAr={subjectData.name_ar}
              grade={subjectData.grade_data.grade_no}
              gradeAr={subjectData.grade_data.name_ar}              
              handleToggleWishlist={() => handleToggleWishlist(teacher)}
              wishlist={wishlist}
              subjectID={subjectData.id}
            />
          ))
        )}
      </div>
  </> :<div className="relative   bg-primary p-2 lg:p-6 text-center rounded-md h-32 flex justify-center items-center">
        <h3 className="mt-4 text-sm lg:text-lg  text-white font-semibold">
          {i18n.language === "ar"
            ? "لم يتم إضافة معلمين لهذا الكورس بعد ."
            : "No teachers have been added to this course yet ."}
        </h3>
      </div>
}
      
    </section>
  );
};

export default Teachers;


function Love({ isSelected }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={isSelected ? "red" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={isSelected ? "0" : "1.5"}
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}
export function TeacherCard({
  subject,
  grade,
  teacher,
  handleToggleWishlist,
  wishlist,
  subjectID,
  subjectAr,
  gradeAr,
}) {
  const isSelected = wishlist?.some(
    (item) => item.id === teacher.id && item.subjectID === subjectID
  );
  const { i18n } = useTranslation();

  const { schoolName, gradeName, subjectName } = useParams();

  return (
    <div className="col-span-3 lg:col-span-4 items-center justify-center rounded-md transition hover:shadow-[4px_4px_0px_0px_#F15C54]">
      
      <div className="group relative block overflow-hidden rounded-md">
        <button
          onClick={handleToggleWishlist}
          className="absolute end-2 lg:end-4 top-2 lg:top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 hover:text-red-900/75"
        >
          <Love isSelected={isSelected || teacher.isSelected} />
        </button>
        <img
          src={teacher?.photo ? `${baseUrl}${teacher?.path}${teacher?.photo}` : "data:image/png;base64,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"}
          alt={`${teacher.first_name} ${teacher.last_name}`}
          className="h-40 md:h-48 lg:h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="relative border border-gray-100 bg-white p-2 lg:p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700"> {i18n.language === "ar" ? subjectAr : subject}</p>
            <p className="text-sm text-gray-700">{i18n.language === "ar" ? gradeAr :grade}</p>
          </div>
          <h3 className="mt-4 text-center text-sm lg:text-lg font-medium text-gray-900 uppercase">
            {teacher.first_name} {teacher.last_name}
          </h3>
          <Link
            to={`/school/${schoolName}/grade/${gradeName}/subject/${subjectName}/teacher/${teacher.id}`}
          >
            <button className="block w-full mt-4 rounded bg-primary hover:bg-secondary text-white p-2 lg:p-4 text-sm font-medium transition hover:scale-105">
              
              {i18n.language === "ar" ? "عرض" : "View"}
            </button>


          </Link>

        </div>
      </div>
    </div>
  );
}