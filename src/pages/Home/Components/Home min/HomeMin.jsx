export default function HomeMin() {
  const HomeMin = [
    {
      id: "Personalized",
      Name: "Math ",
      dec: "3. Introduction to subtraction",
      img: "/public/Video/imgVideo1.png",
    },
    {
      id: "Expert",
      Name: "English",
      dec: "4. Conversation",
      img: "/public/Video/imgVideo2.png",
    },
    {
      id: "Interactive",
      Name: "Science",
      dec: "5. The cell",
      img: "/public/Video/imgVideo3.png",
    },
  ];

  return (
    <>
      <section className="text-white  pt-8 container w-full md:w-custom-md xl:w-custom-xl mx-auto">
    
        <div className="py-5">
          <div className="flex justify-between items-center flex-wrap gap-y-2">

            <span className="text-2xl lg:text-3xl
          xl:text-4xl pb-1 sm:pb-2  font-bold">
              Let&apos;s Continue learning 
            </span>
            <p className="text-sm font-medium border-b-2 border-b-slate-700  hover:cursor-pointer hidden lg:block">
              My learning
            </p>
          </div>
          <p className="text-sm lg:text-base font-bold py-2 ">Pick up from where you left</p>
        </div>

        <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 items-center justify-center">
          {HomeMin.map((item) => (
            <div
              className="col-span-6 md:col-span-3 lg:col-span-4 hover:cursor-pointer"
              key={item.id}
            >
              {/* img */}
              <div className="group block overflow-hidden rounded-3xl">
                <img
                  src={item.img}
                  alt={item.Name}
                  className="w-full h-40  lg:h-48 xl:h-52 object-cover rounded-3xl group-hover:scale-110 group-hover:opacity-30 transition duration-500 ease-in-out"
                />
              </div>
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
