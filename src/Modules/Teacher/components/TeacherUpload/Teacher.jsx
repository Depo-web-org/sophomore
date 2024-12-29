import React, { useState } from "react";
import TopText from "../Top Text Cards/TopText";

const Teacherr = () => {
  const [buttonStates, setButtonStates] = useState([]);
  const cardteacher = [
    {
      id: "item1",
      name: "CV",
      img: "/public/Teacher/CardTeacher_1.svg",
    },
    {
      id: "item2",
      name: "Graduation Certificate",
      img: "/public/Teacher/CardTeachet_3.svg",
    },
    {
      id: "item3",
      name: "Intro Video",
      img: "/public/Teacher/CardTeachet_4.svg",
    },
    {
      id: "item4",
      name: `Additional Documents`,
      img: "/public/Teacher/CardTeachet_2.svg",
    },
  ];

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    setButtonStates((prevState) => ({
      ...prevState,
      [index]: { status: "Approved", urlfile: file.name },
    }));

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("Base64 Source:", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const allApproved =
    Object.keys(buttonStates).length === cardteacher.length &&
    Object.values(buttonStates).every((state) => state.status === "Approved");

  const handleSubmitt = () => {
    console.log("Uploaded Data:", buttonStates);
    console.log("Check the console for uploaded data!", allApproved);
  };

  return (
    <>
      <div className="relative w-full h-screen">
        {/* photo */}
        <img
          src="/public/Teacher/Teacher panel.svg"
          alt="Teacher"
          className="w-full h-[100%] object-cover absolute "
        />
        <div className="pt-28 lg:pt-32">
          {/* top text*/}
          <TopText
            name={"Welcome Mohamed"}
            title={"Please Upload Your Papers"}
          />

          {/* Cards */}
          <div className="relative inset-x-0 grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 mx-2 sm:mx-10">
            {cardteacher.map((item, index) => (
              <div
                key={item.id}
                className={`border ${
                  buttonStates[index]?.status === "Approved"
                    ? "border-green-400"
                    : "border-white"
                }  h-52 text-center flex flex-col items-center justify-center p-4 rounded-lg`}
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
                      buttonStates[index]?.status === "Approved"
                        ? "bg-green-500"
                        : "bg-primary"
                    } hover:bg-blue-800 cursor-pointer rounded px-4 py-2 text-md font-semibold text-white transition-all duration-300`}
                  >
                    {buttonStates[index]?.status === "Approved"
                      ? "Approved"
                      : "Upload"}
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
        </div>

        {/* Down Text and Button */}
        <div className="relative inset-x-0 text-center py-14">
          <p className="text-lg sm:text-2xl lg:text-3xl text-white font-bold">
            Kindly wait until you get approved
          </p>

          {allApproved && (
            <button
              onClick={handleSubmitt}
              type="submit"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Teacherr;
