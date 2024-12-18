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

const ChooseCard = () => {
  return (
    <section className="min-h-[498px] pb-8 lg:pb-20  ">
      <div className="text-white pb-4 lg:pb-8">
        <p className=" text-2xl lg:text-4xl font-bold md:leading-10  inline text-nowrap">
          Why Choose
          <span className=" text-lg lg:text-4xl mx-1 bg-gradient-to-r from-primary  via-primary uppercase   to-secondary bg-clip-text text-transparent inline-block">
            Sophomore
          </span>
        </p>
      </div>
      <div className="flex justify-center md:justify-between items-center flex-wrap  md:flex-row gap-4 pt-6 ">
        {Sophomore.map((item) => {
          return (
            <div
              key={item.id}
              className="sm:h-60 xl:h-auto w-full flex-initial sm:flex-auto md:flex-1 rounded-[5px] bg-white cursor-pointer flex  flex-col items-center  justify-center  lg:gap-y-5 py-6 px-4 xl:py-14 xl:px-8"
            >
              <div>
                <img
                  src={item.img}
                  alt={item.Name}
                  className="size-16 md:size-20 xl:size-32  rounded-md"
                />
              </div>
              <div className="text-sm sm:text-sm xl:text-lg font-normal text-center">
                <p className="leading-[18.75px]  py-1 text-black">{item.Name}</p>
                <p className="leading-[16.41px]  pt-1 text-[#0000007D]">{item.dec}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ChooseCard;
