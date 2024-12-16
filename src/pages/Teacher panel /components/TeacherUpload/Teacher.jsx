import React, { useState } from "react";
import TopText from "../Top Text Cards/TopText";
import DownText from "../Down text cards/DownText";
import Cards from "../Cards/Cards";
const Teacher = () => {
  const [buttonStates, setButtonStates] = useState([]);

  const allApproved =
    Object.values(buttonStates).length > 3 &&
    Object.values(buttonStates).every((state) => state === "Approved");

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

          {/*Cards */}
          <Cards
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
        </div>

        {/* Down Text */}
        <DownText allApproved={allApproved} />
      </div>
    </>
  );
};

export default Teacher;
