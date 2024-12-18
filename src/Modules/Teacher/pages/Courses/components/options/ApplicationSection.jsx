import React, { useState } from "react";
import "./ApplicationSection.css";
import Useoptions from "../../../../../../Hooks/Useoptions";

const ApplicationSection = () => {
  //  custom hook
  const { options, allFilled, selectedValues, handleSelectChange } =
    Useoptions();

  return (
    <>
      <div
        id="options"
        className="h-auto w-full tracking-wide lg:pt-16 lg:ps-5"
      >
        {options.map((item, index) => {
          return (
            <div key={item.id}>
              <label
                htmlFor="HeadlineAct"
                className="text-gray-400 font-semibold text-sm lg:text-md"
              >
                {item.title}
              </label>
              <select
                id={`dropdown-${index}`}
                value={selectedValues[index]}
                onChange={(e) => handleSelectChange(index, e.target.value)}
                className="mt-1.5 py-2 w-full rounded-lg text-sm lg:text-md font-semibold text-gray-600 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option hidden className="text-md font-semibold">
                  {item.name}
                </option>
                {item.opations?.map((option, index) => (
                  <option
                    className="text-md font-semibold"
                    key={index}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
        {allFilled && (
          <p className="text-xl text-red-400">All dropdowns are filled!</p>
        )}
      </div>
    </>
  );
};

export default ApplicationSection;
