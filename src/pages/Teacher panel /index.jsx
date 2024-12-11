import React from "react";

const Teacher = () => {
  const cardteacher = [
    {
      id: "item1",
      name: "CV",
      img: "/public/Teacher/CardTeacher_1.svg",
    },
    {
      id: "item2",
      name: "Graduation , Certificate",
      img: "/public/Teacher/CardTeachet_2.svg",
    },
    {
      id: "item3",
      name: "Intro ,  Video",
      img: "/public/Teacher/CardTeachet_3.svg",
    },
    {
      id: "item4",
      name: "Additional , Documents",
      img: "/public/Teacher/CardTeachet_4.svg",
    },
  ];

  return (
    <>
      <div className="relative ">
        <img
          className=" "
          src="/public/Teacher/Teacher panel.svg"
          alt="Teacher"
        />

        <div className="absolute inset-0 bottom-[30%] flex flex-col items-center justify-center">
          <p className="text-2xl lg:text-4xl text-white font-bold">
            Welcome Mohamed
          </p>
          <p className="text-sm text-gray-500">Please Upload Your Papers</p>
        </div>
        {/* dard */}
        <div className="absolute inset-0 -bottom-[25%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center">
          {cardteacher.map((item) => {
            return (
              <div
                key={item.id}
                className="border border-white w-44 h-auto text-center flex flex-col items-center justify-center p-4 rounded-lg"
              >
                <img
                  className=" w-16 h-16 object-contain "
                  src={item.img}
                  alt={item.name}
                />
                <p className="text-sm text-white font-bold py-2">{item.name}</p>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="rounded bg-primary px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
                >
                  Upload
                </button>
              </div>
            );
          })}
        </div>
        {/* END */}
      </div>
    </>
  );
};

export default Teacher;
