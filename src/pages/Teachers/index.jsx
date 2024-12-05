/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import useFetch from "../../Hooks/UseFetch";

const Teachers = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, error, loading } = useFetch(
    "https://os1907.github.io/Schools//grades/subject/Teacher/Teacher.json"
  );
  const { gradeName, schoolName, subjectName } = useParams();

  return (
    <>
      <section className="min-h-screen   py-32 container w-full md:w-custom-md xl:w-custom-xl mx-auto ">
        <div>
          <h2 className="text-white  text-lg lg:text-4xl font-semibold pb-4 md:pb-10 xl:pb-20">
            What Subject do you want ?
          </h2>
        </div>
        <div className="grid grid-cols-6w-full lg:grid-cols-12 gap-4 items-center justify-center">
          {data?.Teacher.map((teacher) => (
            <div
              className=" col-span-6 md:col-span-3 lg:col-span-4 items-center justify-center"
              key={teacher.id}
            >
              <div className="max-w-[420px]">
                <div className="group relative block overflow-hidden rounded-md">
                  <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                    <span className="sr-only">Wishlist</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
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
                    src="https://s3-alpha-sig.figma.com/img/c6cc/c303/5f3463c46702ca958707ee622be1a7cf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SQ7DSyC836TLL5OJbQBdNnrTh5KQxOcVTNontmE8mm3e7GokLGf636amy86SKe7dtQYxe5001VaO0yPn-ASA14mSX7qKbBY4Jp8KG3Y4NQbKyMPwi0mI~iG8Ca0shRhSghWOW5d7j6Q9~F4r-rrsDxn~6oW-hTo7NkASP6~d6rC6uTbpoNtr3fK9NqhV6Uz0c1Qur8gK2ZVwKvAvbHAZiff3pfE75EelZKyHImd4W4seZ5szu4v8N8U92OE~bgmUs6~zN8rqUOaaNeFdBCTAz-Wvy6n178pn0V0v-qhS1guv~0nU6nP5k2uUOh5g8AGyxyvnPSaG3tgSfRquDnsGFw__"
                    alt=""
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />

                  <div className="relative border border-gray-100 bg-white f p-6">
                    <div className="flex items-center justify-between">
                      <p className="mt-1.5 text-sm text-gray-700">
                        {subjectName}
                      </p>
                      <p className="mt-1.5 text-sm text-gray-700">
                        {gradeName}
                      </p>
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
          ))}
        </div>
      </section>
    </>
  );
};

export default Teachers;
