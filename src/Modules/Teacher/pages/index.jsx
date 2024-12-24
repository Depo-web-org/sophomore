import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TopText from "../components/Top Text Cards/TopText";
import Useoptions from "../../../Hooks/Useoptions";
import Teacherr from "../components/TeacherUpload/Teacher";
import { IoCheckmarkDone } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";

const IndexTeacher = () => {
  // change elements
  const [showelement, setshowelement] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  // All Array
  const options = [
    {
      id: "Schools",
      title: "What School type do you teach ?",
      name: "e.g American",
      opations: [
        "American International School",
        "British Academy",
        "Canadian Learning Center",
      ],
    },
    {
      id: "Science",
      title: "Choose the subject you are applying for ?",
      name: "e.g Science",
      opations: ["Mathematics", "Science", "History", "English Literature"],
    },
    {
      id: "grade1s",
      title: "What Grades are you applying for ?",
      name: "e.g grade 1",
      opations: [
        "Grade 1 - Grade 5 (Elementary)",
        "Grade 6 - Grade 8 (Middle School)",
        "Grade 9 - Grade 12 (High School)",
      ],
    },
  ];
  // save data in Array
  const [selectedOptions, setSelectedOptions] = useState({
    Schools: [],
    Science: [],
    grade1s: [],
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    Schools: false,
    Science: false,
    grade1s: false,
  });
  // git value in options
  const handleOptionChange = (value, id) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = prevSelectedOptions[id];
      if (updatedOptions.includes(value)) {
        return {
          ...prevSelectedOptions,
          [id]: updatedOptions.filter((item) => item !== value),
        };
      }
      return { ...prevSelectedOptions, [id]: [...updatedOptions, value] };
    });
  };
  // toggle buttom
  const toggleDropdown = (id) => {
    setIsDropdownOpen((prevDropdownState) => ({
      ...prevDropdownState,
      [id]: !prevDropdownState[id],
    }));
  };
  // updete options
  React.useEffect(() => {
    setValue("options", selectedOptions);
  }, [selectedOptions, setValue]);

  // say data in console in submit to backend
  const onSubmit = (data) => {
    console.log("Form data:", data.options);
  };

  return (
    <>
      {showelement ? (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-96">
          {options.map((option) => (
            <div key={option.id} className="relative w-[400px] mt-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {option.title}
              </label>
              <button
                type="button"
                className="relative py-3 px-4 w-full bg-white border border-gray-300 rounded-lg text-start text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen[option.id]}
                onClick={() => toggleDropdown(option.id)}
              >
                {selectedOptions[option.id].length > 0
                  ? `${selectedOptions[option.id].length} selected`
                  : "Select multiple options..."}
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <HiChevronUp
                    className={`w-5 h-5 ${
                      isDropdownOpen[option.id] ? "rotate-180" : "rotate-0"
                    } transition-transform`}
                  />
                </span>
              </button>

              {isDropdownOpen[option.id] && (
                <ul className="absolute mt-2 z-50 w-full max-h-72 bg-white border border-gray-300 rounded-lg overflow-y-auto shadow-lg">
                  {option.opations.map((item, index) => (
                    <li
                      key={index}
                      className={`py-2 px-4 text-sm cursor-pointer hover:bg-gray-100 ${
                        selectedOptions[option.id].includes(item)
                          ? "bg-blue-100"
                          : "bg-white"
                      }`}
                      onClick={() => handleOptionChange(item, option.id)}
                    >
                      <div
                        id="options"
                        className="flex justify-between items-center"
                      >
                        <span>{item}</span>
                        {selectedOptions[option.id].includes(item) && (
                          <IoCheckmarkDone className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Error Options */}
          <input
            {...register("options", {
              required: "Please select at least one option from each dropdown",
              validate: {
                notEmpty: () => {
                  const allDropdownsFilled = Object.keys(selectedOptions).every(
                    (key) =>
                      selectedOptions[key] && selectedOptions[key].length > 0
                  );
                  return (
                    allDropdownsFilled ||
                    "All dropdowns must have at least one option selected."
                  );
                },
                maxOptionsPerDropdown: () => {
                  const maxOptions = {
                    Schools: 2,
                    Science: 3,
                    grade1s: 1,
                  };

                  for (const key of Object.keys(selectedOptions)) {
                    if (
                      selectedOptions[key].length >
                      (maxOptions[key] || Infinity)
                    ) {
                      return `You have exceeded the maximum allowed options for " ${key} ".`;
                    }
                  }

                  return true;
                },
              },
            })}
            type="hidden"
            value={JSON.stringify(selectedOptions)}
          />

          {errors.options && (
            <p className="text-red-500 text-sm mt-2">
              {errors.options.message}
            </p>
          )}

          <button
            type="submit"
            className="rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
          >
            Next step
          </button>
        </form>
      ) : (
        <Teacherr />
      )}
    </>
  );
};

export default IndexTeacher;
