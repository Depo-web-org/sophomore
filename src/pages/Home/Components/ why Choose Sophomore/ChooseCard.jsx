export default function ChooseCard() {
  const Sophomore = [
    {
      id: "Personalized",
      Name: "Personalized Learning Paths",
      dec: "Customized curriculum based on your goals and current skill level",
      img: "/public/Schools/Group-1.svg",
    },
    // {
    //   id: "Expert",
    //   Name: "Expert Instructors",
    //   img: "/public/Schools/Icon-2.svg",

    // },
    // {
    //   id: "Interactive",
    //   Name: "Interactive Content",
    //   img: "/public/Schools/Icon-3.svg",

    // },
  ];

  return (
    <section className="min-h-screen">
      <div className="text-white pb-4">
        <span className="block text-2xl lg:text-4xl font-bold leading-10">
          Why Choose Sophomore
        </span>
      </div>

      <div className="w-96 bg-white cursor-pointer flex flex-col items-center justify-center">
        {Sophomore.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-full h-36 flex justify-center items-center bg-red-300">
                <img
                  src={item.img}
                  alt={item.Name}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>

              <div className="bg-blue-400  text-black font- normal text-center w-full pb-10">
                  <span className="font-bold text-md block ">{item.Name}</span>
                  <span className="text-md font-medium ">{item.dec}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
