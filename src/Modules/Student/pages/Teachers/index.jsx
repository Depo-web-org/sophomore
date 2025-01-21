import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../../../Redux/wishlist/wishlistSlice";
import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard";
import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";
import { useGetSubjectTeachersQuery } from "../../../../Redux/data/getDataApiSlice";
import { baseUrl } from "../../../../App";

const Teachers = () => {
  const { schoolName, gradeName, subjectName } = useParams();
  const { data, isLoading } = useGetSubjectTeachersQuery(subjectName);
  const teachersData = data?.data?.providers;
  const subjectData = data?.data?.subject;

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

  return (
    <section className="min-h-screen py-24 lg:py-32 container w-full md:w-custom-md xl:w-custom-xl mx-auto">
      <Breadcrumbs />
      <h2 className="text-white text-lg lg:text-4xl font-semibold pb-4 md:pb-10 xl:pb-20">
        Which Teacher do you want?
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
              grade={subjectData.grade_data.grade_no}
              handleToggleWishlist={() => handleToggleWishlist(teacher)}
              wishlist={wishlist}
              subjectID={subjectData.id}
            />
          ))
        )}
      </div>
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
}) {
  const isSelected = wishlist?.some(
    (item) => item.id === teacher.id && item.subjectID === subjectID
  );

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
          src={`${baseUrl}/${teacher.path}/${teacher.photo}`}
          alt="teacher profile"
          className="h-40 md:h-48 lg:h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="relative border border-gray-100 bg-white p-2 lg:p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700"> {teacher.subject || subject}</p>
            <p className="text-sm text-gray-700">{teacher.grade || grade}</p>
          </div>
          <h3 className="mt-4 text-center text-sm lg:text-lg font-medium text-gray-900">
            {teacher.first_name}
          </h3>
          <Link
            to={`/school/${schoolName}/grade/${gradeName}/subject/${subjectName}/teacher/${teacher.name}`}
          >
            <button className="block w-full mt-4 rounded bg-primary hover:bg-secondary text-white p-2 lg:p-4 text-sm font-medium transition hover:scale-105">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
