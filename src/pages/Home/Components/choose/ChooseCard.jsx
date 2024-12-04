export default function ChooseCard() {
  const Sophomore = [
    {
      id: "Personalized",
      Name: "Personalized Learning Paths",
      dec: "Customized curriculum based on your goals and current skill level",
      img: "/public/Schools/Group-1.svg",
    },
    {
      id: "Expert",
      Name: "Expert Instructors",
      dec: "Learn from industry professionals with real-world experience",

      img: "/public/Schools/Icon-2.svg",
    },
    {
      id: "Interactive",
      Name: "Interactive Content",
      dec: "Engage with hands-on projects and real-time feedback",

      img: "/public/Schools/Icon-3.svg",
    },
  ];

  return (
    <section className="min-h-[498px] py-7">
      <div className="text-white pb-4">
        <p className=" text-2xl lg:text-4xl font-bold leading-10 ">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-primary  via-primary uppercase   to-secondary bg-clip-text text-transparent inline-block">
            Sophomore
          </span>
        </p>
      </div>
      <div className="flex justify-center md:justify-between items-center flex-wrap  md:flex-row gap-4 pt-6 ">
        {Sophomore.map((item) => {
          return (  <div
                key={item.id}
                className="w-80 md:min-w-96 min-h-[292px] md:min-h-[350px]  xl: rounded-[5px] bg-white cursor-pointer flex  flex-col items-center  justify-center gap-y-5 p-5"
              >
                <div>
                  <img
                    src={item.img}
                    alt={item.Name}
                    className="size-20 xl:size-32  object-cover rounded-md"
                  />
                </div>

                <p className="text-base xl:text-xl  font-medium leading-[18.75px] text-center text-black ">
                  {item.Name}
                </p>
                <p className="text-sm xl:text-lg font-normal leading-[16.41px] text-center text-[#0000007D] ">
                  {item.dec}
                </p>
              </div>
          );
        })}
      </div>
    </section>
  );
}
