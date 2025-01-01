/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../../Hooks/UseFetch";
import { SkeletonCard } from "../../../../Components/Common/SkeletonCard/SkeletonCard";
import Breadcrumbs from "../../../../Components/Common/BreadCrumbs/Breadcrumbs";

const Teachers = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, error, loading } = useFetch(
    "https://os1907.github.io/Schools//grades/subject/Teacher/Teacher.json"
  );
  const { gradeName, schoolName, subjectName } = useParams();

  return (
    <>
      <section className="min-h-screen   py-24  lg:py-32 container w-full md:w-custom-md xl:w-custom-xl mx-auto  ">
        <Breadcrumbs />

        <div>
          <h2 className="text-white  text-lg lg:text-4xl font-semibold pb-4 md:pb-10 xl:pb-20">
            Which Teacher do you want ?
          </h2>
        </div>
        <div className="grid grid-cols-6 w-full lg:grid-cols-12 gap-4 items-center justify-center">
          {data ? (
            data?.Teacher.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                gradeName={gradeName}
                schoolName={schoolName}
                subjectName={subjectName}
                teacher={teacher}
                isSelecteted={false}
                image={teacher.imageUrl}
              />
            ))
          ) : (
            <div  className="col-span-12 w-full grid grid-cols-2 lg:grid-cols-3 gap-4 "> 
     <SkeletonCard/>
  </div>
          )}
        </div>
      </section>
    </>
  );
};

function Love(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.isSelecteted ? "red" : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
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
  gradeName,
  schoolName,
  subjectName,
  teacher,
  isSelecteted,
  image,
}) {
  return (
    <div className=" col-span-3 lg:col-span-4 items-center justify-center  rounded-md duration-200 transition-all hover:shadow-[4px_4px_0px_0px_#F15C54]  ">
      <div>
        <div className="group relative block overflow-hidden rounded-md ">
          <button className="absolute end-2 lg:end-4 top-2 lg:top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 ">
            <span className="sr-only">Wishlist</span>

            <Love isSelecteted={isSelecteted}/>
          </button>

          <img
            src="/images/TeacherDetails/Frame 38.png"
            alt="teacher profile"
            className="  h-40 md:h-48 lg:h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="relative border border-gray-100 bg-white f p-2 lg:p-6">
            <div className="flex items-center justify-between flex-wrap">
              <p className="mt-1.5 text-sm text-gray-700">{subjectName}</p>
              <p className="mt-1.5 text-sm text-gray-700">{gradeName}</p>
            </div>

            <h3 className="mt-4 text-sm lg:text-lg font-medium text-center text-gray-900 text-nowrap ">
              {teacher.name}
            </h3>

            <Link
              to={`/school/${schoolName}/grade/${gradeName}/subject/${subjectName}/teacher/${teacher.name}`}
            >
              <button className="block w-full mt-4 rounded bg-primary hover:bg-secondary text-white p-2 lg:p-4 text-sm font-medium transition duration-150 hover:scale-105">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
