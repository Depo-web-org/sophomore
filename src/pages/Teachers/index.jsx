/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import useFetch from "../../Hooks/UseFetch";
import Breadcrumbs from "../../Components/Common/BreadCrumbs/Breadcrumbs";
import { useState } from "react";
import { SkeletonCard } from "../../Components/Common/SkeletonCard/SkeletonCard";

const Teachers = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, error, loading } = useFetch(
    "https://os1907.github.io/Schools//grades/subject/Teacher/Teacher.json"
  );
  const { gradeName, schoolName, subjectName } = useParams();
  const [isSelecteted, setIsSlected] = useState(false);

  return (
    <>
      <section className="min-h-screen   py-32 container w-full md:w-custom-md xl:w-custom-xl mx-auto ">
        <Breadcrumbs />

        <div>
          <h2 className="text-white  text-lg lg:text-4xl font-semibold pb-4 md:pb-10 xl:pb-20">
            Which Teacher do you want ?
          </h2>
        </div>
        <div className="grid grid-cols-6 w-full lg:grid-cols-12 gap-4 items-center justify-center">
          { data?  data?.Teacher.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              gradeName={gradeName}
              schoolName={schoolName}
              subjectName={subjectName}
              teacher={teacher}
              isSelecteted={false}
            />
          )) : <div className=" w-full  col-span-6 lg:col-span-12 grid grid-cols-1 lg:grid-cols-3 "><SkeletonCard/></div>
        }
        </div>
      </section>
    </>
  );
};
export function TeacherCard({
  gradeName,
  schoolName,
  subjectName,
  teacher,
  isSelecteted,
}) {
  return (
    <div className=" col-span-6 md:col-span-3 lg:col-span-4 items-center justify-center">
      <div className="max-w-[420px]">
        <div className="group relative block overflow-hidden rounded-md">
          <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
            <span className="sr-only">Wishlist</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isSelecteted ? "red" : "none"}
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
          </button>

          <img
            src="https://s3-alpha-sig.figma.com/img/c6cc/c303/5f3463c46702ca958707ee622be1a7cf?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T5x~sh73Q1i0dsSiFXOrTw~62kZaMWI52TMA4R~KKf1dTOwb1S0D2Z9L4uYcsk9pGhpIwF~smkTCbU0MleeGq5ibG8bIWNBcLDNcoi9ijh-i-AIeoRoY9j6uYJ9H2A8GsyAMwHAbMuNWxKknRNvPxoB3-Pkm9sfbgN-HzmacQ0~1toa3V0m-rfsjTxKleVCf~k~AAPdrh1y1KGUjtZdX3s0BhwKiH4eouH8CLXlBh7SSXd33hVdjq7JzA9kQM-l3vG0grV6U4aMAjCgMMIoGFm0kxaBdepFHFi9u~EpRE0zkhBMHAKyaskvJwS4vzKYva2HU5kc9I703BdoNMCPIdQ__"
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="relative border border-gray-100 bg-white f p-6">
            <div className="flex items-center justify-between">
              <p className="mt-1.5 text-sm text-gray-700">{subjectName}</p>
              <p className="mt-1.5 text-sm text-gray-700">{gradeName}</p>
            </div>

            <h3 className="mt-4 text-lg font-medium text-center text-gray-900">
              {teacher.name}
            </h3>

            <Link
              to={`/school/${schoolName}/grade/${gradeName}/subject/${subjectName}/teacher/${teacher.name}`}
            >
              <button className="block w-full mt-4 rounded bg-primary text-white p-4 text-sm font-medium transition hover:scale-105">
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
