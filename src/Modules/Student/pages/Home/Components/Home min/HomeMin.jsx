import { FaPlayCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function HomeMin() {
  const HomeMin = [
    {
      id: "Personalized",
      Name: "Math ",
      dec: "3. Introduction to subtraction",
      img: "images/hero/88bda3f5e8251f816cf6fbad299c1495.jpeg",
    },
    {
      id: "Expert",
      Name: "English",
      dec: "4. Conversation",
      img: "images/hero/b3e1eb33bbb37fa47b995b39e56d9eb2.png",
    },
    {
      id: "Interactive",
      Name: "Science",
      dec: "5. The cell",
      img: "images/hero/224001c9565c195e993e6ec692025720.jpeg",
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
              className="col-span-3 lg:col-span-4 "
              key={item.id}
            >
              {/* img */}
              <Link to={"/mylearning/course/Science"}>
                <div className="group block overflow-hidden relative rounded-3xl hover:cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.Name}
                    className="w-full h-36 md:h-44 lg:h-72 object-cover rounded-3xl opacity-70 blur-[1px] group-hover:scale-110 group-hover:opacity-30 transition duration-500 ease-in-out"
                  />
                 
                  <span className="  text-white flex items-center justify-center w-12 lg:w-16 pl-1  h-12 lg:h-16  rounded-full  bg-rose-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">

                  <FaPlay className="text-3xl lg:text-4xl"/>
                  </span>
                </div>
              </Link>
              {/* Text */}
              <div className="font-semibold text-white mt-1 lg:mt-4 ">
                <p className="text-sm sm:text-base lg:text-lg">{item.Name}</p>

                <h3 className="text-sm sm:text-base lg:text-lg ">{item.dec}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
