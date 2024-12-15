import React, { useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";

const ApplicationSection = () => {
  const [showText, setshowText] = useState(null);

  const options = [
    {
      id: "098",
      title: "What School type do you teach ?",
      name: "e.g American",
      dec: "FAQsSection.Questions.0.answer",
    },
    {
      id: "876",
      title: "Choose the subject you are applying for",
      name: "e.g Science",
      dec: "FAQsSection.Questions.1.answer",
    },
    {
      id: "543",
      title: "What Grades are you applying for ",
      name: "e.g grade1",
      dec: "FAQsSection.Questions.2.answer",
    },
  ];
  return (
    <>
      <div
        id="options"
        className="h-auto w-full text-white tracking-wide lg:pt-20 lg:ps-5"
      >
        {options.map((item, index) => {
          return (
            <div key={index} className="mx-auto w-full m-[16px]">
              <p className="text-gray-300 font-bold text-base lg:text-lg">
                {item.title}
              </p>
              <div className="bg-[#37415114] rounded-md overflow-hidden">
                {/* Accordion Item */}
                <div className="relative transition-all duration-700">
                  <div
                    className="w-full px-2 pt-2 text-left cursor-pointer"
                    onClick={() => {
                      setshowText(showText === index ? null : index);
                    }}
                  >
                    {/* Text Item */}
                    <div className="flex items-center justify-between h-auto cursor-pointer font-medium text-gray-400 ">
                      <span
                        className={`tracking-wide h-auto w-full font-medium sm:w-auto text-base lg:text-xl`}
                      >
                        {item.name}
                      </span>

                      <TfiAngleDown
                        className={`w-[16px] h-[16px] transition-all duration-700 ${
                          showText === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  {/* dec Item */}
                  <div
                    className={`transition-all duration-700 text-gray-400 ease-in-out m-1 text-xs md:text-base font-normal ${
                      showText === index ? "max-h-screen" : "max-h-0"
                    } overflow-hidden`}
                  >
                    {item.dec}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ApplicationSection;
