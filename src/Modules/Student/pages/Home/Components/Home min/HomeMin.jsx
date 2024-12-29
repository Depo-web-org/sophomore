import { Link } from "react-router-dom";

export default function HomeMin() {
  const HomeMin = [
    {
      id: "Personalized",
      Name: "Math ",
      dec: "3. Introduction to subtraction",
      img: "/hero/88bda3f5e8251f816cf6fbad299c1495.jpeg",
    },
    {
      id: "Expert",
      Name: "English",
      dec: "4. Conversation",
      img: "/hero/b3e1eb33bbb37fa47b995b39e56d9eb2.png",
    },
    {
      id: "Interactive",
      Name: "Science",
      dec: "5. The cell",
      img: "/hero/224001c9565c195e993e6ec692025720.jpeg",
    },
  ];

  return (
    <>
      <section className="text-white  pt-8 container w-full md:w-custom-md xl:w-custom-xl mx-auto">
        <div className="py-5">
          <div className="flex justify-between items-center flex-wrap gap-y-2">
            <span
              className="text-2xl lg:text-3xl
          xl:text-4xl pb-1 sm:pb-2  font-bold"
            >
              Let&apos;s Continue learning
            </span>
            <p className="text-sm font-medium border-b-2 border-b-slate-700  hover:cursor-pointer hidden lg:block">
              My learning
            </p>
          </div>
          <p className="text-sm lg:text-base font-bold py-2 ">
            Pick up from where you left
          </p>
        </div>

        <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 items-center justify-center">
          {HomeMin.map((item) => (
            <div
              className="col-span-6 md:col-span-3 lg:col-span-4 "
              key={item.id}
            >
              {/* img */}
              <Link to={"/mylearning/course/Science"}>
                <div className="group block overflow-hidden relative rounded-3xl hover:cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.Name}
                    className="w-full h-72 object-cover rounded-3xl opacity-70 blur-[1px] group-hover:scale-110 group-hover:opacity-30 transition duration-500 ease-in-out"
                  />
                  <img
                    src="public/Frame.svg"
                    alt="you"
                    className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                  />{" "}
                </div>
              </Link>
              {/* Text */}
              <div className="font-semibold text-white mt-1 lg:mt-3 ps-2">
                <p className="text-base lg:text-lg">{item.Name}</p>

                <h3 className="text-base lg:text-lg">{item.dec}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
