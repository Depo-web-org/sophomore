import React, { useState } from "react";
import "./Teacher.css";
import TopText from "./components/Top Text Cards/TopText";
import DownText from "./components/Down text cards/DownText";
import Cards from "./components/Cards/Cards";
const Teacher = () => {
  const [buttonStates, setButtonStates] = useState([]);

  const allApproved =
    Object.values(buttonStates).length > 3 &&
    Object.values(buttonStates).every((state) => state === "Approved");

  return (
    <>
      <div className="relative w-full">
        {/* photo */}

        <img
          src="/public/Teacher/Teacher panel.svg"
          alt="Teacher"
          className="w-full bg-blue-300  min-h-[100%] object-cover absolute "
        />
        <div className="pt-32">
          {/* top text*/}
          <TopText />

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
