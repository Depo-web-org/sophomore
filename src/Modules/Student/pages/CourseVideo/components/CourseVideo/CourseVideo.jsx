import React from "react";
import { useState } from "react";

export default function Video() {
  return (
    <div className="flex justify-between items-start flex-wrap gap-4 lg:gap-8 w-full ">
      <div className="flex flex-col items-start justify-start gap-2">
        <iframe
          src="https://www.youtube.com/embed/OQjkFQAIOck?si=wEdNFopy_U2h5_tD"
          // title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full lg:min-w-[560px]  h-[315px] rounded-lg"
        ></iframe>
        <div className="flex flex-row w-full  justify-between items-center  lg:flex-col lg:items-start gap-2 mt-4">

        <p className=" text-lg lg:text-2xl text-white font-medium ">Unit 1</p>
        <p className=" text-sm lg:text-2xl text-[#FFFFFF70] font-medium">
          Introduction to mathematics
        </p>
        </div>
      </div>
      <Units />
    </div>
  );
}

function Units() {
  const [selectedUnits, setSelectedUnits] = useState([]);

  const handleUnitToggle = (unit) => {
    setSelectedUnits((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  return (
    <div className="bg-slate-900 rounded-lg  p-6 w-full lg:max-w-md hover:shadow-[6px_6px_0px_0px_#F15C54] duration-150 transition-all shadow-[4px_4px_0px_0px_#F15C54]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-white">Choose The Unit</h1>
      </div>

      <div className="space-y-4">
        {["Unit 1", "Unit 2", "Unit 3", "Unit 4"].map((unit) => (
          <label
            key={unit}
            className="flex items-center space-x-3 bg-slate-900 rounded-lg px-4 py-2 text-primary hover:bg-slate-700 transition"
          >
            <input
              type="checkbox"
              className="w-5 h-5 text-primary border-gray-300 rounded checked:accent-primary"
              checked={selectedUnits.includes(unit)}
              onChange={() => handleUnitToggle(unit)}
            />
            <span className="text-white">{unit}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
