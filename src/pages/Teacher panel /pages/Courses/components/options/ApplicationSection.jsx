import React from "react";
import "./ApplicationSection.css";

const ApplicationSection = () => {
  const options = [
    {
      id: "001",
      title: "What School type do you teach?",
      name: "e.g American",
      opations: [
        "American International School",
        "British Academy",
        "Canadian Learning Center",
      ],
    },
    {
      id: "002",
      title: "Choose the subject you are applying for",
      name: "e.g Science",
      opations: ["Mathematics", "Science", "History", "English Literature"],
    },
    {
      id: "003",
      title: "What Grades are you applying for?",
      name: "e.g grade 1",
      opations: [
        "Grade 1 - Grade 5 (Elementary)",
        "Grade 6 - Grade 8 (Middle School)",
        "Grade 9 - Grade 12 (High School)",
      ],
    },
  ];

  return (
    <>
      <div
        id="options"
        className="h-auto w-full tracking-wide lg:pt-20 lg:ps-5"
      >
        {options.map((item) => {
          return (
            <div key={item.id}>
              <label
                htmlFor="HeadlineAct"
                className="text-gray-400 font-semibold text-base lg:text-lg"
              >
                {item.title}
              </label>
              <select
                name="HeadlineAct"
                id="HeadlineAct"
                className="mt-1.5 py-2 w-full rounded-lg text-lg font-semibold text-gray-600 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="" >{item.name}</option>
                {item.opations?.map((option, index) => (
                  <option
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
      </div>
    </>
  );
};

export default ApplicationSection;
