import React from "react";

const Cards = ({setButtonStates,buttonStates}) => {
  const cardteacher = [
    {
      id: "item1",
      name: "CV",
      img: "/public/Teacher/CardTeacher_1.svg",
    },
    {
      id: "item2",
      name: "Graduation  Certificate",
      img: "/public/Teacher/CardTeachet_3.svg",
    },
    {
      id: "item3",
      name: "Intro   Video",
      img: "/public/Teacher/CardTeachet_4.svg",
    },
    {
      id: "item4",
      name: `Additional  Documents`,
      img: "/public/Teacher/CardTeachet_2.svg",
    },
  ];



  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    setButtonStates((prevState) => ({
      ...prevState,
      [index]: prevState[index] === "Approved" ? "Upload" : "Approved",
    }));
  };

 
  return (
    <div className="relative inset-x-0 grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 mx-2 sm:mx-10">
      {cardteacher.map((item, index) => (
        <div
          key={item.id}
          className="border border-white h-52 text-center flex flex-col items-center justify-center p-4 rounded-lg"
        >
          <img
            className="w-16 h-16 object-cover"
            src={item.img}
            alt={item.name}
          />

          <div>
            <div>
              <p className="sm:w-44 min-h-[70px] text-sm sm:text-base lg:text-lg text-white font-bold py-2">
                {item.name}
              </p>
            </div>

            <label
              className={`${
                buttonStates[index] === "Approved"
                  ? "bg-green-500"
                  : "bg-primary"
              } hover:bg-blue-800 cursor-pointer rounded px-4 py-2 text-md font-semibold text-white transition-all duration-300`}
            >
              {buttonStates[index] === "Approved" ? "Approved" : "Upload"}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e, index)}
              />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
