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
      <section className=" text-white my-10 ">

        <div className="py-5">
          <div className="flex justify-between">
            <span className="font-bold text-lg md:text-4xl">
              Let&apos;s Continue learning
            </span>
            <p className="text-sm font-medium border-b-2 border-b-slate-700 pt-3 hover:cursor-pointer">
              My learning
            </p>
          </div>
          <p className="text-sm font-medium ">Pick up from where you left</p>
        </div>

        <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 items-center justify-center">
          {HomeMin.map((item) => (
            <div
              className="col-span-6 md:col-span-3 lg:col-span-4"
              key={item.id}
            >
              {/* img */}
              <div className="group block overflow-hidden rounded-3xl">
                <img
                  src={item.img}
                  alt={item.Name}
                  className="w-full h-44 sm:h-48 lg:h-60 object-cover rounded-3xl group-hover:scale-110 group-hover:opacity-30 transition duration-500 ease-in-out"
                />
              </div>
              {/* Text */}
              <div className="font-semibold text-white mt-3 ps-2">
                <p className="text-lg">{item.Name}</p>

                <h3 className="text-lg">{item.dec}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
